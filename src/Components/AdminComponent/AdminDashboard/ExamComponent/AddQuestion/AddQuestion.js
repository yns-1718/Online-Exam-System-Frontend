
    
    import style from "../../SubjectComponent/Subject.module.css";

      import {useState} from "react";

      import {useHistory , useParams} from "react-router-dom";
import axios from "axios";
import baseUrl from "../../../../baseUrl";

      
      function AddQuestion(){

        const {id} = useParams();

         const [question , setQuestion] = useState({
            qname: "",
            optionOne: "",
            optionTwo: "",
            optionThree: "",
            optionFour: "",
            answer: "",
            ename: id,
            sname:""
         });

          function onInputChange(e){
                   setQuestion({
                       ...question ,
                       [e.target.name] : e.target.value
                   });

                  // console.log(question);
          }

           
            let history = useHistory();
           
            function handleGoBack(){
                history.push(`/AdminDashboard/Exam`);
            }


            async function addnewQuestion(){
              setQuestion(question.ename={id:id});

              setQuestion(question.sname={name:document.getElementById("subjectField").value});

              
                await axios.post(`${baseUrl}/question` , question);
                history.push(`/AdminDashboard/Exam/ViewQuestion/${id}`);
            }



          return (
              <>
                <div id={style.displayHeadingBox}> 
                            <h2>Ajout d'une question</h2>     
                         </div>

                     <div id={style.addBox} className={style.addQuestion}>   
                         <label >Nom de la question </label>
                         <input onChange={(e) => onInputChange(e)} 
                         name="qname"
                          type="text" placeholder="Enter Question" /> 

                        <label >Saisir l'option A </label>
                        <input onChange={(e) => onInputChange(e)} 
                         name="optionOne"
                         type="text" placeholder="Enter Option A" /> 

                        <label >Saisir l'option B</label>
                        <input onChange={(e) => onInputChange(e)} 
                        name="optionTwo"
                           type="text" placeholder="Enter Option B" /> 

                        <label >Saisir l'option C</label>
                        <input onChange={(e) => onInputChange(e)} 
                        name="optionThree"
                          type="text" placeholder="Enter Option C" /> 

                        <label >Saisir l'option D</label>
                        <input onChange={(e) => onInputChange(e)}  
                        name="optionFour"
                         type="text" placeholder="Enter Option D" /> 

                        <label >Saisir la question Réponse</label>
                        <input  onChange={(e) => onInputChange(e)}
                        name="answer"
                          type="text" placeholder="Enter Question answer (don't write option A,B,C,D)" /> 

                          
                        <label >Saisir le sujet</label>
                        <input  onChange={(e) => onInputChange(e)}
                        name="sname" id="subjectField"
                          type="text" placeholder="Enter Subject" /> 

                       <div id={style.buttonBox}>
                         <button onClick={addnewQuestion} >Add</button>
                         <button onClick={handleGoBack}>Go back</button>
                       </div>

                   </div>
              </>
          );
      }

      export default AddQuestion;