import React from "react";

function Greets(){
    //year, month, day, hours, minutes, seconds
    let curTime = new Date(2023, 11, 7, 13);
    // let curTime = new Date();
    curTime = curTime.getHours();
    var curMsg;
    var msgStyle = {} // empty object to apply css on on every message
    console.log(curTime)


    if(curTime >= 13 && curTime <= 19){
        curMsg = "Good Afternoon";
        msgStyle.color="orange";
    }else if(curTime >= 20 && curTime <= 23.59){
        curMsg = "Good Night"
        msgStyle.color="black";
    }else if(curTime >= 1 && curTime <= 12){
        curMsg = "Good Morning"
        msgStyle.color="green";

    }

    return(
        <>
            <div className="msgGreeting">
                <h1>Hello , <span style={msgStyle}>{curMsg}</span></h1>
            </div>
        </>
    )
}

export default Greets;
