import React from "react";
import { useContext, useState } from "react";
import criteriaContext from "../context/criteriaContext";

function NewUserModal() {
  const context = useContext(criteriaContext);
  const { setModal, error, setError } = context;
  const [cred, setCred] = useState({
    username: "",
    password: "",
    cpassword: "",
    department: "",
    role: "",
  });
  //////////////////////////////////
  const handleChange = (e) => {
    setCred({ ...cred, [e.target.id]: e.target.value });
  };

  const handleCreate = async (e) => {
    if (cred.password === cred.cpassword) {
      const response = await fetch("http://143.110.255.113:5000/auth/register", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.token,
        },
        body: JSON.stringify({
          password: cred.password,
          username: cred.username,
          department: cred.department,
          role: cred.role,
        }),
      });

      const data = await response.json();
      console.log(data);
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-700 bg-opacity-75 pt-16 fixed flex justify-center items-center">
      <div className="modalContainer create fixed flex justify-start">
        <div className="titleCloseBtn  ">
          <button
            className="font-semibold text-gray-700 hover:text-red-600 transform hover:scale-150"
            onClick={() => setModal("")}
          >
            X
          </button>
        </div>
        <div className="title font-medium items-center text-blue-900 mb-10 text-2xl">
          <h1>Create New User</h1>
        </div>
        <div className="body">
          <form>
            <div className="mb-2 font-medium items-center text-gray-900   text-lg">
              <label>
                Username:
                <input
                  style={{textTransform:"uppercase" }} 
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded mx-6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="GGV/department"
                />
              </label>
            </div>
            <div className="mb-2 font-medium items-center text-gray-900   text-lg">
              <label>
                Password:
                <input
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded mx-6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="mb-2 font-medium items-center text-gray-900   text-lg">
              <label>
                Confirm Password :
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
            <div className="mb-2 font-medium items-center text-gray-900   text-lg">
              <label>
                Department:
                <input style={{textTransform:"uppercase" }}
                  onChange={handleChange}
                  className="shadow appearance-none border border-blue-500 rounded mx-2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="department"
                  id="department"
                  placeholder="Department initials"
                />
              </label>
            </div>
            <div className="font-medium items-center text-gray-900   text-lg">
              <label>
                Select Role:
                <select
                  onChange={handleChange}
                  id="role"
                  className="shadow cursor-pointer appearance-none border border-blue-500 rounded mx-5 py-2 px-2 text-gray-700 mb-3 w-3/5 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option selected value="">
                    Select Role
                  </option>
                  <option value="hod">HOD</option>
                  <option value="admin">Admin</option>
                  <option value="coordinator">Coordinator</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <div className="footer mt-4">
          <button
            onClick={() => setModal(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleCreate();
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

export default NewUserModal;
