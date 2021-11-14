import React from 'react'
import { useContext, useState } from 'react'
import criteriaContext from '../context/criteriaContext'
import TempDown from './TempDown';


// links to blank templates

// links to blank templates
   import  {Q1_1_2} from '../constants/templates'
   import  {Q1_2_2} from '../constants/templates'
   import  {Q1_1_3} from '../constants/templates'
   import  {Q1_2_1} from '../constants/templates'
   import  {Q1_1  } from '../constants/templates'
   import  {Q1_3_2} from '../constants/templates'
   import  {Q1_3_3} from '../constants/templates'
   import  {Q1_3_4} from '../constants/templates'
   import  {Q1_4_1} from '../constants/templates'
   import  {Q1_4_2} from '../constants/templates'
   import  {Q2_1_1} from '../constants/templates'
   import  {Q2_1_2} from '../constants/templates'
   import  {Q2_1  } from '../constants/templates'
   import  {Q2_2  } from '../constants/templates'
   import  {Q2_3  } from '../constants/templates'
   import  {Q2_4_1} from '../constants/templates'
   import  {Q2_4_3} from '../constants/templates'
   import  {Q2_4_2} from '../constants/templates'
   import  {Q2_4_4} from '../constants/templates'
   import  {Q3_4_2} from '../constants/templates'
   import  {Q2_5_1} from '../constants/templates'
   import  {Q2_5_4} from '../constants/templates'
   import  {Q2_6_3} from '../constants/templates'
   import  {Q3_1_2} from '../constants/templates'
   import  {Q3_1_3} from '../constants/templates'
   import  {Q3_1_4} from '../constants/templates'
   import  {Q3_1_6} from '../constants/templates'
   import  {Q3_2_1} from '../constants/templates'
   import  {Q3_2_2} from '../constants/templates'
   import  {Q3_2_3} from '../constants/templates'
   import  {Q3_1  } from '../constants/templates'
   import  {Q3_2  } from '../constants/templates'
   import  {Q3_3_2} from '../constants/templates'
   import  {Q3_3_3} from '../constants/templates'
   import  {Q3_3  } from '../constants/templates'
   import  {Q3_4_3} from '../constants/templates'
   import  {Q3_4_4} from '../constants/templates'
   import  {Q3_4_5} from '../constants/templates'
   import  {Q3_4_6} from '../constants/templates'
   import  {Q3_4_7} from '../constants/templates'
   import  {Q4_3_5} from '../constants/templates'
   import  {Q3_5_2} from '../constants/templates'
   import  {Q3_6_2} from '../constants/templates'
   import  {Q3_6_3} from '../constants/templates'
   import  {Q3_6_4} from '../constants/templates'
   import  {Q3_7_1} from '../constants/templates'
   import  {Q3_7_2} from '../constants/templates'
   import  {Q4_1_4} from '../constants/templates'
   import  {Q4_4_1} from '../constants/templates'
   import  {Q4_1  } from '../constants/templates'
   import  {Q4_2_2} from '../constants/templates'
   import  {Q4_2_3} from '../constants/templates'
   import  {Q4_2  } from '../constants/templates'
   import  {Q4_3_1} from '../constants/templates'
   import  {Q5_1_1} from '../constants/templates'
   import  {Q5_1_2} from '../constants/templates'
   import  {Q5_1_3} from '../constants/templates'
   import  {Q5_2_1} from '../constants/templates'
   import  {Q5_2_2} from '../constants/templates'
   import  {Q5_2_3} from '../constants/templates'
   import  {Q5_3_1} from '../constants/templates'
   import  {Q5_3_3} from '../constants/templates'
   import  {Q6_2_3} from '../constants/templates'
   import  {Q6_3_2} from '../constants/templates'
   import  {Q6_3_3} from '../constants/templates'
   import  {Q6_3_4} from '../constants/templates'
   import  {Q6_4_2} from '../constants/templates'
   import  {Q6_4_3} from '../constants/templates'
   import  {Q6_5_2} from '../constants/templates'
