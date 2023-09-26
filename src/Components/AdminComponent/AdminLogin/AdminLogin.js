import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { Form, Button, Card } from "react-bootstrap";

import logoImage from "../../../images/IGA-min-1200x900-cropped.png";

function AdminLogin() {
  const [admin, setAdmin] = useState({
    admin_name: "",
    admin_password: ""
  });

  function handleInput(e) {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value
    });
  }

  let history = useHistory();

  async function login(e) {
    const value = await axios.get(`${baseUrl}/admin/${admin.admin_name}`);

    if (value.data.name === admin.admin_name) {
      if (value.data.password === admin.admin_password) {
        alert("Success");
        history.push("/AdminDashboard");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong Admin Name");
    }
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#2a3cd8" }}
    >
      <img  src={logoImage}
      alt="Logo"
      className="mb-4"
      style={{ width: "200px" }}/>

      <Card className="p-4" style={{ backgroundColor: "#17a2b8" }}>
        <Card.Title className="text-center mb-4">
          <h1>Admin Login</h1>
        </Card.Title>

        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="admin_name"
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Enter your email"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="admin_password"
              onChange={(e) => handleInput(e)}
              type="password"
              placeholder="Enter your password"
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" onClick={(e) => login(e)}>
              Login
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <NavLink exact to="/" className="go-back-link">
            Go Back
          </NavLink>
        </div>
      </Card>
    </div>
  );
}

export default AdminLogin;
