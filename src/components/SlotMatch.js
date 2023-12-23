import React from "react";


var SlotMatch = (props)=>{
   if(props.firstName==="Manish"){
    return(
        <>
            <h1>My name is {props.firstName}</h1>
        </>
    )
   }else{
    return  <h1>{props.firstName} not my Name</h1> 
   }
}

export default SlotMatch;