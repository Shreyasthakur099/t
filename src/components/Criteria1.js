import React from 'react'
import SectionGenerator from './SectionGenerator'
import { useState } from 'react'
import {criteria1} from '../constants/data'
import { useContext, useEffect } from 'react'
import criteriaContext from '../context/criteriaContext'
import { Link , useHistory, useLocation, Redirect, withRouter} from 'react-router-dom'
import ForgotPasswordModal from './ForgotPasswordModal'
import Spinner from './Spinner'
import Modal from './Modal'
// import templates from '../Templates/11.xlsx'

const Criteria1 = (props) => {
    const [preview, setPreview] = useState("preview")
    const name="criteria1"
    let location = useLocation()
    let history = useHistory()
    const context = useContext(criteriaContext);
    const {submitCriteria,error,setError,setCount,count,setLoading,getCriteria,setCriteria,criteria,setStatus, status, loading,modal} = context
    const text = props.preview?"Update":"Preview"
    let total=0

    const state = !localStorage.getItem(props.criteria)?(JSON.parse(localStorage.getItem('recent')))  :(JSON.parse(localStorage.getItem(props.criteria)))

    const num = 
    props.criteria==='1'?11:
    props.criteria==='2'?19:
    props.criteria==='3'?31:
    props.criteria==='4'?15:
    props.criteria==='5'?13:
    props.criteria==='6'?16:
    props.criteria==='7'&&13


    const handleClick = (e)=>{
        // setError('Do you want to save the criteria?')
         if(num==count){setLoading(true)
         const k = window.confirm("Do you wish to submit criteria?")
        if(k===true){
            
            submitCriteria(props.criteria)
         history.push('/allCriteria') 
        setCriteria(null)
        !JSON.parse(localStorage.getItem('done')).includes(props.criteria)&&localStorage.setItem('done',JSON.stringify(JSON.parse(localStorage.getItem('done')).concat([props.criteria])))
        JSON.parse(localStorage.getItem('done')).map(i=>getCriteria(i))}
      setLoading(false)}
      else{
          setError('Please fill the complete form before submitting')
      }
        
    }

    useEffect(() => {
        setCount(0)
        window.history.pushState(null, null, window.location.href)
        setStatus(null)
       setLoading(false)
        localStorage.getItem('token')==='null'&&history.push('/login')
        setCriteria(null)
          window.scrollTo(0,0)
          // setLoading(false)
          // console.log(templates)
        
    }, [])
    
    return (
        <div>{loading?<Spinner text={`Criterion${props.criteria}`}/>:<>
        {error!==''&&<Modal criteria = {props.criteria}/>}
            {modal==="forgot"&&<ForgotPasswordModal/>}
        <div className="bg-white items-stretch flex justify-center  pt-24 bg-gray-50">
        <div className="mb-24 w-9/12  rounded-md shadow-lg bg-white  border-gray-300 border-2 ">
            
            <h1 className=" text-indigo-700 text-5xl font-bold font-sans font-normal  text-center border-black  mx-72 mb-6 text-black">{props.department}</h1>
            <h1 className=" text-indigo-700 text-4xl font-medium font-sans font-normal  text-center border-black  my-10 ml-10  text-black">{props.preview!==true?props.heading:`Criterion${props.criteria} responses`} </h1>
            
            
            
            {props.criteriaData.map((obj,i) => {
                total=total+1
                return (<SectionGenerator 
                    sectionHeading = {obj.heading}
            section={`${props.criteria}.${i+1}`}
            preview = {location.state===undefined?localStorage.getItem('recent')||localStorage.getItem(props.criteria)?true:false:location.state.preview}
            update = {location.state===undefined?localStorage.getItem('recent')||localStorage.getItem(props.criteria)?true:false:location.state.update}
            questions={obj.questions}
            criteria={props.criteria}
            admin={props.admin}/>
            
                )
            })}
            
           
        {/* {one===1?<Criterion1_1/>:one===2?<Criterion1_2/>:one===3?<Criterion1_3/>:one===4?<Criterion1_4/>:{}} */}
        <div className="border-black my-8 select-none  justify-center flex">
            <button  style={{display:props.admin&&"none"||(location.state!==undefined&&location.state.preview===true&&"none")}} onClick={handleClick} className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-lg border-blue  hover:text-white hover:bg-green-600 focus:outline-none active:shadow-none border-blue-800 border-2 hover:border-gray-300 mx-10" id="save">Save Criteria</button>

            <Link to='/allCriteria'  style={{display:props.admin&&"none"}} className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-lg hover:border-gray-300 border-blue-800 border-2 btn-primary hover:text-white hover:bg-blue-800 focus:outline-none active:shadow-none mx-10" id="prev">Go To All Criteria</Link>
            <button 
            onClick={e=>{history.push({pathname:`criteria${props.criteria}`,state:{preview:false, update:true}});setCriteria(state);console.log(criteria)}}
            style={{display:props.admin&&"none"||(location.state!==undefined&&location.state.preview===false&&"none")}}  className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-lg border-blue  hover:text-white hover:bg-yellow-500 focus:outline-none border-blue-800 hover:border-gray-300 border-2 active:shadow-none mx-10 "id="edit">Update Criteria</button>
            {/* <Link to="/criteriaPreview1" className="h-10 pl-4 pt-2 w-32 mx-12 text-xl font-medium bg-purple-200 rounded-md border-black text-blue-900 hover:bg-blue-800 hover:text-white " id="prev" > </Link> */}
            
            
        </div>

        </div>
        </div>
        </>}
        </div>
        
    )
}

export default withRouter(Criteria1)
