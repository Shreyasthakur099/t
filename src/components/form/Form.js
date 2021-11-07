import React from "react";
import { Link } from "react-router-dom";
import logo from "../form/logo.png";
import background from "../form/Login_Background.png";
import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import criteriaContext from '../../context/criteriaContext'

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  wrapper: {
    width: "60%",
    height: "120vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 30,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#4D6FBE",
  },
  username: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff",
    backgroundColor: "aliceblue",
    borderRadius: 8,
    margin: 10,
  },
  password: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "aliceblue",
    margin: 10,
    borderRadius: 8,
  },
  button: {
    width: "25%",
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "aliceblue",
    backgroundColor: "#a1b3dd",
    textTransform: "none",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: "#fff",
      color: "#2874f0",
      boxShadow: "none",
    },
  },
  heading: {
    color: "#fff",
    fontFamily: "Roboto Slab",
    paddingTop: "25px",
    fontWeight: "700",
    fontSize: "25px",
    textAlign: "center",
    wordSpacing: 2,
  },
  subHeading: {
    fontFamily: "Bebas Neue",
    letterSpacing: "4px",
    color: "#fff",
    paddingTop: "15px",
    fontSize: "40px",
    textAlign: "center",
    fontWeight: "bolder",
    marginBottom: "5px",
  },

  // forgot: {
  //   display: "flex",
  //   justifyContent: "space-around",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },


  contact: {
    color: "aliceblue",
    textAlign: "center",
    textDecoration: "underline",
    marginTop: "10px",
    paddingBottom:"5px",
  },
  logo: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const Form = (props) => {
   const classes = useStyles();
  const context = useContext(criteriaContext);
    const {user, setUser,getUser} = context
  const [cred, setCred] = useState({ username: "", password: "" });
  //////////////////////////////////
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.id]: e.target.value });
   
  };

  const handlePassword = async(e) => {

  }

  const handleLogin = async (e) => {
    e.preventDefault();
    window.name=cred.username
    const response1 = await fetch("http://68.183.87.5:5000/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ username: cred.username, password: cred.password, currentTab:window.name }), // body data type must match "Content-Type" header
    }).catch();
    const jsonToken = await response1.json();
    
    

    if (!jsonToken.error) {
      //redirect
      localStorage.setItem('token', jsonToken.authToken);
      
      
      localStorage.setItem('department', jsonToken.userdetails.department);
      localStorage.setItem('branch', jsonToken.userdetails.branch);
      localStorage.setItem('role', jsonToken.userdetails.role);
      localStorage.setItem('username', jsonToken.userdetails.username);
      localStorage.setItem('currentTab', jsonToken.userdetails.currentTab);
      localStorage.setItem('done',JSON.stringify(jsonToken.userdetails.done))
      // localStorage.setItem('done',jsonToken.userdetails.done)

     //cache
      window.location.href = '/home'
      // sUser(jsonUser._id,jsonToken)
      
    } else {
      console.log("NOPE");
    }

    

   
  };
useEffect(() => {
  localStorage.clear()
  if(props.status==="invalid"){window.alert("PLEASE LOGIN TO USE THE PORTAL")}
}, [])


  return (
    // <div className={classes.background}>
    //   <Paper className={classes.wrapper}>
    //     <img className={classes.logo} src={logo} alt="Logo" />
    //     <h3 className={classes.heading}>INTERNAL QUALITY ASSURANCE CELL</h3>
    //     <h1 className={classes.subHeading}>LOGIN</h1>
    //     <TextField
    //       className={classes.username}
    //       id="username"
    //       label="Username"
    //       variant="outlined"
    //       onChange={handleChange}
    //     />
    //     <TextField
    //       className={classes.password}
    //       id="password"
    //       label="Password"
    //       variant="outlined"
    //       type="password"
    //       onChange={handleChange}
    //     />
    //     <Button onClick={handleLogin} className={classes.button} variant="contained">
    //       Login
    //     </Button>
        
    //     <p className={classes.contact}>Need Assistance? Contact Us</p>
    //   </Paper>
    // </div>
    <div style={{backgroundImage: `url(${background})`}} className="h-screen w-screen grid grid-cols-7">
      <div className="col-span-3 col-start-3  border-black ">
        <div style={{height:"90%",boxShadow: "rgba(0,0,0,0.6) 0px 5px 15px"}} className="py-2  border-black rounded bg-indigo-600  w-full mt-8  ">
        <img style={{height:"180px",width:"500px"}} className="ml-12 " src={logo} alt="Logo" />
        <h1 className=" font-medium items-center text-gray-100 mt ml-16 text-3xl">INTERNAL QUALITY ASSURANCE CELL</h1>
        <h1 className=" font-medium items-center text-gray-100 mb-12  ml-72 text-3xl">(IQAC)</h1>
        <h1 className=" font-medium items-center text-gray-100 mb-4  ml-64 text-2xl">Web Portal Login</h1>
        <form onSubmit={handleLogin}>
            <div className="mb-4 font-medium items-center    text-xl">
            <label className="ml-36 text-gray-100">
                Username: 
                <input onChange={handleChange} className="shadow appearance-none border border-blue-800 rounded mx-2 py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='username' name='username' id="username" placeholder="Enter username"/>
            </label>
            </div>
            <div className="mb-4 font-medium items-center text-gray-900 text-xl">
            <label className="ml-36 text-gray-100">
               <> Password: </>
                <input onChange={handleChange} className="shadow appearance-none border border-blue-800 rounded mx-2 py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='password' name='password' id="password" placeholder="Enter password"/>
            </label>
            </div>

            <button onClick={handleLogin} className=" px-6 py-2 ml-72 mt-2 shadow-md no-underline rounded bg-white text-indigo-600 font-sans font-semibold text-xl hover:border-indigo-400 border-white border  hover:text-white hover:bg-indigo-400 focus:outline-none active:shadow-none mx-10">Login</button>

        </form>
        </div>


      </div>

    </div>
  );
};

export default Form;
