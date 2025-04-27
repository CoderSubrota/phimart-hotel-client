import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Container, Card, Alert, InputGroup } from 'react-bootstrap';
import { Mail } from 'lucide-react';

export default function ForgotPasswordForm({ apiUrl = 'https://phimart-hotel-server.onrender.com/api/accounts/password-reset/' }) {
  const [serverMessage, setServerMessage] = useState('');
  const [serverError, setServerError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });

  const onSubmit = async ({ email }) => {
    setServerError('');
    setServerMessage('');
    setIsSubmitting(true);
    try {
      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await resp.json();
      if (!resp.ok) {
        setServerError(data.detail || 'Something went wrong.');
      } else {
        setServerMessage('If this email is registered, you will receive password reset instructions shortly.');
      }
    } catch (err) {
      setServerError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
      <Card className="p-4 shadow p-3 mb-5 bg-white rounded" style={{maxWidth: 400, width: '100%'}}>
        <Card.Body>
          <h3 className="text-center mb-4">Forgot Password?</h3>
          <p className="text-center text-muted mb-4">Enter your email address and we'll send you instructions to reset your password.</p>
          {serverError && <Alert variant="danger" className="text-center">{serverError}</Alert>}
          {serverMessage && <Alert variant="success" className="text-center">{serverMessage}</Alert>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email Addres </Form.Label> <InputGroup>
                <InputGroup.Text>
                  <Mail size={16} />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="you@example.com"
                  {...register('email', {
                    required: 'Email is required.',
                    pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email address.' }
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button type="submit" className="w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <div className="text-center mt-3">
              <Button variant="link" onClick={() => window.history.back()} className="p-0">Back to Login</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
