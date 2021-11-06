import React from 'react'
import { useContext, useState } from 'react'
import criteriaContext from '../context/criteriaContext'

const QuestionGenerator = (props) => {
    const context = useContext(criteriaContext);
    const {handleChange,criteria,uploadFile,fileDownload} = context
    const [fileData, setFile] = useState({})
    const question = props.section+'.'+props.qNum
    const criterion = "criteria1"
    
    const previewFill=(props.update||props.preview)===true?(!localStorage.getItem(props.criteria)?localStorage.getItem('recent')&&(JSON.parse(localStorage.getItem('recent')).filter(i=>i.question===props.section+'.'+props.qNum)[0].response)  :(JSON.parse(localStorage.getItem(props.criteria)).filter(i=>i.question===props.section+'.'+props.qNum)[0].response)):""
    const updateFill = ""
    
    const fileChange = (e)=>{
      setFile(e.target.files[0])
      // console.log(typeof e.target.files[0])
      //  console.log( fileData)
      //  const data = new FormData()
      // data.append('document', e.target.files[0])
      // for(let a of data.values()){
      //   console.log(a)
      // }
      console.log(e.target.name)
    }
    const handleDownload = async(e)=>{
      e.preventDefault()
      const response = await fetch("http://localhost:5000/file/download", {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
    
          headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
          },
    
          body: { question:"ok"} // body data type must match "Content-Type" header
        });
        const res = await response.json()
        console.log(res)

    }
    const submitHandler = async (e)=>{
      e.preventDefault()
      const data = new FormData()
      data.append('document', fileData)
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
      // console.log(data)
      for(let a of data.values()){
        console.log(a)
      }
    }
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(criteria)
    }
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
        <div className="my-2">
        <label className="h-full my-2">
          Year :{"  "}
          <input
            className=" focus:outline-none   border-gray-400 border-2"
            value="2021-22"
            type="text"
          ></input>
        </label>
      </div>
        <div className="my-2">
        <label className="h-full my-2">
          Number :{" "}
          <input
            onChange={handleChange}
            className=" focus:outline-none   border-gray-400 border-2"
            defaultValue={props.update&&previewFill}
            name={props.section+'.'+props.qNum}
            type="text"
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
           {props.preview===false? <form onSubmit={submitHandler} name ={props.section+'.'+props.qNum} 
           action="/single" encType="multipart/form-data">
            <input type="file" onChange={fileChange} />
            <button  className="shadow-md  my-4 ml-14  bg-white  hover:bg-gray-200 text-gray-700 text font-semibold  hover:text-gray-700 py-1 px-1 border border-gray-700 hover:border-gray-400 rounded " type="submit" >Upload</button>
</form>:props.admin?<></>:<button className="shadow-md  my-4 ml-14  bg-white  hover:bg-gray-200 text-gray-700 text font-semibold  hover:text-gray-700 py-1 px-1 border border-gray-700 hover:border-gray-400 rounded  "  type="submit" >Download</button> }
        </div>

            
        </>
    )
}

export default QuestionGenerator
