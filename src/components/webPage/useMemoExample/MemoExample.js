import React, { useMemo, useState } from "react";

const MemoExample = () => {

    const [counter, setCounter] = useState(1);
    const [showMsg, setShowMsg] = useState(false);

    // const increaseCount = () =>{
    //     setCounter(counter + 1)
    // }

    // const countNumber = (num) => {
    //     for(let i=0; i < 100000000; i++){
    //         console.log("numn", num);
    //     }
    //     return num;

    // }

    // const checkValue = countNumber(counter)

    /* to check the performance issue, just uncomment the commented part, and you will see even on the click of 
    Please Click button, it cause the issue but by using memo it will cause the slowness only on the counter btn click.
    Also check on page uncomment the route and link from footer and aap.js files.
    */



    const increaseCount = () =>{
        setCounter(counter + 1)
    }

    const countNumber = (num) => {
        for(let i=0; i < 10000000; i++){
            console.log("numn", num);
        }
        return num;
    }

    const checkValue = useMemo(()=>{
        return countNumber(counter)
    },[counter])


    return(
        <>
            <button onClick={increaseCount}>Counter</button>
            <p>Number : {checkValue}</p>
            <div>
                <button onClick={()=>setShowMsg(!showMsg)}>{!showMsg ? 'Please Click' : 'Clicked'}</button>
            </div>
        </>
    )


}

export default MemoExample;