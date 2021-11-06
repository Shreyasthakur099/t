import React from 'react'
import logo_ggv from './logo_ggv.png'
import logo from './onlyLogo.png'
import { useState, useContext } from "react";
import criteriaContext from '../context/criteriaContext'
import { useLocation, Link , useHistory} from 'react-router-dom'
import ForgotModal from './ForgotPasswordModal'
const Navbar = () => {
     const location = useLocation();
     let history= useHistory()
    const context = useContext(criteriaContext);
    const {modal, setModal} = context
    
    const handleLogout = async (e)=>{
        
        window.location.href="/login"
        localStorage.clear()

    }
    
    //Change password
    // const [openModal,setOpenModal] = useState(false);

    return (
        
            <header className="rounded-b-lg fixed bg-white shadow-md border-gray     h-20 z-50 w-full px-5 py-2 flex justify-between items-center">
            {/* <img className="w-5/12 mx-12 pt-4 pb-2 border-black  transform object-left-top" src={logo_ggv} alt="logo"/> */}
            <div onClick={e=>history.push("/home")} class="flex cursor-pointer title-font px-0 border-black font-medium items-center text-gray-900 mr-6 mb-4 md:mb-0">
            <img style={{width: "54px", height: "76px",objectFit: "cover"}} className=" mb-2   pt-4 pb-2 border-black  transform object-left-top" src={logo} alt="logo"/>
        
      <h1 class="ml-3 title-font flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 text-2xl mr-8">IQAC Portal</h1></div>
    <div class="md:mr-auto  md:py-1 pl-2  md:border-l md:border-gray-400	flex flex-wrap items-center text-xl justify-center">
      <Link to="/allCriteria" style={{display:(location.pathname==='/home'||location.pathname==='/allCriteria')&&"none"}} class="mr-5 font-medium  border-black  cursor-pointer hover:text-blue-500">All Criteria</Link>
      <button onClick={e=>setModal("forgot")} class="mr-8 transform  cursor-pointer font-medium hover:text-blue-500">Change Password</button>
      {/* {localStorage.getItem('role')==="admin"&&<><button onClick={e=>setModal("new")} class="mr-8 transform  cursor-pointer font-medium hover:text-blue-500">Create new user</button>
      <button onClick={e=>setModal("user")} class="mr-8 transform  cursor-pointer font-medium hover:text-blue-500">Change user password</button></>} */}
      
      {/* <button 
        className="openModalBtn"
        onClick={()=>{
          setOpenModal(true);
      }}>Change Password</button> */}
      {/* {openModal &&<Modal/>} */}
    </div>
    <h1 className="border-black text-blue-900 font-semibold  text-xl">Logged in for :&ensp;</h1>
    <h1 className="border-black text-blue-900 font-semibold mr-10   text-xl">{localStorage.role==="hod"?`Department of ${localStorage.department}`:localStorage.role==="admin"?"Administrator":localStorage.role==="coordinator"&&localStorage.department}</h1>
    <button onClick={handleLogout} className=" mr-6 text-blue-900  text-right border-black font-medium  h-16 w-8  hover:text-red-600 "><i class="fas pl-4 text-2xl fa-sign-out-alt"></i>
    <h1 className="mr-8">Logout</h1></button>
</header>
        
    )
}

export default Navbar
