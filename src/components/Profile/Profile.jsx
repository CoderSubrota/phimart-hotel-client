import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faEnvelope,
  faPhone,
  faEdit,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Profile = () => {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  return (
   <>
   <Helmet>
    <title>Profile page </title>
   </Helmet>
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faUserCircle}
                size="6x"
                className="mb-3 text-primary"
              />
              <Card.Title className="mt-3">
                {user?.first_name} {user?.last_name}
              </Card.Title>
              <Card.Text>Software Developer | Tech Enthusiast</Card.Text>
              <hr />
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2 text-secondary"
                />
                <span>Email: {user?.email} </span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="me-2 text-secondary"
                />
                <span title="This is dummy data">Phone: +123456789</span>
              </div>
              <div className="mt-2">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="me-2 text-success"
                />
                <span title="This is dummy data">Balance: {user?.balance}</span>
              </div>

              <hr />
              <Button variant="primary">
                <FontAwesomeIcon icon={faEdit} className="me-2" />
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   </>
  );
};

export default Profile;
