import React from 'react'
import { useState, useRef } from 'react';
import Criteria1 from './Criteria1';
import {criteria1, criteria2, criteria3, criteria4, criteria5, criteria6, criteria7 } from '../constants/data'
import {useReactToPrint} from 'react-to-print'
const AdminDropdown = () => {
    
    const [deptState, setdeptState] = useState("");
    const [criteriaState, setCriteriaState ] = useState("");
    const [preview, setPreview] = useState(false);
    const [downdata,setData]=useState()

    const componentRef = useRef();

    const pdfHandler = useReactToPrint({
        content: () => componentRef.current,
      });
    
    const compare=( a, b )=> {
        if ( a.question < b.question ){
          return -1;
        }
        if ( a.question > b.question ){
          return 1;
        }
        return 0;
      }

    const previewHandler = async(e) =>{
        // depta and criteria
        console.log(deptState,criteriaState)
       
            const response = await fetch("http://143.110.255.113:5000/criteria/preCriteria ", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
            
                body:  JSON.stringify({department: deptState, criteria: criteriaState})
            });

            const data = await response.json();
            console.log(data)
            data.length!==0&&localStorage.setItem(criteriaState,JSON.stringify(data))
            setData(data)
            
            
            setPreview(true)
            
        }

        const handleDownload = async(e)=>{
          e.preventDefault()
          const response = await fetch("http://143.110.255.113:5000/file/document/download", {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
        
              headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.token
              },
        
              body: JSON.stringify({ 
                question: e.target.name,
                department: deptState
              }) // body data type must match "Content-Type" header
            });
            const res = await response.json()
            console.log(res)
    
        }
        const handleDownloadTemplate = async(e)=>{
          e.preventDefault()
          const response = await fetch("http://143.110.255.113:5000/file/template/download", {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
    
              headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.token
              },
    
              body: JSON.stringify({ 
                question: e.target.name,
                department: deptState
              }) // body data type must match "Content-Type" header
            });
            const res = await response.json()
            console.log(res)}
    return (
        <div className="grid justify-items-center bg-purple-100  border-black">
            <div className="w-full pb-10 mb-10  text-2xl font-medium font-sans font-normal text-center border-black  pt-40  text-black">
                        <h1 className = "text-blue-900 mb-8 font-bold text-4xl">Download documents </h1>
                        <h2 className="mb-6">Download relevant documents and templates using the options below</h2>
                        
                        <select  className="w-3/12 selectList1 mx-4 py-2 q rounded border-blue-700 border-2 h-10  pl-4 focus:outline-none text-lg text-gray-700"
                            value={deptState} 
                            onChange={(e) =>{
                                const selectedDep = e.target.value;
                                setdeptState(selectedDep);
                                localStorage.removeItem(criteriaState)
                                setPreview(false)
                            }}
                        >
                        <option selected value="">Select Department</option>
                        
                        {JSON.parse(localStorage.getItem('departments')).map(i=><option value={i}>{i}</option>)}
                        </select>

                        <select name="selectList2" 
                        className="w-3/12 selectList1 mx-4 py-2 q rounded border-blue-700 border-2 h-10  pl-4 focus:outline-none text-lg text-gray-700"
                            value={criteriaState} 
                            onChange={(e) =>{
                                const selectedCri = e.target.value;
                                setCriteriaState(selectedCri);
                                localStorage.removeItem(criteriaState)
                                setPreview(false)
                            }}
                        >
                            <option selected value="">Select Criteria</option>
                            {localStorage.getItem('role')==='admin'?<>
                            <option value="1">Criteria 1</option>
                            <option value="2">Criteria 2</option>
                             <option value="3">Criteria 3</option>
                             <option value="4">Criteria 4</option>
                            <option value="5">Criteria 5</option>
                             <option value="6">Criteria 6</option>
                            <option value="7">Criteria 7</option></>:
                            localStorage.getItem('department').includes('1')?<option value="1">Criteria 1</option>:
                            localStorage.getItem('department').includes('2')?<option value="2">Criteria 2</option>:
                            localStorage.getItem('department').includes('3')?<option value="3">Criteria 3</option>:
                            localStorage.getItem('department').includes('4')?<option value="4">Criteria 4</option>:
                            localStorage.getItem('department').includes('5')?<option value="5">Criteria 5</option>:
                            localStorage.getItem('department').includes('6')?<option value="6">Criteria 6</option>:
                            localStorage.getItem('department').includes('7')&&<option value="7">Criteria 7</option>
                            }
                         
                        </select>
                       
                            

                        <button onClick={previewHandler} className="shadow-md  w-3/12 col-span-2  mt-4  h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                            View Criteria
                        </button>
                        {/* <button onClick={pdfHandler} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold my-6 mx-8 py-2 px-4 rounded-full ">
                            DOWNLOAD
                        </button> */}
                        
            </div>
            <div className="  rounded-lg px-4 bg-gray-50 shadow-lg  w-full border-2 border-blue-500">{localStorage.getItem(criteriaState)&&(JSON.parse(localStorage.getItem(criteriaState)).sort(compare).map(i=><div className="px-14 border-b border-blue-300  py-4 bg-gray-50  ">
            <button className = "text-blue-800 mb-8   font-bold text-5xl">{i.question} </button>
    <a className="shadow-md col-span-1 col-start-1 mx-10  w-11/12 h-20 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out" name={i.question} href={i.document_s3URL}  type="" >Download Document</a>


    <a style={{opacity:i.template_s3URL===undefined ?'0':'1'}} className={`h-10 ${i.template_s3URL!==undefined?'cursor-pointer':'cursor-default'} shadow-md col-span-1 col-start-1 ml-4  w-11/12 h-20 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out`}  name = {i.question} href={i.template_s3URL}  type="" >Download Template</a>
  </div>))}</div>
            {/* {localStorage.getItem(criteriaState)?
<div ref={componentRef} className=" ">
    
    <Criteria1 criteria={criteriaState} 
criteriaData={criteriaState==="1"?criteria1:
              criteriaState==="2"?criteria2:
              criteriaState==="3"?criteria3:
              criteriaState==="4"?criteria4:
              criteriaState==="5"?criteria5:
              criteriaState==="6"?criteria6:
              criteriaState==="7"&&criteria1 }
heading={`Criterion ${criteriaState}`}
preview={true}
admin={true}
department={`Department of ${deptState}`}
              /></div> : deptState!==""&criteriaState!=="" & preview && <h1 className=" text-indigo-700 text-5xl font-bold font-sans font-normal  text-left border-black  mx-72 mb-6 text-black">{`The department of ${deptState} has not filled the Criterion ${criteriaState}`}</h1>} */}
        </div>
    )
}

export default AdminDropdown
