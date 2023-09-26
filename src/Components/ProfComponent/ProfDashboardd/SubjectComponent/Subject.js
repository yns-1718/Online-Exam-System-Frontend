import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../../baseUrl";
import style from "./Subject.module.css";

function Subject() {
  const [display, setDisplay] = useState({
    display: "none",
  });

  function handleAddSubject() {
    setDisplay({ display: "block" });
  }

  function handleCloseAdd() {
    setDisplay({ display: "none" });
  }

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function getAllSubject() {
      let value = await axios.get(`${baseUrl}/subject`);
      setSubjects(value.data);
    }
    getAllSubject();
  }, []);

  const [subject, setSubject] = useState({
    name: "",
  });

  function handleInput(e) {
    setSubject({
      name: e.target.value,
    });
  }

  async function handleAddNewSubject() {
    await axios.post(`${baseUrl}/subject`, subject);
    setStatus(true);
  }

  const [status, setStatus] = useState();

  async function deleteSubject(name) {
    await axios.delete(`${baseUrl}/subject/${name}`);
    setStatusDelete(true);
  }

  const [statusDelete, setStatusDelete] = useState();

  if (statusDelete) return <Subject />;

  if (status) return <Subject />;

  if (subjects.length === 0)
    return (
      <>
        <div id={style.content}>
          <div id={style.displayHeadingBox}>
            <h2>No Subject Available</h2>
          </div>

          <div id={style.addSubjectBox}>
            <button onClick={handleAddSubject}>Add Subject</button>
          </div>

          <div id={style.addBox} style={display}>
            <label htmlFor="">Enter Subject</label>
            <input
              onChange={(e) => handleInput(e)}
              type="text"
              placeholder="Enter Subject name"
            />

            <div id={style.buttonBox}>
              <button onClick={handleAddNewSubject}>Add</button>
              <button onClick={handleCloseAdd}>Close</button>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div id={style.content}>
        <div id={style.displayHeadingBox}>
          <h2>Subject List</h2>
        </div>

        <div id={style.tableBox} className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Subject Name</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteSubject(data.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div id={style.addSubjectBox}>
          <button className="btn btn-primary" onClick={handleAddSubject}>
            Add Subject
          </button>
        </div>

        <div id={style.addBox} style={display}>
          <label htmlFor="">Enter Subject</label>
          <input
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Enter Subject name"
            className="form-control"
          />

          <div id={style.buttonBox}>
            <button className="btn btn-success" onClick={handleAddNewSubject}>
              Add
            </button>
            <button className="btn btn-secondary" onClick={handleCloseAdd}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subject;
