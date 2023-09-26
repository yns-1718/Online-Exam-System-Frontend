import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Form, Button, Card } from "react-bootstrap";

// Import your logo image
import logoImage from "../../../images/IGA-min-1200x900-cropped.png";

function StudentLogin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  let history = useHistory();

  async function handleLogin() {
    let value = await axios.get(`${baseUrl}/user/${user.email}`);

    if (
      value.data.email === user.email &&
      value.data.password === user.password
    ) {
      alert("Success");
      sessionStorage.setItem("user", user.email);
      history.push("/StudentDashboard");
    } else {
      alert("Wrong User Email or password");
    }
  }

  return (
    <div
    className="d-flex flex-column align-items-center justify-content-center min-vh-100"
    style={{ backgroundColor: "#2a3cd8" }}
  >
    <img
      src={logoImage}
      alt="Logo"
      className="mb-4"
      style={{ width: "200px" }} // Adjust the width as needed
    />

    <Card className="p-4" style={{ backgroundColor: "#17a2b8" }}>
      <Card.Title className="text-center mb-4">
        <h1>Student Login</h1>
      </Card.Title>

      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => onTextFieldChange(e)}
            type="text"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={(e) => onTextFieldChange(e)}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </Form>

      <div className="text-center mt-3">
        New to Portal? <NavLink exact to="/StudentSignup">Register</NavLink>
        <NavLink className="go-back-link" exact to="/">
          Go Back
        </NavLink>
      </div>
    </Card>
  </div>
  );
}

export default StudentLogin;
