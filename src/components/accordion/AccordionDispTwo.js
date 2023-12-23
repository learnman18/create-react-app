//same as accordion but differen approach we can see here 
//if you just console the props here you will see all the data is inside becuase of ... operator
//or we can destructure it instead of using props word we can do const displayAccorTwo = ({question,answer})

import React, { useState } from "react";


const DisplayAccordionTwo = (props)=>{

    console.log(props);

    const [showAccord , setShowAccord] = useState(false);

    const showAnswer =()=>{
        // console.log("hello" , [props.index]);
        if(showAccord===true){
            setShowAccord(false)
        }else{
            setShowAccord(true)
        }
    }

    return(
        <>
            <div>
                <span onClick={showAnswer}>{showAccord ? '-': '+'}</span>
                <h3>{props.Question}</h3>
            </div>
                {showAccord && <p>{props.Answer}</p>}
 {/* /* Inline If with Logical && Operator : syntax - true && expression * if It's true it will print expression if its false it will ignore the expression */}

        </>
    )
}

export default DisplayAccordionTwo;