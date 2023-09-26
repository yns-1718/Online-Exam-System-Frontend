 
   import axios from "axios";

   import {useEffect , useState} from "react";

   
   import style from "../SubjectComponent/Subject.module.css"

   import baseUrl from "../../../baseUrl";
   


    function Result(){

        const [results , setResults] = useState([]);

        useEffect(()=>{
           
           async function getAllResults(){
               let value = await axios.get(`${baseUrl}/result`);
               setResults(value.data);
               //console.log(value.data[0]);
           }
               getAllResults();
        },[]);

        return (
            <>
            <div className={style.displayHeadingBox}>
              <h2>Exam List</h2>
            </div>
      
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                  <th className="text-center">E-mail de l'utilisateur</th>
                    <th className="text-center">Nom de l'examen</th>
                    <th className="text-center">Date de l'examen</th>
                    <th className="text-center">Statut du résultat</th>
                    <th className="text-center">Votre score</th>
                    <th className="text-center">Total des notes</th>
                    <th className="text-center">Total Question</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td>{data.email.email}</td>
                        <td>{data.sname.name}</td>
                        <td>{data.edate}</td>
                        <td>{data.status}</td>
                        <td>{data.score}</td>
                        <td>{data.totalMarks}</td>
                        <td>{data.totalQuestion}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        );
    }

    export default Result;