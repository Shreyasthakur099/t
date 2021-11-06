import Form from "./components/form/Form";
import logo from "./logo.svg";
import "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mid from "./components/Mid";
import AllCriteria from "./components/AllCriteria";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import {useState} from "react";
import Criteria1 from "./components/Criteria1";
import CriteriaState from "./context/CriteriaState";
import Preview from "./components/Preview";
import {criteria1, criteria2, criteria3, criteria4, criteria5, criteria6, criteria7 } from './constants/data'
import Coordinator from "./components/Coordinator";
import DownloadCSV from './components/DownloadCSV'
import Admin from "./components/Admin";
import CriteriaPreview from "./components/CriteriaPreview";
import Modal from "./components/ForgotPasswordModal";
import UserModal from "./components/NewUserModal"


function App() {

  //for forgot password
  const [openModal,setOpenModal] = useState(false);
  //for create new user
  const [newUserModal,setModalModal] = useState(false);

  return (
    // <div>
    //   {/* <ForgotPasswordModal/> */}
    
    //   <button 
    //         className="openModalBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //         onClick={()=>{
    //           setOpenModal(true);
    //       }}>
    //         Change Password
    //   </button> 
    //      {/* {openModal &&<Modal closeModal={setOpenModal}/>} */}


    //   <button
    //   className="openModalBtn bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded"
    //   onClick={()=>{
    //     setModalModal(true);
    //   }}>
    //     Create New User
    //   </button>
    //   {openModal &&<Modal closeModal={setOpenModal}/>}
    //   {newUserModal &&<UserModal closeUserModal={setModalModal}/>}
    // </div>



   <div>
      <CriteriaState>
      
      <Router>
        {localStorage.token&&<Navbar/>}

        <Switch>
          <Route path="/allCriteria">
            {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<AllCriteria />:<Form status="invalid"/>}
          </Route>
          <Route path="/downloadCSV">
          {localStorage.token?<DownloadCSV />:<Form status="invalid"/>}
          </Route>
          <Route path="/criteriaPreview">
          {localStorage.token?<CriteriaPreview />:<Form status="invalid"/>}
          </Route>
        
          

          <Route path="/home">
            {localStorage.token?(localStorage.role==="coordinator"?<Coordinator/>:localStorage.role==="admin"?<Admin/>:<Mid/>):<Form status="invalid"/>}
          </Route>

          <Route path="/criteria1">
            {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="1" criteriaData = {criteria1} heading="Criterion 1 – Curricular Aspects"/>:<Form status="invalid"/>}
          </Route>
          <Route path="/criteria2">
            {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="2" criteriaData = {criteria2} heading="Criterion 2 – Teaching-Learning and Evaluation" />:<Form status="invalid"/>}
          </Route>
          <Route path="/criteria3">
          {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="3" criteriaData = {criteria3} heading="Criterion 3 – Research, Innovations and Extension" />:<Form status="invalid"/>}          </Route>
          <Route path="/criteria4">
          {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="4" criteriaData = {criteria4} heading="Criterion 4 – Infrastructure and Learning Resources"/>:<Form status="invalid"/>}          </Route>
          <Route path="/criteria5">
          {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="5" criteriaData = {criteria5} heading="Criterion 5 – Student Support and Progression "/>:<Form status="invalid"/>}          </Route>
          <Route path="/criteria6">
          {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="6" criteriaData = {criteria6} heading="Criterion 6 – Governance, Leadership and Management"/>:<Form status="invalid"/>}          </Route>
          <Route path="/criteria7">
          {localStorage.token?localStorage.role===("admin"||"coordinator")?<Redirect to="/home" />:<Criteria1 criteria="7" criteriaData = {criteria7} heading="Criterion 7 – Institutional Values and Best Practices"/>:<Form status="invalid"/>}          </Route>

          <Route path = '/login'>
            {localStorage.token?<Mid status="invalid"/>:<Form status="valid"/>}
          </Route>
        </Switch>
         {localStorage.token&&<Footer />}
      </Router>
      </CriteriaState>
    </div>
  );
}

export default App;
