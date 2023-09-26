
//    import style from "./Question.module.css";

import style from "../SubjectComponent/Subject.module.css";

import axios from "axios";

import baseUrl from "../../../baseUrl";

import {useEffect , useState} from "react";

   function Question(){

     const [questions , setQuestions] = useState([]);

      useEffect(() => {

         async function getAllQuestions(){
            const value = await axios.get(`${baseUrl}/question`);
             setQuestions(value.data);
         }
         getAllQuestions();
      } ,[])



       return (
        <>
        <div className={style.displayHeadingBox}>
          <h2>Question List</h2>
        </div>
  
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className={style.center}>Question Name</th>
                <th className={style.center}>Option one</th>
                <th className={style.center}>Option two</th>
                <th className={style.center}>Option three</th>
                <th className={style.center}>Option Four</th>
                <th className={style.center}>Question Answer</th>
                <th className={style.center}>Subject Name</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.qname}</td>
                    <td>{data.optionOne}</td>
                    <td>{data.optionTwo}</td>
                    <td>{data.optionThree}</td>
                    <td>{data.optionFour}</td>
                    <td>{data.answer}</td>
                    <td>{data.sname.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
       );
   }

   export default Question ;