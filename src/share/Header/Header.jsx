import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contextsApi/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faHotel, faEnvelope, faUser, faBook, faSignOutAlt, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4">
          <FontAwesomeIcon icon={faHotel} className="me-2" />
          Phimart Hotels
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              <FontAwesomeIcon icon={faHome} className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              About
            </Nav.Link>
            {!user && (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Register
                </Nav.Link>
              </>
            )}

            {user?.role === "admin" && (
              <Nav.Link as={NavLink} to="/admin-dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
                Dashboard
              </Nav.Link>
            )}

            {user && (
              <>
                <Nav.Link as={NavLink} to="/hotels">
                  <FontAwesomeIcon icon={faHotel} className="me-2" />
                  Hotels
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  Contact
                </Nav.Link>
                <NavDropdown title={<span><FontAwesomeIcon icon={faUser} className="me-2" />Account</span>} id="account-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to="/profile">
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/bookings">
                    <FontAwesomeIcon icon={faBook} className="me-2" />
                    My Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;