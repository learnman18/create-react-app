import React, { useState } from "react";

var ExactTime = () =>{

    let newTime = new Date();
    newTime = newTime.toLocaleTimeString();

    const[currentTime , setCurrentTime] = useState(newTime);

    var GetCurrentTime = () =>{
        let newTime = new Date();
        newTime = newTime.toLocaleTimeString();

        setCurrentTime(newTime);
    }

    return(
        <>
            <h1>{currentTime}</h1>
            <button onClick={GetCurrentTime}>Click Here</button>
        </>
    )
}

export default ExactTime;