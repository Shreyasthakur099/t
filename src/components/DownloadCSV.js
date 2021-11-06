import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import FileSaver from 'file-saver'
// const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

// w-7/12
function Coordinator() {

    const [deptState, setdeptState] = useState("");
    const [criteriaState, setCriteriaState ] = useState("");
    const [questionState, setquestionState] = useState("");

    

    const csvHandler = async(e) =>{
        // depta and criteria
        let response
        console.log(deptState,criteriaState)
        if(deptState!="" && criteriaState!=""){
            response = await fetch("http://159.65.152.103:5000/csv/department/criteria ", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
            
                body:  JSON.stringify({department: deptState, criteria: criteriaState})
            });
            const data = await response.json();
            let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, `${deptState}_Criteria${criteriaState}.csv`)
            console.log(typeof data)
            
        }

        //dept


        else if(deptState!="" && criteriaState===""){
            response = await fetch("http://159.65.152.103:5000/csv/department ", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
            
                body:  JSON.stringify({department: deptState})
            });
            const data = await response.json();
            let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, `${deptState}_AllCriteria.csv`)
            console.log(typeof data)
            
        }
        //criteria
        else if(deptState==="" && criteriaState!=""){
            response = await fetch("http://159.65.152.103:5000/csv/criteria ", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
            
                body:  JSON.stringify({criteria: criteriaState})
            });

            
            const data = await response.json();
            let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, `AllDepartment_Criteria${criteriaState}.csv`)
            console.log(typeof data)
        }

        //All Data
        else if(questionState!==""){
            setCriteriaState("")
            setdeptState("")
            response = await fetch("http://159.65.152.103:5000/csv/question", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
                body:  JSON.stringify({question:questionState})
            
            });
            
           
            const data = await response.json();
            let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, `AllDepartment_${questionState}.csv`)
            console.log(typeof data)

        }
        else{
            response = await fetch("http://159.65.152.103:5000/csv/allData ", {
                method: "GET", // *GET, POST, PUT, DELETE, etc.
        
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.token
                },
            
            });
            
            
            const data = await response.json();
            let blob = new Blob([data], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, `AllDepartment.csv`)
            console.log(typeof data)

        }

        
    }

    const a = ["A","B","C"]
    return (
        <div>
            <div className="grid justify-items-center gap-y-8  ml-28 grid-cols-4 w-10/12   text-2xl font-medium font-sans font-normal text-center border-black  pt-28  text-black">
            <h1 className = "col-start-2 justify-center col-span-2 text-blue-900 mb-8 font-bold text-4xl">Download CSV </h1>
            <h2 className="mb-6 col-start-2 col-span-2">Download csv file of the data by selecting options below</h2>
                        
                        <select className="col-start-2 col-span-1 focus:outline-none  rounded border-blue-700 border-2 text-gray-700 selectList1 mx-10"
                            value={deptState} 
                            onChange={(e) =>{
                                const selectedDep = e.target.value;
                                setdeptState(selectedDep);
                                setquestionState("")
                            }}
                        >
                        <option selected value="">Select Department</option>
                        {JSON.parse(localStorage.getItem('departments')).map(i=><option value={i}>{i}</option>)}
                       
                        </select>

                        <select className="col-start-3 col-span-1 focus:outline-none selectList2 rounded border-blue-700 border-2 text-gray-700" 
                            value={criteriaState} 
                            onChange={(e) =>{
                                const selectedCri = e.target.value;
                                setCriteriaState(selectedCri);
                                setquestionState("")
                            }}
                        >
                            <option selected value="">Select Criteria</option>
                            <option value="1">Criteria 1</option>
                            <option value="2">Criteria 2</option>
                             <option value="3">Criteria 3</option>
                             <option value="4">Criteria 4</option>
                            <option value="5">Criteria 5</option>
                             <option value="6">Criteria 6</option>
                            <option value="7">Criteria 7</option>
                         
                        </select>

                            <form method="GET" className="mt-8 col-start-2 col-span-2">
                                    <input 
                            type="text"  className="py-2 q rounded border-blue-700 border-2 h-10 w-48 pl-4 focus:outline-none text-lg text-gray-700" placeholder={questionState||"Search by question"} autocomplete="off" onChange={e=>{setquestionState(e.target.value);setdeptState("");setCriteriaState(""); console.log(e.target.value)}}/>
                                {/* </div> */}
                            </form>
                        {/* </div> */}

                        <button onClick={csvHandler} className="shadow-md col-start-2 w-6/12 col-span-2  mt-4  h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                            Download CSV 
                        </button>
                        {}


                        {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-6 mx-8 py-2 px-4 rounded-full">
                            Download All CSV
                        </button> */}








            </div>
        </div>
    )
}

export default Coordinator;
