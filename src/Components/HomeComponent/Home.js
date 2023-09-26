

import { BsPersonFill } from "react-icons/bs";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { Card } from "react-bootstrap";

 import style from "./Home.module.css";
 import pic1 from "../../images/1.png";
 import pic2 from "../../images/2.png";
 import pic3 from "../../images/3.jpg";
 import logo from "../../images/IGA-min-1200x900-cropped.png";

 import {NavLink} from "react-router-dom";


    
    function Home(){
      return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">
            <NavLink className="navbar-brand" to="/Home">
              <img src={logo} className={style.logo} alt="Logo" />
              Système d'examen en ligne
            </NavLink>
          </div>
        </nav>
  
        <div  className={`${style.background}`}>
          <div className="container">
          <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className={style.title}>Bienvenue sur le système d'examen en ligne</h2>
      </div>
    </div>
            <div className="row justify-content-center">
            <div className="col-md-4">
                <Card className={`card yellow ${style.card}`}>
                  <Card.Body>
                    <NavLink exact to="/ProfLogin">
                      <BsPersonFill className={`icon ${style.icon}`} />
                      <span>Prof</span>
                    </NavLink>
                  </Card.Body>
                </Card>
              </div>
  
              <div className="col-md-4">
              <Card className={`card red ${style.card}`}>
                <Card.Body>
                  <NavLink exact to="/StudentLogin">
                    <BsPersonFill className={`icon ${style.icon}`} />
                    <span>Étudiant</span>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4">
              <Card className={`card blue ${style.card}`}>
                <Card.Body>
                  <NavLink to="/AdminLogin">
                    <AiFillFolderOpen className={`icon ${style.icon}`} />
                    <span>Admin</span>
                  </NavLink>
                </Card.Body>
              </Card>
            </div>
            </div>
          </div>
        </div>
      </>
       ); 
    }

     

    export default Home;