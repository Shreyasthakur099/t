import CriteriaContext from './criteriaContext'
import { useState } from "react";
 import {saveAs} from 'file-saver'
 import { useHistory } from 'react-router-dom';
// const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;


const CriteriaState = (props) => {
    const [error,setError] = useState('')
    const [count,setCount] = useState()

    const [criteria, setCriteria] = useState(null);
    const [department,setDepartment] = useState();
    const [loading, setLoading] = useState(false)
    const [status,setStatus] = useState("notSubmitted")
    const [modal,setModal] = useState("");
    // const [newUser,setModal] = useState(false);
    let history = useHistory()
    // const [user,setUser]=useState("");
    
    const [submit,setSubmit] = useState(0)

    const submitCriteria = async (name) => {
      setLoading(true)
      // const k = window.confirm("Do you wish to submit criteria?")
         
          let criteriaData = criteria!==null?criteria:localStorage.getItem('recent')
          const response = await fetch("http://localhost:5000/criteria/submit", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },
    
          body: JSON.stringify({name,criteriaData}), // body data type must match "Content-Type" header
        });
        const data = await response.json()
        setError('Criteria Submitted')
        setStatus('submitted')
        
        console.log("ok")
       
       
      
    
      
    }
    const uploadFile = async (name) => {
      
        
        const response = await fetch("http://localhost:5000/file/upload", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },
    
          body: JSON.stringify({name,criteria}), // body data type must match "Content-Type" header
        });
       
      const upload = response.json()
      console.log(upload)
      window.alert(`File for question ${name} uploaded`)
      // getUser()
      // getCriteria("criteria1")
        
    }

    const getCriteria = async (criteriaName) => {
      setLoading(true)
        const response = await fetch(`http://localhost:5000/criteria/getCriteria`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },

          body: JSON.stringify({criteriaName})
          
        });
        
         const data = await response.json();
        console.log(data)
        //console.log(json)
        // localStorage.setItem(criteriaName,(JSON.stringify(data)))
        data.length!==0&&localStorage.setItem(criteriaName,JSON.stringify(data))
        
        
        return true
        
      };
      const getUser = async (e) => {
        setLoading(true)
        const response1 = await fetch("http://localhost:5000/auth/getUser", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          }
    
           // body data type must match "Content-Type" header
        })
        const info = await response1.json();
        console.log(info)
    
        
          //redirect
          localStorage.setItem('department', info.department);
          localStorage.setItem('branch',     info.branch);
          localStorage.setItem('role',       info.role);
          localStorage.setItem('username',   info.username);
          localStorage.setItem('done',JSON.stringify(info.done))
          
         
      };

//   

const handleChange= (e)=>{

  if(criteria===null){
  setCriteria([{question:e.target.name, response: e.target.value}])
  console.log("empty")
}

else{
    setCriteria(criteria.filter(i=>i.question!==e.target.name).concat([{question:e.target.name, response: e.target.defaultChecked||e.target.value}]))
}

console.log(criteria)


}

const fileDownload=async(question)=>{
  
  const response = await fetch("http://localhost:5000/file/download",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
          
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },

          body: JSON.stringify({question, department:localStorage.department})
  })
  const data = await response.json()
  console.log(data)
  saveAs(data,"ok")
}


    
    return (
        <CriteriaContext.Provider value={{count,setCount,error,setError,setStatus,status,modal,setModal,fileDownload,handleChange,setLoading, loading,submit,department,setSubmit,setCriteria,criteria,submitCriteria,uploadFile,getCriteria,setDepartment,getUser}}>
        {props.children}
      </CriteriaContext.Provider>
    )
}

export default CriteriaState
