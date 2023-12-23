// import React, { useState } from "react";
import React from "react";
import MyAccordionQst from "./MyAccordion";
import DisplayAccordion from "./AccordionDisp";
import './accordion.css'

const Accordion = () =>{

    // const [myData , setMyData] = useState();


    return(
        <>
            <div style={{background:""}}>
                <h1>Hello</h1>
                <div>
                    {
                    MyAccordionQst.map((data , index)=>{
                        return(
                            <>
                                <DisplayAccordion key={data.id} question={data.Question} 
                                answer={data.Answer} index={index}></DisplayAccordion>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )

}

export default Accordion;