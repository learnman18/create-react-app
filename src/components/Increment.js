import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Increment = ()=>{

    const [increase , setIncrease] = useState(0)

    const IncreaseValue = () =>{
        console.log("increase");
        if(increase >= 0){
            setIncrease(increase + 1);
        }
    }

    const DecreaseValue = () =>{
        console.log("decrease");
        if(increase>0){
            setIncrease(increase - 1)
        }else{
            setIncrease(0)
            alert("the limit is set, you can't go below ZERO")
        }
    }

    return(
        <React.Fragment>
            <div>
                <h1>{increase}</h1>
                <button onClick={IncreaseValue}><AddCircleIcon /></button>
                <button onClick={DecreaseValue}><RemoveCircleIcon /></button>
            </div>
        </React.Fragment>
    )
}

export default Increment;