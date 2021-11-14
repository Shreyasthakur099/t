import React from "react";
// import {criteria1,criteria2} from '../constants/data'
import criteriaContext from "../context/criteriaContext";
import Criteria1 from "./Criteria1";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Preview = (props) => {
  const context = useContext(criteriaContext);
  // const [loading, setLoading] = uLeState(true)
  //   const { getCriteria, loading } = context;

  useEffect(() => {}, []);

  return (
    <>
      <Criteria1
        criteria={props.criteria}
        criteriaData={props.criteriaData}
        heading={props.heading}
        preview={true}
      />
      <Link
        to="/criteria1"
        className="h-10 pl-4 pt-2 w-32 mx-12 text-xl font-medium bg-purple-200 rounded-md border-black text-blue-900 hover:bg-blue-800 hover:text-white "
        id="prev"
      >
        {" "}
        Update
      </Link>
    </>
  );
};

export default Preview;
