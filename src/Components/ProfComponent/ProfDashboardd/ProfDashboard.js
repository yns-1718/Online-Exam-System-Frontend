import React from "react";
import { useHistory } from "react-router-dom";
import { NavLink, BrowserRouter, Switch, Route } from "react-router-dom";
import pic4 from "../../../images/IGA-min-1200x900-cropped.png";
import "bootstrap/dist/css/bootstrap.css";
import "./ProfDashboard.css";

import Subject from "./SubjectComponent/Subject";
import Exam from "./ExamComponent/Exam";
import Question from "./QuestionComponent/Question";
import Result from "./ResultComponent/Result";

import Details from "./ExamComponent/DetailComponent/Details";
import ViewQuestion from "./ExamComponent/ViewQuestion/ViewQuestion";
import AddQuestion from "./ExamComponent/AddQuestion/AddQuestion";

function ProfDashboard() {
  let history = useHistory();

  function goToProfLogin() {
    history.push("/ProfLogin");
  }

  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">
            <NavLink className="navbar-brand" to="/ProfDashboardd">
              Online Exam System (Prof Dashboard)
            </NavLink>
            <div className="ml-auto">
              <button className="btn btn-danger" onClick={goToProfLogin}>
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-lg-2 bg-info sidebar">
              <div className="sidebar-sticky">
                <div className="sidebarImageBox">
                  <img src={pic4} className="logo" alt="" />
                </div>

                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="active"
                      to="/ProfDashboardd/Subject"
                    >
                      Subject
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="active"
                      to="/ProfDashboardd/Exam"
                    >
                      Exam
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="active"
                      to="/ProfDashboardd/Question"
                    >
                      Question
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      className="nav-link"
                      activeClassName="active"
                      to="/ProfDashboardd/Result"
                    >
                      Result
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <main className="col-lg-10">
              <Switch>
                {/* <Route exact path="/ProfDashboardd" component={Dashboard}></Route> */}
                <Route
                  exact
                  path="/ProfDashboardd/Subject"
                  component={Subject}
                ></Route>
                <Route
                  exact
                  path="/ProfDashboardd/Exam"
                  component={Exam}
                ></Route>
                <Route
                  exact
                  path="/ProfDashboardd/Question"
                  component={Question}
                ></Route>
                <Route
                  exact
                  path="/ProfDashboardd/Result"
                  component={Result}
                ></Route>

                {/*Question detials */}
                <Route
                  exact
                  path="/ProfDashboardd/Exam/Details/:id"
                  component={Details}
                ></Route>
                <Route
                  exact
                  path="/ProfDashboardd/Exam/ViewQuestion/:id"
                  component={ViewQuestion}
                ></Route>
                <Route
                  exact
                  path="/ProfDashboardd/Exam/AddQuestion/:id"
                  component={AddQuestion}
                ></Route>
              </Switch>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default ProfDashboard;

