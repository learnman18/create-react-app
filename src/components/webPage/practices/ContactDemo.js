import React, { useRef, useState } from "react";
import "../../webPage/practices/Practice.css"
import emailjs from "emailjs-com";

const ContactUsDemo = () => {

    const form = useRef();
    const [userFields , setUserFields] = useState({
        userName:"" ,
        userEmail:"",
        userPassword:"",
        userMessage:""
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
                    <li>Numbers are must</li>
                    <li>Special char is must</li>
                </ul>
            </>
        }
        setErrors(err);
        console.log("keys" , Object.keys(err))
        return Object.keys(err).length === 0; //is used to check if there are any errors present in the errors object
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
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
        return passwordRegex.test(password);
    }

    const UserInfoSubmission = (event) => {
        event.preventDefault();
        if(validateForm()){
            alert("form has been submitted succesfully")
            emailjs.sendForm('service_4r5vwgi', 'template_cf196pm', form.current, 'yxCRFaE732YWUqTOm',)
            .then(() => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
                console.log('SUCCESS!');
            }, (error) => {
                console.log(error.text);
            });
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

  /* password visible icon on enter button press it should display the password */  
    window.onload = function(){
        const eyeIcon = document.getElementById("eyeIconClick");
        eyeIcon.onkeydown = function(e){myFun(e)}
    }

    function myFun(e){
        if ((e.keyCode || e.which) === 13){
            console.log("keydown")
            PasswordVisiblity();
        }
    }

    return(
        <>
            <div className="container">
                <form className="contact" ref={form} onSubmit={UserInfoSubmission}>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="name"  name='userName' onChange={userInput}/>
                            {errors.userName && <span style={{color:"red",fontSize:"13px"}}>{errors.userName}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="email" name='userEmail' onChange={userInput}/>
                            {errors.userEmail && <span style={{color:"red",fontSize:"13px"}}>{errors.userEmail}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Password</label>
                        <div className="col-sm-3">
                            <div className="passwordMainCls">
                                <input type="password" className="form-control" id="mobile" name='userPassword' onChange={userInput}/>
                                <span className="password-toggle-icon" tabIndex="0" id="eyeIconClick" onClick={PasswordVisiblity}>
                                    <i className="fas fa-eye"></i>
                                </span>
                            </div>
                            {errors.userPassword && <span style={{color:"red",fontSize:"13px"}}>{errors.userPassword}</span>}
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Message</label>
                        <div className="col-sm-3">
                            <textarea className="form-control" id="message" name='userMessage' onChange={userInput}/>
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