import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const DisplayAccordion = (props)=>{

    const [showAccord , setShowAccord] = useState(false);

    const showAnswer =()=>{
        console.log("hello" , [props.index]);
        if(showAccord===true){
            setShowAccord(false);
        }else{
            setShowAccord(true)
        }
    }

    return(
        <>
            <div>
                <span onClick={showAnswer}>{showAccord ? <RemoveCircleIcon /> : <AddCircleIcon />}</span>
                <h3>{props.question}</h3>
            </div>
                {showAccord && <p>{props.answer}</p>}
 {/* /* Inline If with Logical && Operator : syntax - true && expression * if It's true it will print expression if its false it will ignore the expression */}

        </>
    )
}

export default DisplayAccordion;