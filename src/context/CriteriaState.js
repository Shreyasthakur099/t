import CriteriaContext from './criteriaContext'
import { useState } from "react";
 import {saveAs} from 'file-saver'
 import { useHistory } from 'react-router-dom';
// const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;


const CriteriaState = (props) => {
    const [criteria, setCriteria] = useState(null);
    const [department,setDepartment] = useState();
    const [loading, setLoading] = useState()
    const [status,setStatus] = useState("notSubmitted")
    const [modal,setModal] = useState("");
    // const [newUser,setModal] = useState(false);
    let history = useHistory()
    // const [user,setUser]=useState("");
    
    const [submit,setSubmit] = useState(0)

    const submitCriteria = async (name) => {
      
          setStatus("submitted")
          let criteriaData = criteria!==null?criteria:localStorage.getItem('recent')
          const response = await fetch("http://68.183.87.5:5000/criteria/submit", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },
    
          body: JSON.stringify({name,criteriaData}), // body data type must match "Content-Type" header
        });
        const data = await response.json()
        console.log("ok")
       
       
      
    
      
    }
    const uploadFile = async (name) => {
      
        
        const response = await fetch("http://68.183.87.5:5000/file/upload", {
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
      
        const response = await fetch(`http://68.183.87.5:5000/criteria/getCriteria`, {
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
        // console.log(criteriaName)
        
        // console.log(JSON.parse(localStorage.getItem(criteriaName)))
        // if(json){
        // const {a,b,c,d,e,f,g,h,i,j,k} = json
        // setCriteria1({a,b,c,d,e,f,g,h,i,j,k})}
        return true
        
      };
      const getUser = async (e) => {
        
        const response1 = await fetch("http://68.183.87.5:5000/auth/getUser", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          }
    
           // body data type must match "Content-Type" header
        })
        const info = await response1.json();
        console.log("getUser")
    
        
          //redirect
          localStorage.setItem('department', info.department);
          localStorage.setItem('branch',     info.branch);
          localStorage.setItem('role',       info.role);
          localStorage.setItem('username',   info.username);
          localStorage.setItem('done',JSON.stringify(info.done))
          
          // sUser(jsonUser._id,jsonToken)
          
        // } else {
        //   console.log("NOPE");
        // }
      };

//   const getCsv = async()=>{
//     const response = await fetch('http://68.183.87.5:5000/api/csv', {
//           method: "GET", // *GET, POST, PUT, DELETE, etc.
//           headers: {
            
//             "auth-token":localStorage.token
//           }
//   })
//    //console.log(response)
//    const json = await response.json()
//    console.log(json)
//   // const json = await response.text()
//   // console.log(json)
//   // FileSaver.saveAs(json)
//   // //  console.log(json)
//   const csvStringifier = createCsvStringifier({
//     header: [
//         {id: 'Question', title: 'Question'},
//         {id: 'Year', title: 'Year'},
//         {id: 'Number', title: 'Number'}
//     ]
// });
// console.log(csvStringifier.getHeaderString());
// let blob = new Blob([csvStringifier.getHeaderString()+csvStringifier.stringifyRecords(json)], {type: "text/plain;charset=utf-8"});
// FileSaver.saveAs(blob, "data.csv")
// }

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
  
  const response = await fetch("http://68.183.87.5:5000/file/download",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
          
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },

          body: JSON.stringify({question, department:localStorage.department})
  })
  const data = await response.json()
  saveAs(data,"ok")
}


    
    return (
        <CriteriaContext.Provider value={{status,modal,setModal,fileDownload,handleChange,setLoading, loading,submit,department,setSubmit,setCriteria,criteria,submitCriteria,uploadFile,getCriteria,setDepartment,getUser}}>
        {props.children}
      </CriteriaContext.Provider>
    )
}

export default CriteriaState
