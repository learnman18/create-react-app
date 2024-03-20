import React, { useState } from "react";
import "../../../App.css";

const ContactUsDemo = () => {

    const [userFields , setUserFields] = useState({
        userName:"" ,
        userEmail:"",
        userPassword:""
    });
    const [errors , setErrors] = useState({});
    
    const userInput = (event) => {
        const {name , value} = event.target;
        setUserFields({...userFields , [name] : value})
    }


    const validateForm = () => {
        const err = {}
        if(!userFields.userName){
            err.userName="User's Name is required";
            console.log(errors.userName)
        }else if(!NameValidation(userFields.userName)){
            err.userName="Name can't have numbers"
        }
        if(!userFields.userEmail){
            err.userEmail="User's Email is required";
            console.log(errors.userEmail)
        }else if(!EmailValidation(userFields.userEmail)){
            err.userEmail = "email format is wrong";
        }
        if(!userFields.userPassword){
            err.userPassword="Password is required";
            console.log(errors.userPassword)
        }
        setErrors(err);
        console.log("err" , err);
    }

    function NameValidation(name){
        const nameRegex = /^[^0-9]*$/;
        return nameRegex.test(name);
    }

    function EmailValidation(email){
        const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
        return nameRegex.test(email);
    }

    const UserInfoSubmission = (event) => {
        event.preventDefault();
        console.log("form submitted");
        validateForm();
    }

    function PasswordVisiblity() {
        const password = document.querySelector("#mobile");
        const type = password.getAttribute("type");
        if(type === "password"){
            password.setAttribute("type" , "text"); 
            console.log(password);
        }else if(type === "text"){
            password.setAttribute("type" , "password"); 
            console.log(password);
        }
    }

    // const eyeIcon = document.getElementById("eyeIconClick");
    // eyeIcon.onkeydown((e)=>{
    //     if ((e.keyCode || e.which) == 13){
    //         PasswordVisiblity();
    //     }
    // })

    return(
        <>
            <div>
                <form className="row contact" onSubmit={UserInfoSubmission}>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="name"  name='userName' onChange={userInput}/>
                            {errors.userName && <span>{errors.userName}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="email" name='userEmail' onChange={userInput}/>
                            {errors.userEmail && <span>{errors.userEmail}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Password</label>
                        <div className="col-sm-3 passwordMainCls">
                            <input type="password" className="form-control" id="mobile" name='userPassword' onChange={userInput}/>
                            <span className="password-toggle-icon" tabIndex="0" id="eyeIconClick" onClick={PasswordVisiblity}><i className="fas fa-eye"></i></span>
                            {errors.userPassword && <span>{errors.userPassword}</span>}
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>    
            </div>
        </>
    )
}

export default ContactUsDemo;