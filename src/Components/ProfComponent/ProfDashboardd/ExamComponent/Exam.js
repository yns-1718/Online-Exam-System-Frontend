 
   import { useState ,useEffect} from "react";
   import axios from "axios";

   import {NavLink} from "react-router-dom";


    import style from "../SubjectComponent/Subject.module.css";

    import baseUrl from "../../../baseUrl";

    function Exam(){

//  ---------------------- add Exam & close buttton working  -------------------------------------
        const [display , setDisplay]  = useState({
            display:"none"
        });

         function handleAddExam()
         {
            setDisplay({display:"block"});
         }

         function handleCloseExam(){
             setDisplay({display:"none"});
         }

// --------------- Fetching all Exam from db.json file-------------------------

      const [exams , setExams] = useState([]);

      useEffect(()=>{
         
         async function getAllExam(){
             let value = await axios.get(`${baseUrl}/exam`);
             setExams(value.data);
             //console.log(value.data[0].name);
         }
             getAllExam();
      },[]);


// --------------------Adding Exam And re-render Exam component-----------------

     var date = new Date();
     var d =  date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() ;
     var t =  date.getHours() + ":" + date.getMinutes() +  ":" + date.getSeconds() ;


      const [exam , setExam] = useState({
        name:"",
        desc:"",
        level:"",
        passMarks:"",
        totalQuestion:"",
        marks:"",
        date: d+" "+t
    });
   
   function handleInput(e){
        setExam({ 
            ...exam,
            [e.target.name]: e.target.value
        });
        // console.log(exam);
    }

    async function handleAddNewExam(){

        setExam(
            exam.name = {name: document.getElementById("nameFiled").value}
        );

        await axios.post(`${baseUrl}/exam` , exam);
        setStatus(true);
    }

    const [status , setStatus] = useState();


    // ----------------------------Deleting Exam-----------------------------------------------

       const [questions , setQuestions] = useState([]);

       useEffect(() => {
           async function getAllQuestions(){
               let value = await axios.get(`${baseUrl}/question`);
               setQuestions(value.data);
            }
            getAllQuestions();
       },[])


       const [statusDeleteExam , setStatusDeleteExam] = useState();


       async function deleteExam(id){
        //    console.log(id);
           
            for(let i=0; i<questions.length ;i++)
            {
                if( parseInt( questions[i].exam_id) === parseInt( id )){
                    // console.log(questions[i].id);
                    await axios.delete(`${baseUrl}/question/${questions[i].id}`);
                } 
            }
            await axios.delete(`${baseUrl}/exam/${id}`);
            setStatusDeleteExam(true);
       }

      if(status) return <Exam />

      if(statusDeleteExam) return <Exam />

        return (
            <>
      <div id={style.displayHeadingBox}>
        <h2>Exam List</h2>
      </div>

      <div id={style.tableBox}>
        <table className={`table table-bordered ${style.center}`}>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Exam Desc.</th>
              <th>Exam Creation Date</th>
              <th>Exam Level</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.name.name}</td>
                  <td>{data.desc}</td>
                  <td>{data.date}</td>
                  <td>{data.level}</td>
                  <td>
                    <NavLink exact to={`/ProfDashboardd/Exam/Details/${data.id}`}>
                      <i className="fas fa-info-circle"></i>
                    </NavLink>

                    <NavLink exact to={`/ProfDashboardd/Exam/ViewQuestion/${data.id}`}>
                      <i className="fas fa-eye"></i>
                    </NavLink>

                    <NavLink exact to={`/ProfDashboardd/Exam/AddQuestion/${data.id}`}>
                      <i className="fas fa-plus"></i>
                    </NavLink>

                    <i className="fas fa-trash-alt" onClick={() => deleteExam(data.id)}></i>

                    {/* ------------------ Additional Table within the existing table ----------------- */}
                    <table className="table table-bordered">
                      {/* ... add the table rows and columns for the additional table ... */}
                    </table>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div id={style.addSubjectBox}>
        <button className="btn btn-primary" onClick={handleAddExam}>
          <i className="fas fa-plus"></i> Add Exam
        </button>
      </div>

      <div id={style.addBox} style={display}>
        <form>
          <div className="form-group">
            <label htmlFor="nameFiled">Enter Subject Name</label>
            <input
              id="nameFiled"
              onChange={(e) => handleInput(e)}
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter Subject Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="desc">Enter Exam Description</label>
            <input
              id="desc"
              onChange={(e) => handleInput(e)}
              name="desc"
              type="text"
              className="form-control"
              placeholder="Enter Exam Description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="level">Enter Exam Level</label>
            <input
              id="level"
              onChange={(e) => handleInput(e)}
              name="level"
              type="text"
              className="form-control"
              placeholder="Enter Exam Level"
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalQuestion">Enter Total Question</label>
            <input
              id="totalQuestion"
              onChange={(e) => handleInput(e)}
              name="totalQuestion"
              type="text"
              className="form-control"
              placeholder="Enter Total Question"
            />
          </div>

          <div className="form-group">
            <label htmlFor="marks">Enter Total Marks</label>
            <input
              id="marks"
              onChange={(e) => handleInput(e)}
              name="marks"
              type="text"
              className="form-control"
              placeholder="Enter Total Marks"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passMarks">Enter Pass Marks</label>
            <input
              id="passMarks"
              onChange={(e) => handleInput(e)}
              name="passMarks"
              type="text"
              className="form-control"
              placeholder="Enter Pass Marks"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success mr-2" onClick={handleAddNewExam}>
              <i className="fas fa-plus"></i> Add
            </button>
            <button className="btn btn-secondary" onClick={handleCloseExam}>
              <i className="fas fa-times"></i> Close
            </button>
          </div>
        </form>
      </div>
    </>
        );
    }

    export default Exam;