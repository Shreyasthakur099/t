import React from "react";
// import { Link } from "react-router-dom";
import logo from "../form/logo.png";
import background from "../form/Login_Background.png";
// import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
import { useState, /* useContext,*/ useEffect } from "react";
import Modal from "../Modal";
import { useContext } from 'react'
import criteriaContext from '../../context/criteriaContext'
const Form = (props) => {
  //  const classes = useStyles();
  const context = useContext(criteriaContext);
  const {setError, error} = context
  const [cred, setCred] = useState({ username: "", password: "" });
  //////////////////////////////////
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  // const handlePassword = async(e) => {

  // }

  const handleLogin = async (e) => {
    e.preventDefault();
    window.name = cred.username;
    const response1 = await fetch("http://localhost:5000/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: cred.username,
        password: cred.password,
        currentTab: window.name,
      }), // body data type must match "Content-Type" header
    }).catch();
    const jsonToken = await response1.json();
    console.log(jsonToken)
    // console.log(jsonToken.failure==true)

    if (!jsonToken.failure==true) {
      //redirect
      localStorage.setItem("token", jsonToken.authToken);

      localStorage.setItem("department", jsonToken.userdetails.department);
      localStorage.setItem("branch", jsonToken.userdetails.branch);
      localStorage.setItem("role", jsonToken.userdetails.role);
      localStorage.setItem("username", jsonToken.userdetails.username);
      localStorage.setItem("currentTab", jsonToken.userdetails.currentTab);
      localStorage.setItem("done", JSON.stringify(jsonToken.userdetails.done));
      // localStorage.setItem('done',jsonToken.userdetails.done)

      //cache
      window.location.href = "/home";
      // sUser(jsonUser._id,jsonToken)
    } else {
      setError(jsonToken.failure)
      
    }
  };
  useEffect(() => {
    localStorage.clear();
    if (props.status === "invalid") {
      setError("PLEASE LOGIN TO USE THE PORTAL")
    }
  }, [props.status]);

  return (
    
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="h-screen w-screen grid grid-cols-7 "
    >
      {error!==''&&<Modal/>}
      <div className="  col-span-3 col-start-3  border-black  ">
        <div
          style={{ height: "90%", boxShadow: "rgba(0,0,0,0.6) 0px 5px 15px" }}
          className="py-2 grid justify-items-center border-black rounded bg-indigo-600  w-full mt-8  "
        >
          <img
            style={{ height: "180px", width: "500px" }}
            className=" transform sm:scale-75  md:scale-75  lg:scale-100"
            src={logo}
            alt="Logo"
          />
          <h1 className=" font-medium  text-gray-100 mt   text-3xl">
            INTERNAL QUALITY ASSURANCE CELL
          </h1>
          <h1 className=" font-medium  text-gray-100 mb-12   text-3xl">
            (IQAC)
          </h1>
          <h1 className=" font-medium  text-gray-100 mb-4   text-2xl">
            Web Portal Login
          </h1>
          <form onSubmit={handleLogin} className="grid justify-items-center ">
            <div className="mb-4 font-medium    ">
              <label className=" text-gray-100 text-xl">
                Username:
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-800 rounded mx-2 py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="username"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                />
              </label>
            </div>
            <div className="mb-4 font-medium items-center text-gray-900 text-xl">
              <label className=" text-gray-100">
                <> Password: </>
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-800 rounded mx-2 py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                />
              </label>
            </div>

            <button
              onClick={handleLogin}
              className=" px-6 py-2  mt-2 shadow-md no-underline rounded bg-white text-indigo-600 font-sans font-semibold text-xl hover:border-indigo-400 border-white border  hover:text-white hover:bg-indigo-400 focus:outline-none active:shadow-none "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
