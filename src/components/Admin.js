
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import criteriaContext from '../context/criteriaContext'
import DownloadCSV from '../components/DownloadCSV'
import CriteriaPreview from './CriteriaPreview'
import Navbar from './Navbar'
import ForgotPasswordModal from './ForgotPasswordModal'
import NewUserModal from './NewUserModal'
import UserPassword from './UserPassword'

const Admin = () => {
    const [page, setpage] = useState("")
    const context = useContext(criteriaContext);
    const {modal, setModal} = context

    useEffect(() => {
        window.scroll(0,document.body.scrollHeight)
        const response = fetch("http://68.183.87.5:5000/auth/departments",{
            method: "GET", // *GET, POST, PUT, DELETE, etc.
        
        headers: {
            "Content-Type": "application/json",
            "auth-token":localStorage.token
        }}).then(data=>data.json()).then(d=>localStorage.setItem('departments',JSON.stringify(d)))
        
    }, [])
    return (<div className={`${page===""&&"h-screen"} bg-purple-100 border-black`}>
        {modal==="forgot"?<ForgotPasswordModal/>:modal==="new"?<NewUserModal/>:modal==="user"&&<UserPassword/>}
       { page==="csv"?<DownloadCSV/>:page==="pre"? <CriteriaPreview/> :<div className=" w-6/12   ml-80 text-2xl font-medium font-sans font-normal  text-center border-black  pt-40 text-black">
        <p className="text-blue-900 mb-8 font-bold text-4xl"> YOU ARE LOGGED IN AS THE MASTER ADMINISTRATOR</p>
            <p>You can view the criteria of different departments and can download the data of different criteria in .csv format you can create or delete users and you can view criteria status of all departments, please navigate using the options below.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8">
            <button onClick={e=>setpage("pre")}  className=" shadow-md col-start-1 col-span-1  my-4 w-full h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">View criteria </button>
            <button onClick={e=>setpage("csv")}  className=" shadow-md col-start-2 col-span-1  my-4 w-full h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">Download CSV </button>
            <button onClick={e=>setModal("user")}  className=" shadow-md col-start-1 col-span-1  my-4 w-full h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">Change user password </button>
            <button onClick={e=>setModal("new")}  className=" shadow-md col-start-2 col-span-1  my-4 w-full h-16 bg-white  hover:bg-blue-500 text-blue-700 text-lg font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">Create User </button>
            </div>
            {/* <button onClick={e=>setpage("csv")}  ><div className="filter rounded-full bg-indigo-600 w-1/12 h-12 text-xl  pl-4 pt-2 font-medium text-white text-2xl h-10 w-10  mt-6 hover:bg-indigo-700 ">Download CSV</div> </button> */}
            {/* <button onClick={handleClick} ><div className="filter rounded-full bg-indigo-600 w-5/12 h-12 text-xl  pl-8 pt-2 font-medium text-white text-2xl h-10 w-10 mt-16 hover:bg-indigo-700 ">TESTING</div> </button> */}
    </div>}
    <button onClick={e=>setpage("")} style={{display:page===""&&"none"}}  ><div className="py-2 px-4 mb-44 shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-lg hover:border-gray-300 border-blue-800 border-2 btn-primary hover:text-white hover:bg-red-700 focus:outline-none active:shadow-none mx-10">Back to options</div> </button>
    
    </div>
    )
}

export default Admin
