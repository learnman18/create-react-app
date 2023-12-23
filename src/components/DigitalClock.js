import React, { useState } from "react";



const DigitalClock = () =>{

    let newTime = new Date().toLocaleTimeString();
    const [curTime , setCurTime] = useState(newTime);

    const UpdateTime = () =>{
        let newTime = new Date().toLocaleTimeString();
        setCurTime(newTime);
    }
    
    setInterval(UpdateTime , 1000)

    return(
        <>
            <h1 className="digitalClock" style={{fontSize:70}}>{curTime}</h1>
        </>
    )
}

export default DigitalClock;