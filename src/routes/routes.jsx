import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import UserRegistrationForm from "../components/Accounts/Register/Register";
import UserLoginForm from "../components/Accounts/Login/Login";
import Hotel from "../components/Hotel/Hotel";
import BookNow from "../components/BookNow/BookNow";
import Add_Hotel from "../components/Add_Hotel/Add_Hotel";
import EditHotel from "../components/EditHotel/EditHotel";
import Hotels from "../components/Hotels/Hotels";
import Review from "../components/Review/Review";
import HotelImageUpload from "../components/AddHotelImage/AddHotelImage";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import AdminRoute from "../AdminRoute/AdminRoute";
import Profile from "../components/Profile/Profile";
import BookingPage from "../components/BookingPage/BookingPage";
import ContactPage from "../components/ContactPage/ContactPage";
import AboutPage from "../components/AboutPage/AboutPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <UserRegistrationForm></UserRegistrationForm>,
      },
      {
        path: "/login",
        element: <UserLoginForm></UserLoginForm>,
      },
      {
        path: "/hotel/:id",
        element: <Hotel></Hotel>,
      },
      {
        path: "hotel/:id/payment/:id",
        element: <PrivateRoute element={<BookNow></BookNow>} />,
      },
      {
        path: "hotels/",
        element: <PrivateRoute element={<Hotels></Hotels>} />,
      },
      {
        path: "hotels/add-hotel/",
        element: <AdminRoute element={<Add_Hotel></Add_Hotel>} />,
      },
      {
        path: "edit-hotel/:id",
        element: <AdminRoute element={<EditHotel></EditHotel>} />,
      },
      {
        path: "hotel/:id/review/:id",
        element: <PrivateRoute element={<Review></Review>} />,
      },
      {
        path: "hotel/:id/hotel-image/:id",
        element: <AdminRoute element={<HotelImageUpload></HotelImageUpload>} />,
      },
      {
        path: "admin-dashboard/",
        element: <AdminRoute element={<AdminDashboard></AdminDashboard>} />,
      },
      {
        path: "profile/",
        element: <PrivateRoute element={<Profile />} />,
      },
      {
        path: "bookings/",
        element: <PrivateRoute element={<BookingPage />} />,
      },
      {
        path: "contact/",
        element: <PrivateRoute element={<ContactPage />} />,
      },
      {
        path: "about/",
        element: <PrivateRoute element={<AboutPage />} />,
      },
      {
        path: "*",
        element: (
          <h2 className="text-info mt-5 fs-2 fw-bold text-center">
            This page is not found !!
          </h2>
        ),
      },
    ],
  },
]);

export default routes;
