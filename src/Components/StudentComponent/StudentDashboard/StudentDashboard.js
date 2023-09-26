import { NavLink, Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import { useEffect } from "react";
import style from "./StudentDashboard.module.css";
import Subject from "./Subject/Subject";
import Result from "./ResultComponent/Result";
import Exam from "./ExamComponent/Exam";
import Test from "./TestComponent/Test"; // Import the Test component

function StudentDashboard() {
  useEffect(() => {
    if (sessionStorage.getItem("user") == null) {
      alert("Detect Illegal Way of Entering");
      history.push("/StudentLogin");
    }
  });

  let history = useHistory();

  function logout() {
    sessionStorage.clear();
    history.push("/StudentLogin");
  }

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/StudentDashboard">
            Système d'examen en ligne
            </NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/StudentDashboard">
                  Sujet
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/StudentDashboard/Result">
                  Mon résultat
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" onClick={logout} exact to="/StudentLogin">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <h2 className="text-center mt-4 mb-4">Welcome to the Online Exam System</h2>

          <Switch>
            <Route exact path="/StudentDashboard" component={Subject}></Route>
            <Route exact path="/StudentDashboard/Result" component={Result}></Route>
            <Route exact path="/StudentDashboard/Exam/:category" component={Exam}></Route>
            <Route exact path="/StudentDashboard/Exam/:category/:id" component={Test}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default StudentDashboard;
