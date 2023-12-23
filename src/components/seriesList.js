import React from "react";

function SeriesList(){
    var curDate = new Date().toLocaleDateString();
    var curTime = new Date().toLocaleTimeString();
    return(
        <React.Fragment>
            <h1>Hello, My name is Manish</h1>
            <p>{`${curDate}`}</p>
            <p>{`${curTime}`}</p>
        </React.Fragment>
    )
}

export default SeriesList;
