import React, { useEffect, useContext } from 'react'
import edit from './edit.png'
import editWhite from './editWhite.png'
import { Link , useHistory} from 'react-router-dom'
import criteriaContext from '../context/criteriaContext'
import ForgotPasswordModal from './ForgotPasswordModal'

const AllCriteria = () => {
    const context = useContext(criteriaContext);
    const {submitCriteria,getUser,getCriteria,modal} = context
    let history = useHistory()
    const handleClick=()=>{
        
    }
    useEffect(() => {
        localStorage.getItem('token')==='null'&&history.push('/login')
        window.scroll(0,document.body.scrollHeight)
       getUser();
       JSON.parse(localStorage.getItem('done')).map(i=>getCriteria(i))
       localStorage.getItem('recent')=="null"&&localStorage.removeItem('recent')
    
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
    <div>
         {modal==="forgot"&&<ForgotPasswordModal/>}
    <div className="   pt-36 h-screen  bg-purple-100 border-black ">
       
        <div className="  grid justify-center   border-black ">
            <h1 className=" text-indigo-700 text-2xl  font-sans font-medium font-normal  text-center border-black   text-black">The Annual Quality Assurance Report (AQAR) of the IQAC</h1>
            <a className=" text-lg font-medium font-sans font-normal pt-2 text-center border-black  cursor-pointer text-black italic underline mb-10 hover:text-red-800">Refer: NAAC for Quality and Excellence in Higher Education PDF</a>


            
            <div style={{width:"70rem"}} className="grid  grid-cols-2  h-72 border-black  py-2 px-2">
               <div   className="border-black px-12 " >
                <button   onClick={e=>localStorage.getItem('1')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]=='1')?history.push({pathname:"criteria1",state:{preview:true}}):history.push({pathname:"criteria1",state:{preview:false}})} className="shadow-md col-span-1  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 1 – Curricular Aspects
                
                </button>

                <button onClick={e=>localStorage.getItem('2')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='2')?history.push({pathname:"criteria2",state:{preview:true}}):history.push({pathname:"criteria2",state:{preview:false}})}   className=" col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 2 – Teaching-Learning and Evaluation
                
                </button>
                <button onClick={e=>localStorage.getItem('3')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='3')?history.push({pathname:"criteria3",state:{preview:true}}):history.push({pathname:"criteria3",state:{preview:false}})}  className=" col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 3 – Research, Innovations and Extension
                
                </button>
                <button onClick={e=>localStorage.getItem('4')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='4')?history.push({pathname:"criteria4",state:{preview:true}}):history.push({pathname:"criteria4",state:{preview:false}})}  className="col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 4 – Infrastructure and Learning Resources
                
                </button>
                </div>



               <div   className="border-black px-12 my-10 " >
                <button onClick={e=>localStorage.getItem('5')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='5')?history.push({pathname:"criteria5",state:{preview:true}}):history.push({pathname:"criteria5",state:{preview:false}})}   className="col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 5 – Student Support and Progression
                
                </button>
                <button onClick={e=>localStorage.getItem('6')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='6')?history.push({pathname:"criteria6",state:{preview:true}}):history.push({pathname:"criteria6",state:{preview:false}})}   className="col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2  border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 6 – Governance, Leadership and Management
                
                </button>
                <button onClick={e=>localStorage.getItem('7')||(localStorage.getItem('recent')&&JSON.parse(localStorage.getItem('recent'))[0].question[0]==='7')?history.push({pathname:"criteria7",state:{preview:true}}):history.push({pathname:"criteria7",state:{preview:false}})}   className="col-span-1 shadow-md  my-4 w-full h-20 bg-white  hover:bg-blue-500 text-blue-700 text-xl font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                Criterion 7 – Institutional Values and Best Practices
                
                </button>
                
                </div>
                </div>
             

             
</div>



            </div>
           </div>
        
    )}

export default AllCriteria;
