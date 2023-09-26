import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import { Card, Button } from "react-bootstrap";
import style from "./Dashboard.module.css";

function Dashboard() {
  const [exam, setExam] = useState("Updating...");
  const [question, setQuestion] = useState("Updating...");
  const [user, setUser] = useState("Updating...");

  useEffect(() => {
    async function getAllExam() {
      let value = await axios.get(`${baseUrl}/exam`);
      setExam("We have total " + value.data.length + " exam");
    }
    getAllExam();

    async function getAllQuestions() {
      let value = await axios.get(`${baseUrl}/question`);
      setQuestion("We have total " + value.data.length + " question");
    }
    getAllQuestions();

    async function getAllUsers() {
      let value = await axios.get(`${baseUrl}/user`);
      setUser("We have total " + value.data.length + " user");
    }
    getAllUsers();
  }, []);

  let history = useHistory();

  function showExam() {
    history.push("/AdminDashboard/Exam");
  }

  function showQuestions() {
    history.push("/AdminDashboard/Question");
  }

  function showUsers() {
    history.push("/AdminDashboard/StudentList");
  }

  return (
    <>
      <div id={style.displayHeadingBox}>
        <h1>Dashboard</h1>
      </div>

      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Total des examens</Card.Title>
              <Card.Text>{exam}</Card.Text>
              <Button variant="primary" onClick={showExam}>
              Voir les détails
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Total des questions</Card.Title>
              <Card.Text>{question}</Card.Text>
              <Button variant="primary" onClick={showQuestions}>
              Voir les détails
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card>
            <Card.Body>
              <Card.Title>Total des utilisateurs</Card.Title>
              <Card.Text>{user}</Card.Text>
              <Button variant="primary" onClick={showUsers}>
              Voir les détails
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
