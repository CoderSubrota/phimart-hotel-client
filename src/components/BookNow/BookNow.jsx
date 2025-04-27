import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import { Helmet } from "react-helmet";

const stripe_key = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(stripe_key);

const CheckoutForm = () => {
  const { id } = useParams();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch(`https://phimart-hotel-server.onrender.com/api/hotels/${id}/`);
        if (!response.ok) throw new Error("Failed to fetch hotel details");
        const data = await response.json();
        setHotel(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [id]);

  const generateReceiptPDF = (transactionId) => {
    const doc = new jsPDF();
    doc.text("Phimart Hotel Booking Payment Receipt", 20, 20);
    doc.text(`Name: ${user.first_name} ${user.last_name}`, 20, 30);
    doc.text(`Email: ${user.email}`, 20, 40);
    doc.text(`Hotel: ${hotel.name}`, 20, 50);
    doc.text(`Amount Paid: $${hotel.price}`, 20, 60);
    doc.text(`Transaction ID: ${transactionId}`, 20, 70); 
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 80);
    doc.save("payment-receipt.pdf");
    setDownloadCompleted(true); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    if (!stripe || !elements) {
      setMessage("Stripe is not loaded.");
      setLoading(false);
      return;
    }

    if (!user || !hotel) {
      setMessage("User or hotel information is missing.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (pmError) {
      setMessage(pmError.message);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://phimart-hotel-server.onrender.com/api/hotels/${id}/payment/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: hotel.price * 100, 
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.clientSecret) {
        const { error: confirmError, paymentIntent } =
          await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: paymentMethod.id,
          });

        if (confirmError) {
          setMessage(confirmError.message);
          setLoading(false);
          return;
        }

        if (paymentIntent.status === "succeeded") {
          const updatedBalance = user.balance - hotel.price;
          const updatedUser = { ...user, balance: updatedBalance };
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));

          setMessage("Payment successful! Generating receipt...");
          setTransactionId(data.transactionId);
          generateReceiptPDF(data.transactionId); 
        } else {
          setMessage("Payment failed.");
        }
      } else {
        setMessage(data.error || "Payment intent creation failed.");
      }
    } catch (err) {
      setMessage(`Payment failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
  
    <div className="container mt-5" style={{ margin: "14% 0px" }}>
      <h2 className="text-center">Checkout</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-50 mx-auto card p-4 shadow-lg rounded"
      >
        <h4 className="text-center mb-4">Hotel Booking Payment</h4>
        <div className="form-group">
          <label htmlFor="card-element" className="font-weight-bold">
            Credit or Debit Card
          </label>
          <CardElement
            id="card-element"
            className="form-control border-0 p-3"
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div className="text-center mt-3">
          <button
            type="submit"
            className="btn btn-primary w-50 py-3 shadow-sm"
            disabled={!stripe || loading}
            style={{ borderRadius: "50px", fontWeight: "bold" }}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
        {message && <p className="mt-3 text-success fw-bold text-center">{message}</p>}
      </form>

      {downloadCompleted && (
        <div className="mt-4 text-center">
          <p className="text-success">
            <span role="img" aria-label="checkmark">✔</span> Receipt download Completed
          </p>
        </div>
      )}

      {transactionId && (
        <div className="mt-5">
          <h3>Payment Details</h3>
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Hotel Name</th>
                <th>Amount Paid</th>
                <th>Transaction ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {user?.first_name} {user?.last_name}
                </td>
                <td>{user?.email}</td>
                <td>{hotel?.name}</td>
                <td>${hotel?.price}</td>
                <td>{transactionId}</td>
                <td>{new Date().toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const BookNow = () => {
  return (
    <>
    <Helmet>
      <title>Book Now</title>
    </Helmet>

    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    </>
  );
};

export default BookNow;