const QuestionGenerator = (props) => {

  const urls=[{qn:'1.1.1',url:Q1_1},{qn:'1.1.2',url:Q1_1_2},{qn:'1.1.3',url:Q1_1_3},{qn:'2.1.1',url:Q2_1_1},{qn:'2.1.2',url:Q2_1_2},{qn:'2.2.1',url:Q2_2},{qn:'2.2.2',url:Q2_2},{qn:'2.3.1',url:Q2_3},{qn:'2.3.2',url:Q2_3},{qn:'2.3.3',url:Q2_3},{qn:'3.1.1',url:Q3_1},{qn:'3.1.2',url:Q3_1_2},{qn:'3.1.3',url:Q3_1_3},{qn:'3.1.4',url:Q3_1_4},{qn:'3.1.5',url:Q3_1},{qn:'3.1.6',url:Q3_1_6},{qn:'3.2.1',url:Q3_2_1},
  {qn:'3.2.2',url:Q3_2_2},{qn:'3.2.3',url:Q3_2_3},{qn:'3.3.1',url:Q3_3},{qn:'3.3.2',url:Q3_3_2},
  {qn:'3.3.3',url:Q3_3_3},{qn:'4.1.1',url:Q4_1},{qn:'4.1.2',url:Q4_1},{qn:'4.1.3',url:Q4_1},{qn:'4.1.4',url:Q4_1_4},{qn:'4.2.1',url:Q4_2},{qn:'4.2.2',url:Q4_2_2},{qn:'4.2.3',url:Q4_2_3},{qn:'4.2.4',url:Q4_2},{qn:'1.2.2',url:Q1_2_2},{qn:'1.2.1',url:Q1_2_1},{qn:'1.3.2',url:Q1_3_2},
  {qn:'1.3.3',url:Q1_3_3},{qn:'1.3.4',url:Q1_3_4},{qn:'1.4.1',url:Q1_4_1},{qn:'1.4.2',url:Q1_4_2},
  {qn:'2.4.1',url:Q2_4_1},{qn:'2.4.3',url:Q2_4_3},
  {qn:'2.4.2',url:Q2_4_2},{qn:'2.4.4',url:Q2_4_4},{qn:'3.4.2',url:Q3_4_2},{qn:'2.5.1',url:Q2_5_1},
  {qn:'2.5.4',url:Q2_5_4},{qn:'2.6.3',url:Q2_6_3},{qn:'3.4.3',url:Q3_4_3},{qn:'3.4.4',url:Q3_4_4},
  {qn:'3.4.5',url:Q3_4_5},{qn:'3.4.6',url:Q3_4_6},{qn:'3.4.7',url:Q3_4_7},{qn:'4.3.5',url:Q4_3_5},
  {qn:'3.5.2',url:Q3_5_2},{qn:'3.6.2',url:Q3_6_2},{qn:'3.6.3',url:Q3_6_3},{qn:'3.6.4',url:Q3_6_4},
  {qn:'3.7.1',url:Q3_7_1},{qn:'3.7.2',url:Q3_7_2},{qn:'4.1.4',url:Q4_1_4},{qn:'4.4.1',url:Q4_4_1},
  {qn:'4.3.1',url:Q4_3_1},{qn:'5.1.1',url:Q5_1_1},{qn:'5.1.2',url:Q5_1_2},{qn:'5.1.3',url:Q5_1_3},
  {qn:'5.2.1',url:Q5_2_1},{qn:'5.2.2',url:Q5_2_2},{qn:'5.2.3',url:Q5_2_3},{qn:'5.3.1',url:Q5_3_1},
  {qn:'5.3.3',url:Q5_3_3},{qn:'6.2.3',url:Q6_2_3},{qn:'6.3.2',url:Q6_3_2},{qn:'6.3.3',url:Q6_3_3},{qn:'6.3.4',url:Q6_3_4},{qn:'6.4.2',url:Q6_4_2},{qn:'6.4.3',url:Q6_4_3},{qn:'6.5.2',url:Q6_5_2}]

  const q=['1.1.1','1.1.2','1.1.3','2.1.1','2.1.2','2.2.1','2.2.2','2.3.1','2.3.2','2.3.3','3.1.1','3.1.2','3.1.3','3.1.4','3.1.5','3.1.6','3.2.1','3.2.2','3.2.3','3.3.1','3.3.2','3.3.3','4.1.1','4.1.2','4.1.3','4.1.4','4.2.1','4.2.2','4.2.3','4.2.4','1.2.2','1.1.3','1.2.1','1.3.2','1.3.3','1.3.4','1.4.1','1.4.2','2.1.1','2.1.2','2.4.1','2.4.3','2.4.2','2.4.4','3.4.2','2.5.1','2.5.4','2.6.3','3.1.2','3.1.3','3.1.4','3.1.6','3.2.1','3.2.2','3.2.3','3.3.2','3.3.3','3.4.3','3.4.4','3.4.5','3.4.6','3.4.7','4.3.5','3.5.2','3.6.2','3.6.3','3.6.4','3.7.1','3.7.2','4.1.4','4.4.1','4.2.2','4.2.3','4.3.1','5.1.1','5.1.2','5.1.3','5.2.1','5.2.2','5.2.3','5.3.1','5.3.3','6.2.3','6.3.2','6.3.3','6.3.4','6.4.2','6.4.3','6.5.2']




    const context = useContext(criteriaContext);
    const {handleChange,criteria,setError,uploadFile,fileDownload} = context
    const [fileData, setFile] = useState()
    const [tempData, setTemp] = useState()
    const question = props.section+'.'+props.qNum
    const criterion = props.criteria
    
    const previewFill=(props.update||props.preview)===true?(!localStorage.getItem(props.criteria)?localStorage.getItem(props.criteria)&&(JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].response)  :(JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].response)):""
    const updateFill = ""
    
    const fileChange = (e)=>{
      e.target.id=='document'?setFile(e.target.files[0]):setTemp(e.target.files[0])
      
    }
    ////////////////
    const submitHandler = async (e)=>{
      setError("Uploading File ...")
      e.preventDefault()
      
      const data = new FormData()
      data.append('document', fileData)
      q.includes(props.section+'.'+props.qNum)&&data.append('template', tempData)
      data.append('question',question)
      data.append('criteria',criterion)
      
      
      const response = await fetch("http://localhost:5000/file/upload", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            
            "auth-token":localStorage.token
          },
    
          body: data // body data type must match "Content-Type" header
        });
       
      const upload = await response.json()
       console.log(upload)
       setError(`Question ${props.section+'.'+props.qNum} `+upload.message)
      
    }
    ////////////////////
    const handleDownload = async(e)=>{
      e.preventDefault()
      const response = await fetch("http://localhost:5000/file/document/download", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },
    
          body: JSON.stringify({ 
            question: question,
            department: props.department
          }) // body data type must match "Content-Type" header
        });
        const data = await response.json()
        console.log(data)
        // const res = await response.json()
        // console.log(res)
        // console.log(response)

    }
    const handleDownloadTemplate = async(e)=>{
      e.preventDefault()
      const response = await fetch("http://localhost:5000/file/template/download", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },

          body: JSON.stringify({ 
            question: question,
            department: props.department
          }) // body data type must match "Content-Type" header
        });
        const res = await response.json()
        console.log(res)}

        

    
    // const handleSubmit = (e)=>{
    //   e.preventDefault()
    //   console.log(criteria)
    // }
    return (
        <>
        {/* QUESTION NUMBER */}
        <div className="mt-6 col-span-1  w-full border-gray-200 pb-10 border-gray-200 ">
                    <h1 className="text-xl font-semibold">{props.section}.{props.qNum}</h1>
                    <h1 className="text-xl font-semibold">Q{props.qNum}</h1>
        </div>
        {/* QUESTION */}
        <div className="container mt-6 col-span-8 pb-10 border-gray-200 border-gray-200 ">
        <p className="text-2xl font-semibold mb-4">{props.qText}</p>
        {!props.preview?props.type==="textarea"?<textarea defaultValue={props.update&&previewFill} onChange={handleChange}  name={props.section+'.'+props.qNum}  className="w-full h-36  border-gray-400 border-2"></textarea>:
        
        props.type==="textbox"?<>
        <div className="my-2 text-2xl  text-blue-900">
        <label className="h-full font-semibold my-2">
          Year :{"  "}
          <input
          contentEditable="false"
            className="font-semibold outline-none"
            value="2020-21"
            type="text"
          ></input>
        </label>
      </div>
        <div className="my-2">
        <label className="h-full text-xl my-2">
          Number :{" "}
          <input
            onChange={handleChange}
            className=" focus:outline-none    border-gray-400 border-2"
            defaultValue={props.update&&previewFill}
            name={props.section+'.'+props.qNum}
            type="number"
          ></input>
        </label>
      </div></>:
        
        props.type==="radio"&&<> {props.radio.map(i=><div>
            <label class="inline-flex items-center">
        <input type="radio" defaultChecked={props.update&((previewFill)===i)?true:false}  onChange={handleChange} value={i} name={props.section+'.'+props.qNum} class="form-checkbox" />
        <span class="ml-2">{i}</span>
        
    </label>
        </div>)}</>
        :<div className="text-2xl font-semibold text-blue-700">{previewFill}</div>}
        </div>
        {/* UPLOAD DOCUMENTS */}
        <div className="mt-6 col-span-3 w-56 px-4 py-4 border-gray-200 border-gray-200 ">
           {props.preview===false? 
           <>
           {q.includes(props.section+'.'+props.qNum)&&<a className=" px-4  cursor-pointer shadow-md no-underline rounded bg-blue-500 text-white font-sans font-semibold text-sm hover:border-gray-300 border-blue-800 border-2 btn-primary hover:text-white hover:bg-blue-800 focus:outline-none active:shadow-none "  href={urls.filter(i=>i.qn==props.section+'.'+props.qNum)[0].url} 
           download={`Template${props.section+'.'+props.qNum}`} type="" >Download Template</a>}
           <form onSubmit={submitHandler} className="mt-6" name ={props.section+'.'+props.qNum} 
           action="/single" encType="multipart/form-data">
            <label className="text-lg font-medium text-gray-600">Supporting document<input type="file" id="document"onChange={fileChange} /></label>

            {q.includes(props.section+'.'+props.qNum)&&<label className="text-lg font-medium text-gray-600">Template<input id="template" type="file" onChange={fileChange} /></label>}

            {/* <input type="file" onChange={fileChange} >temp</input> */}
            <button  className="shadow-md  my-4 ml-14  bg-white  hover:bg-gray-200 text-gray-700 text font-semibold  hover:text-gray-700 py-1 px-1 border border-gray-700 hover:border-gray-400 rounded " type="submit" >Upload</button>
            </form></>:props.admin?
<></>:[(props.preview && (JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].document_name))
  ?<div className=" border-black">
    {/* <a className="my-4 mx-12 text-sm font-medium" >{JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].document_name}</a> */}
    <a className=" px-4 shadow-md no-underline rounded bg-blue-500 text-white font-sans font-semibold text-sm hover:border-gray-300 border-blue-800 border-2 btn-primary hover:text-white hover:bg-blue-800 focus:outline-none active:shadow-none " href={(JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].document_s3URL)}  type="" >Download Document</a>

    {q.includes(props.section+'.'+props.qNum)&&<div className="my-4"><a className="px-4 shadow-md no-underline rounded bg-blue-500 text-white font-sans font-semibold text-sm hover:border-gray-300 border-blue-800 border-2 btn-primary hover:text-white hover:bg-blue-800 focus:outline-none active:shadow-none " href={(JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].template_s3URL)}  type="" >Download Template</a></div>}
  </div>
  :null,
  (props.preview && (JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].template_s3Key))
  ?<div>
    {/* (for printing template file name) <a className="my-4 mx-12 text-sm font-medium" >{JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].document_name}</a> */}
    
  </div>
  :null
]
  }
        </div>

            
        </>
    )
}

export default QuestionGenerator
