import style from "../StudentDashboard.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import baseUrl from "../../../baseUrl";

function Subject() {
  const [allSubject, setAllSubject] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      let value = await axios.get(`${baseUrl}/subject`);
      setAllSubject(value.data);
    }
    getAllSubject();
  }, []);

  return (
    <>
      <div className={`container ${style.subjectContainer}`}>
        <div className={`text-center ${style.displayBoxHeadingBox}`}>
          <h1>Choose Subjects</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {allSubject.map((data, i) => {
            return (
              <div className="col" key={i}>
                <div className={`card ${style.subjectCard}`}>
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <NavLink exact to={`/StudentDashboard/Exam/${data.name}`}>
                      <button className={`btn btn-primary ${style.subjectButton}`}>
                      Aller à l'examen
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Subject;
