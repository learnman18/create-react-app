import React, { useEffect, useState } from "react";

const EffectExample = ()=>{

    const [num , setNum] = useState(0);
    const [nums , setNums] = useState(0);

    useEffect(()=>{
        alert("the number is updated by 1");
    },[num])

    return(
        <>
            <button onClick={
                ()=>{
                    setNum(num + 1);
                    console.log(num);
                }
            }>Click {num}</button>
            <br/>
            <button onClick={
            ()=>{
                setNums(nums + 1);
                console.log(nums);
            }
            }>Click {nums}</button>
        </> 
    )
}

export default EffectExample;