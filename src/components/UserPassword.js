import React, { useState } from "react";
import "./ForgotPasswordModal.css";
import { useContext } from "react";
import criteriaContext from "../context/criteriaContext";

function UserPassword() {
  const context = useContext(criteriaContext);

  const { /* user, setUser,*/ setModal } = context;
  const [cred, setCred] = useState({
    department: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handlePassword = async (e) => {
    if (cred.password === cred.cpassword) {
      const response = await fetch("http://143.110.255.113:5000/auth/update", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify({
          department: cred.department,
          password: cred.password,
        }),
      });

      const data = await response.json();
      console.log(data);
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    // <Modal size="sm" toggler={()=>setModal(false)} className='modalbackground'>
    <div className="h-screen w-screen bg-gray-700 bg-opacity-75 pt-16 fixed flex justify-center items-center">
      <div className="modalContainer forgot">
        <div className="titleCloseBtn ">
          <button
            className="font-semibold text-gray-700 hover:text-red-600 transform hover:scale-150"
            onClick={() => setModal("")}
          >
            X
          </button>
        </div>
        <div className="title font-medium items-center text-blue-900 mb-10 text-2xl">
          <h1>Change departmental password</h1>
        </div>
        <div className="body">
          {/* <p>
                        The next page is awesome
                    </p> */}
          <form>
            <div className="mb-4 font-medium items-center text-gray-900   text-lg">
              <label>
                Department :
                <select
                  onChange={handleChange}
                  id="department"
                  className="shadow appearance-none border border-blue-500 rounded mx-5 py-2 px-2 text-gray-700 mb-3 w-3/5 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected value="">
                    Select Department
                  </option>
                  {JSON.parse(localStorage.getItem("departments")).map((i) => (
                    <option value={i}>{i}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mb-4 font-medium items-center text-gray-900   text-lg">
              <label>
                Change Password:
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded mx-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </label>
            </div>
            <div className="mb-4 font-medium items-center text-gray-900   text-lg">
              <label>
                Confirm Password:
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded mx-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="footer">
          <button
            onClick={() => setModal(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handlePassword();
              setModal(false);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPassword;
