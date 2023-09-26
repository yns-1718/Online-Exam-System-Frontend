import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "../StudentDashboard.module.css";
import baseUrl from "../../../baseUrl";

function Result() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getAllResults() {
      let value = await axios.get(
        `${baseUrl}/user/${sessionStorage.getItem("user")}/result`
      );

      setResults(value.data);
    }
    getAllResults();
  }, []);

  return (
    <>
      <div className={`container ${style.resultContainer}`}>
        <div className={`text-center ${style.displayHeadingBox}`}>
          <h2>Student Exam List</h2>
        </div>
        <div className={`table-responsive ${style.tableBox}`}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User Email</th>
                <th>Exam Name</th>
                <th>Exam Date</th>
                <th>Result Status</th>
                <th>Your Score</th>
                <th>Total Marks</th>
                <th>Total Question</th>
              </tr>
            </thead>
            <tbody>
              {results.map((data, i) => {
                return (
                  <tr key={i}>
                   <th>E-mail de l'utilisateur</th>
                <th>Nom de l'examen</th>
                <th>Date de l'examen</th>
                <th>Statut du résultat</th>
                <th>Votre score</th>
                <th>Total des notes</th>
                <th>Total des questions</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Result;
