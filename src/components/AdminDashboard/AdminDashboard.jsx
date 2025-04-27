import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBuilding, faUsers, faDollarSign, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/dashboard/");
        setDashboardData(response.data);
      } catch (err) {
        setError("Failed to fetch dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <h4>Loading dashboard...</h4>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center my-5">
        <h4>{error}</h4>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Dashboard Overview</h2>

      <Row className="g-4">
        {/* Bookings Section */}
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faCalendarAlt} size="3x" className="mb-3 text-primary" />
              <Card.Title>Bookings</Card.Title>
              <Card.Text>
                <strong>This Week:</strong> {dashboardData.bookings_week}
              </Card.Text>
              <Card.Text>
                <strong>This Month:</strong> {dashboardData.bookings_month}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Top Hotels */}
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faBuilding} size="3x" className="mb-3 text-primary" />
              <Card.Title>Top Hotels</Card.Title>
              <ListGroup variant="flush">
                {dashboardData.top_hotels.map((hotel, index) => (
                  <ListGroup.Item key={index}>{hotel}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Top Users */}
        <Col md={4}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faUsers} size="3x" className="mb-3 text-primary" />
              <Card.Title>Top Users</Card.Title>
              <ListGroup variant="flush">
                {dashboardData.top_users.map((user, index) => (
                  <ListGroup.Item key={index}>{user}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-4">
        {/* Sales Section */}
        <Col md={6}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faDollarSign} size="3x" className="mb-3 text-success" />
              <Card.Title>Sales Overview</Card.Title>
              <Card.Text>
                <strong>Current Month:</strong> {dashboardData.sell_current_month}
              </Card.Text>
              <Card.Text>
                <strong>Previous Month:</strong> {dashboardData.sell_previous_month}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Performance Section */}
        <Col md={6}>
          <Card className="shadow-sm text-center">
            <Card.Body>
              <FontAwesomeIcon icon={faChartLine} size="3x" className="mb-3 text-info" />
              <Card.Title>Performance</Card.Title>
              <Card.Text>
                <strong>Bookings Completed:</strong> {dashboardData.completed_bookings}
              </Card.Text>
              <Card.Text>
                <strong>Revenue Growth:</strong> {dashboardData.revenue_growth}%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;