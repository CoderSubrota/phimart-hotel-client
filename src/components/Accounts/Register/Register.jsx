import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

export default function UserRegistrationForm({ apiUrl = 'https://phimart-hotel-server.onrender.com/api/accounts/' }) {
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onBlur'
  });

  const submitHandler = async (data) => {
    setServerError('');
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorData = await response.json();
        setServerError(Object.values(errorData).flat().join(' '));
        return;
      }
      setSuccess(true);
    } catch {
      setServerError('Network error.');
    }
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Create Account</h2>
      {success && <Alert variant="success" style={{margin:"16% 0px"}}>Registration successful! Check your email to verify your account.</Alert>}
      {serverError && <Alert variant="danger" style={{margin:"16% 0px"}}>{serverError}</Alert>}
      {!success && (
        <Form style={{margin:"6% 0px"}} onSubmit={handleSubmit(submitHandler)} noValidate>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('first_name', { maxLength: 150 })}
                  isInvalid={!!errors.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.first_name?.type === 'maxLength' && 'Max 150 characters.'}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('last_name', { maxLength: 150 })}
                  isInvalid={!!errors.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.last_name?.type === 'maxLength' && 'Max 150 characters.'}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="username">
                <Form.Label>Username*</Form.Label>
                <Form.Control
                  type="text"
                  {...register('username', {
                    required: 'Username is required.',
                    pattern: {
                      value: /^[\w.@+-]+$/,
                      message: 'Letters, digits and @/./+/-/_ only.'
                    },
                    maxLength: { value: 150, message: 'Max 150 characters.' }
                  })}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  {...register('email', {
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: 'Invalid email format.'
                    },
                    maxLength: { value: 254, message: 'Max 254 characters.' }
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="password">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  {...register('password', {
                    required: 'Password is required.',
                    minLength: { value: 1, message: 'Required.' },
                    maxLength: { value: 128, message: 'Max 128 characters.' }
                  })}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group controlId="balance">
                <Form.Label>Balance</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  {...register('balance', {
                    validate: value => value === '' || !isNaN(parseFloat(value)) || 'Must be a number.'
                  })}
                  isInvalid={!!errors.balance}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.balance?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="success" className='w-25' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </Form>
      )}
      {success && (
        <div className="d-flex justify-content-center mt-4">
          <Button variant="secondary" disabled>
            Submitted
          </Button>
        </div>
      )}
    </Container>
  );
}
