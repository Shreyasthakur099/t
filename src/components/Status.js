import React from 'react'
import {useEffect} from 'react'


const Status = () => {
   

    // const getStatus = async(e)=>{
    //     const response = await fetch("http://localhost:5000/auth/status ", {
    //     method: "GET", // *GET, POST, PUT, DELETE, etc.

    //     headers: {
    //       "Content-Type": "application/json",
    //       "auth-token": localStorage.token,
    //     }
    //   });
    //    const data = await response.json();
    //   localStorage.setItem('status',JSON.stringify(data))
    // }

    useEffect(() => {
        // getStatus()
    }, [])

    return (
        <div>
            <div className="grid justify-items-center   ml-28 grid-cols-4 w-10/12   text-2xl font-medium font-sans font-normal text-center border-black  pt-28  text-black">
        <h1 className="col-start-2 justify-center col-span-2 text-blue-900 mb-8 font-bold text-4xl">
          Criteria submission status of all departments is shown here
        </h1>
        <div className="rounded-md shadow-lg grid justify-items-stretch border-t border-blue-800 border  gap-x-8 grid-cols-2 w-full col-start-2 col-span-2  py-4   text-blue-900 ">
        <div className="col-start-1 w-full border-blue-800 border-r  col-span-1">DEPARTMENT</div>
               <div  className="col-start-2  w-full border-black  col-span-1">CRITERIA FILLED </div>
        </div>
        {JSON.parse(localStorage.getItem('status')).map(i=>{
           return( <><div className=" shadow-lg grid justify-items-stretch border-t border-blue-800 border  gap-x-8 grid-cols-2 w-full col-start-2 col-span-2  py-4 bg-white  text-blue-900 ">
               <div className="col-start-1 w-full border-blue-800 border-r  col-span-1">{ i.department}</div>
               <div  className="col-start-2  w-full border-black  col-span-1"> {
                i.done.map(j=><> {j}, </>)
                }</div>
               </div></>)
        })}
        
        </div>
        </div>
    )
}

export default (Status)
