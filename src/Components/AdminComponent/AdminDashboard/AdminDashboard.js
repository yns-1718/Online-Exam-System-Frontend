
    
    import style from "./AdminDashboard.module.css";

    import {useHistory} from "react-router-dom";

    import {NavLink , BrowserRouter , Switch , Route} from "react-router-dom";

     import pic4 from "../../../images/IGA-min-1200x900-cropped.png";
    
    
    import Dashboard from "./Dashboard/Dashboard";
    import Subject from "./SubjectComponent/Subject";
    import Exam from "./ExamComponent/Exam";
    import Question from "./QuestionComponent/Question";
    import Result from "./ResultComponent/Result";
    import StudentList from "./StudentList/StudentList";
    import Student from "./StudentList/Student/Student";

    import Details from "./ExamComponent/DetailComponent/Details";
    import ViewQuestion from "./ExamComponent/ViewQuestion/ViewQuestion";
    import AddQuestion from "./ExamComponent/AddQuestion/AddQuestion";


    
    function AdminDashboard(){

         let history = useHistory();

         function goToAdminLogin(){
              history.push("/AdminLogin");
         }


        return (
            <>
            <BrowserRouter>
              <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                  <NavLink className="navbar-brand" to="/AdminDashboard">
                  Système d'examen en ligne  (Admin Dashboard)
                  </NavLink>
                  <div className="ml-auto">
                    <button className="btn btn-danger" onClick={goToAdminLogin}>
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
                            to="/AdminDashboard/Subject"
                          >
                           Sujet
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName="active"
                            to="/AdminDashboard/Exam"
                          >
                            Exam
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName="active"
                            to="/AdminDashboard/Question"
                          >
                            Question
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName="active"
                            to="/AdminDashboard/Result"
                          >
                            Résultat
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName="active"
                            to="/AdminDashboard/StudentList"
                          >
                            Liste des utilisateurs
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
      
                  <main className="col-lg-10">
                    <Switch>
                      <Route exact path="/AdminDashboard" component={Dashboard}></Route> 
                      <Route
                        exact
                        path="/AdminDashboard/Subject"
                        component={Subject}
                      ></Route>
                      <Route
                        exact
                        path="/AdminDashboard/Exam"
                        component={Exam}
                      ></Route>
                      <Route
                        exact
                        path="/AdminDashboard/Question"
                        component={Question}
                      ></Route>
                      <Route
                        exact
                        path="/AdminDashboard/Result"
                        component={Result}
                      ></Route>
                      <Route exact path="/AdminDashboard/StudentList/Details/:id" component={Student}></Route>
                      {/*Question detials */}
                      <Route
                        exact
                        path="/AdminDashboard/Exam/Details/:id"
                        component={Details}
                      ></Route>
                      <Route
                        exact
                        path="/AdminDashboard/Exam/ViewQuestion/:id"
                        component={ViewQuestion}
                      ></Route>
                      <Route
                        exact
                        path="/AdminDashboard/Exam/AddQuestion/:id"
                        component={AddQuestion}
                      ></Route>
                       <Route exact path="/AdminDashboard/StudentList" component={StudentList}></Route> 
                    </Switch>
                  </main>
                </div>
              </div>
            </BrowserRouter>
          </>
        );
    }

    export default AdminDashboard;

