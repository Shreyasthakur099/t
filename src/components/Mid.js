import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import criteriaContext from '../context/criteriaContext'
import ForgotPasswordModal from './ForgotPasswordModal'

const Mid = (props) => {
    const context = useContext(criteriaContext);
    const {getUser,getCriteria,modal} = context
    let history = useHistory()

    const handleClick = ()=>{
        typeof localStorage.getItem('token')==='undefined'?history.push('/login'):
        console.log(  JSON.parse(localStorage.getItem('done')).map(i=>getCriteria(i)))
    }
    useEffect(() => {
        window.scroll(0,document.body.scrollHeight)
        if(props.status==="invalid"){
            window.alert("You are already logged in some other tab")
        }
    //    getUser()
    }, [])
    return (
        <div>
            {modal==="forgot"&&<ForgotPasswordModal/>}
        <div className="grid grid-cols-4 h-screen bg-purple-100">
        <div className=" col-start-2 col-end-4 w-11/12 mb-44 mx-16 text-2xl bg-purple-100 font-medium font-sans font-normal  text-center border-black  pt-60 text-black">
            <h1 className="mb-20 border-black  title-font font-semibold items-center text-blue-900   text-3xl mr-8">The prime objective of the IQAC is to develop a system for conscious, consistent
            and catalytic action to improve the academic and administrative performance of
            the institution.
                </h1>
                <Link to="/allCriteria"  onClick={handleClick} className="shadow-md  bg-white  hover:bg-blue-500 text-blue-700 text-2xl font-semibold hover:text-white py-4 px-10 border border-blue-800 hover:border-transparent rounded transition delay-100 duration-200 ease-in-out">
                
                DATA CAPTURING SYSTEM
                </Link>

                {/* <Link to="/allCriteria" onClick={handleClick} ><div className="filter rounded-full bg-indigo-600 w-6/12 h-12 text-xl  pl-8 pt-2 font-medium text-white text-2xl h-10 w-10 mt-16 hover:bg-indigo-700 ">Data Capturing System</div> </Link> */}
                {/* <button onClick={handleClick} ><div className="filter rounded-full bg-indigo-600 w-5/12 h-12 text-xl  pl-8 pt-2 font-medium text-white text-2xl h-10 w-10 mt-16 hover:bg-indigo-700 ">TESTING</div> </button> */}
        </div>
        </div>
        </div>
    )
}

export default Mid
