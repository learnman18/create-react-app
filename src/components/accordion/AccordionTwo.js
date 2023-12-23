//same as accordion but differen approach we can see here 
//here are using spread operator in props to pass the data to the other page

//{...data} stores all the data and field of the MyAccordionQst array file we have created

import React, { useState } from "react";
import MyAccordionQst from "./MyAccordion";
import DisplayAccordionTwo from "./AccordionDispTwo";
import './accordion.css'


const AccordionTwo = () =>{

    const [myData , setMyData] = useState(MyAccordionQst);


    return(
        <>
            <div style={{background:""}}>
                <h1>Hello</h1>
                <div>
                    {
                    myData.map((data , index)=>{
                        return(
                            <>  
                            {/* instead of writeing data.id , data.question we can destructure it {id,Question,Answer} = data */}
                                <DisplayAccordionTwo key={data.id} {...data}></DisplayAccordionTwo>
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )

}

export default AccordionTwo;