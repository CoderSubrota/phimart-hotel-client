import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";
import { AuthContext } from "../../../contextsApi/AuthContext";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function UserLoginForm({
  apiUrl = "https://hotel-server-r5s5.onrender.com/api/accounts/login/",
}) {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });
  const { login } = useContext(AuthContext);
  const submitHandler = async (data) => {
    setServerError("");
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setServerError(Object.values(errorData).flat().join(" "));
        return;
      }
      console.log(response.username);
      await login(data.username, data.password);
      navigate("/", { state: { message: "Login successful!" } });
    } catch {
      setServerError("Network error.");
      setServerError(errors.message || "Login failed.");
    }
  };

  return (
    <>
    <Helmet>
      <title>Login Page</title>
    </Helmet>

    <Container
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
      }}
    >
      <Card className="p-4 shadow-lg" style={{ maxWidth: 400, width: "100%" }}>
        <Card.Body>
          <h3 className="text-center mb-4">Welcome Back</h3>
          {serverError && (
            <Alert variant="danger" className="text-center">
              {serverError}
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required.",
                  pattern: {
                    value: /^[\w.@+-]+$/,
                    message: "Letters, digits and @/./+/-/_ only.",
                  },
                  maxLength: { value: 150, message: "Max 150 characters." },
                })}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required.",
                  maxLength: { value: 128, message: "Max 128 characters." },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="rememberMe" className="mb-3">
              <Form.Check
                type="checkbox"
                label="Remember me"
                {...register("rememberMe")}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </Button>

            <div className="text-center">
              <a target="blank" href="https://hotel-server-r5s5.onrender.com/api/accounts/password-reset/">
                <Button variant="link" className="p-0">
                  Forgot password?
                </Button>
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </>
  );
}
