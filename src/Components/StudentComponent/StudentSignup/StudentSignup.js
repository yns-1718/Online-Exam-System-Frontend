import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";


import baseUrl from "../../baseUrl";
import logoImage from "../../../images/IGA-min-1200x900-cropped.png";


function StudentSignup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function onTextFieldChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  const [password, setPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  let history = useHistory();

  async function handleSignup() {
    if (userData.password === password) {
      await axios.post(`${baseUrl}/user`, userData);
      alert("Your account has been created");
      alert("Please login");
      history.push("/StudentLogin");
    } else {
      alert("Passwords do not match");
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
          <h1>Student Signup</h1>
        </Card.Title>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => onTextFieldChange(e)}
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => onTextFieldChange(e)}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => onTextFieldChange(e)}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={(e) => handlePassword(e)}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" onClick={handleSignup}>
              Sign Up
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          Have an account?{" "}
          <NavLink exact to="/StudentLogin">
            Log in
          </NavLink>
        </div>
      </Card>
    </div>
  );
}

export default StudentSignup;
