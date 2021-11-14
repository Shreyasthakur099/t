import React from 'react'
import { useState, useRef } from 'react';
import Criteria1 from './Criteria1';
import {criteria1, criteria2, criteria3, criteria4, criteria5, criteria6, criteria7 } from '../constants/data'
import {useReactToPrint} from 'react-to-print'
const CriteriaPreview = () => {
    const [deptState, setdeptState] = useState("");
    const [criteriaState, setCriteriaState ] = useState("");
    const [preview, setPreview] = useState(false);

    const componentRef = useRef();

    const pdfHandler = useReactToPrint({
        content: () => componentRef.current,
      });

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
            data.length!==0&&localStorage.setItem(criteriaState,JSON.stringify(data))
            console.log(data)
            setPreview(true)
            
        }
    return (
        <div className=" bg-purple-100 border-black border-black">
            <div className="w-10/12 pb-10 mb-10 mx-16 text-2xl font-medium font-sans font-normal text-center border-black  pt-40  text-black">
                        <h1 className = "text-blue-900 mb-8 font-bold text-4xl">View criteria </h1>
                        <h2 className="mb-6">View different criteria using the below options</h2>
                        
                        <select  className="w-3/12 selectList1 mx-10 py-2 q rounded border-blue-700 border-2 h-10 w-48 pl-4 focus:outline-none text-lg text-gray-700"
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
                        className="w-3/12 selectList1 mx-10 py-2 q rounded border-blue-700 border-2 h-10 w-48 pl-4 focus:outline-none text-lg text-gray-700"
                            value={criteriaState} 
                            onChange={(e) =>{
                                const selectedCri = e.target.value;
                                setCriteriaState(selectedCri);
                                localStorage.removeItem(criteriaState)
                                setPreview(false)
                            }}
                        >   <option selected value="">Select Criteria</option>
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
                       
                            

                        <button onClick={previewHandler} className="shadow-md  w-2/12 col-span-2  mt-4  h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                            View Criteria
                        </button>
                        {/* <button onClick={pdfHandler} className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold my-6 mx-8 py-2 px-4 rounded-full ">
                            DOWNLOAD
                        </button> */}
                        
            </div>
            {localStorage.getItem(criteriaState)?
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
              /></div> : deptState!==""&criteriaState!=="" & preview && <h1 className=" text-indigo-700 text-5xl font-bold font-sans font-normal  text-left border-black  mx-72 mb-6 text-black">{`The department of ${deptState} has not filled the Criterion ${criteriaState}`}</h1>}
        </div>
    )
}

export default CriteriaPreview
