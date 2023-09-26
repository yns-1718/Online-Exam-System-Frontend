import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import style from "../StudentDashboard.module.css";
import baseUrl from "../../../baseUrl";

function Exam() {
  let { category } = useParams();

  const [allExam, setAllExam] = useState([]);

  useEffect(() => {
    async function getAllExams() {
      let value = await axios.get(`${baseUrl}/exam`);
      setAllExam(value.data);
    }
    getAllExams();
  }, []);

  return (
    <>
      <div className={`container ${style.displayBoxHeadingBox}`}>
        <div className="row justify-content-center">
          <div className={`col-md-8 text-center ${style.centerTitle}`}>
            <h1>Tous {category} examens </h1>
          </div>
        </div>
      </div>
      <div className={`container ${style.examContainer}`}>
        <div className="row justify-content-center">
          {allExam.map((data, i) => {
            if (data.name.name === category) {
              return (
                <div className={`col-lg-4 col-md-6 ${style.displayBoxExamBox}`} key={i}>
                  <div className={`card ${style.card}`}>
                    <div className="card-body">
                      <h5 className={`card-title ${style.cardTitle}`}>{data.name.name}</h5>
                      <p className={`card-text ${style.cardText}`}>Exam ID: {data.id}</p>
                      <p className={`card-text ${style.cardText}`}>Exam Description: {data.desc}</p>
                      <p className={`card-text ${style.cardText}`}>Pass Marks: {data.passMarks}</p>
                      <p className={`card-text ${style.cardText}`}>Total Marks: {data.marks}</p>
                      <div className={style.buttonContainer}>
                        <NavLink
                          exact
                          to={`/StudentDashboard/Exam/jEE/${data.id}`}
                          className={`btn btn-primary ${style.button}`}
                        >
                          Go to Exam
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default Exam;
