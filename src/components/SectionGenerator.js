import React from 'react'
import QuestionGenerator from './QuestionGenerator'
import { useState } from 'react'

const SectionGenerator = (props) => {
    const [state, setstate] = useState(props.questions)
    
    

    return (
        <div className="mb-24 mx-7 mt-10 border-black ">
            <h1 className=" text-2xl font-medium font-sans font-normal  text-left border-black   text-blue-400 italic  mt-10 mb-5 ">{props.sectionHeading}</h1>

            <div  className="grid justify-items-start  border-gray-300 border-b-2 grid-cols-12 border-black ">
            {state.map((obj,i) => {
                
                return (<QuestionGenerator 
                    type={obj.type}
                    section = {props.section}
                    qNum ={i+1} 
                    qText={obj.text}
                    radio={obj.radio}
                    preview = {props.preview}
                    criteria = {props.criteria}
                    textbox = {obj.textbox}
                    admin={props.admin}
                    update={props.update}
                    />
                    
                )
            })}

                
                </div>
        </div>
    )
}

export default SectionGenerator
