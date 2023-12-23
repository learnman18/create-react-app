import React, { useState } from "react";

//here we are using useState for each and every form fields

const FormOne = () =>{

    const [updatedVal, setUpdatedVal] = useState();
    const [NameUpdatedVal, setNameUpdatedVal] = useState();
    const [lastName ,setLastName] = useState();
    const [lastNameUpdatedVal ,setLastNameUpdatedVal] = useState();

    const InputChange = (event) =>{
        // console.log(event.target.value);
        setUpdatedVal(event.target.value);
    }

    const LastNameInputChange = (event)=>{
        setLastName(event.target.value);
        // console.log("last name" , event.target.value)
    }

    const SubmitBasicInfo = (event) =>{
        event.preventDefault();
        setNameUpdatedVal(updatedVal);
        setLastNameUpdatedVal(lastName);

    }

    return(
        <>
            <form onSubmit={SubmitBasicInfo}>
                <h1>Hello {NameUpdatedVal} {lastNameUpdatedVal}</h1>
                <input type="text" placeholder="enter your name" onChange={InputChange}/>
                <input type="text" placeholder="enter your last name" onChange={LastNameInputChange}/>
                <button type="submit">Click here</button>
            </form>
        </>
    )
}

export default FormOne;