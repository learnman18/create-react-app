import React from "react";


function MiniCalculation(){

    return(
        <React.Fragment>
            <h3>Addition of two Numbers {Addition(4,4)}</h3>
            <h3>Subtraction of two Numbers {Subtract(4,4)}</h3>
            <h3>Multiplication of two Numbers {Multiply(4,4)}</h3>
            <h3>Divison of two Numbers {Divide(31,3).toFixed(2)}</h3>

        </React.Fragment>
    )
}

export default MiniCalculation;

function Addition(a,b){
    return a+b;
}
function Subtract(a,b){
    return a-b;
}
function Multiply(a,b){
    return a*b;
}
function Divide(a,b){
    return a/b;
}

export {Addition, Subtract , Multiply, Divide};