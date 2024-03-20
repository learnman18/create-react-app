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
        if(userFields.userPassword.length < 8  || userFields.userPassword.length > 20 ){
            err.userPassword = "Password should be more than 8 char and less than 20 char";
        }else if(!PasswordValidation(userFields.userPassword)){
            err.userPassword = <>
                <ul>
                    <li>Uppercase is must</li>
                    <li>Lowercase is must</li>
                    <li>Numerss are must</li>
                    <li>Specail char is must</li>
                    <li>Alphabate is must</li>
                </ul>
            </>
        }
        setErrors(err);
        // console.log("err" , err);
    }

    function NameValidation(name){
        const nameRegex = /^[^0-9]*$/;
        return nameRegex.test(name);
    }

    function EmailValidation(email){
        const nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;;
        return nameRegex.test(email);
    }

    function PasswordValidation(password){
        const passwordRegex = /^[0-9a-zA-Z\@$%&*!_+-=#%^.,?{}()|:;\/]+$/;
        return passwordRegex.test(password);
    }

    const UserInfoSubmission = (event) => {
        event.preventDefault();
        if(validateForm()){
            console.log("form submitted");
        }else {
            console.log('Form validation failed');
          }
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
                <form className="contact" onSubmit={UserInfoSubmission}>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="name"  name='userName' onChange={userInput}/>
                            {errors.userName && <span style={{color:"red"}}>{errors.userName}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="email" name='userEmail' onChange={userInput}/>
                            {errors.userEmail && <span style={{color:"red"}}>{errors.userEmail}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Password</label>
                        <div className="col-sm-3">
                            <div className="passwordMainCls">
                                <input type="password" className="form-control" id="mobile" name='userPassword' onChange={userInput}/>
                                <span className="password-toggle-icon" tabIndex="0" id="eyeIconClick" onClick={PasswordVisiblity}><i className="fas fa-eye"></i></span>
                            </div>
                            {errors.userPassword && <span style={{color:"red"}}>{errors.userPassword}</span>}
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