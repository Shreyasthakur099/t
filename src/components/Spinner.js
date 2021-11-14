import React, { Component } from 'react'
import loading from '../Spinner.gif'

export default function Spinner(props){
    
        return (
            <div className="grid justify-items-center h-screen pt-44 ">
                <img src={loading} className="" alt="LOADING"/>
                <h1 className="text-4xl font-bold">{`Loading ${props.text!==undefined?props.text:""}...`}</h1>
            </div>
        )
    
}


