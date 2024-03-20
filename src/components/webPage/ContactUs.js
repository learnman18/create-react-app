import React, { useState } from "react";
import ContactUsDemo from "./practices/ContactDemo";

const ContactUs = () => {

    // const [fields , setFields] = useState({
    //     name : '',
    //     email : ''
    // });


    // const inputChange = (event) => {
    //     const {name , value} = event.target;
    //     console.log(name , value);
    //     setFields((previousValue)=>{
    //         return{
    //             ...previousValue , [name] : value
    //         }
    //     })    

    // }

    // const subDetails = (event) => {
    //     event.preventDefault();
    //     if(fields.name ==="" || fields.email === ""){
    //         console.log("its empty");
    //         alert("Please enter something")
    //         return false;
    //     }else{
    //         alert(`My Name : ${fields.name}  \nMy Email : ${fields.email}` )
    //     // alert("My Name is :" + fields.name + "\nMy Email is :" + fields.email)
    //     }
    // }

    return(
        <>
            {/* <div className="">
                <form className="contact" onSubmit={subDetails}>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" value={fields.name} name='name' onChange={inputChange}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" value={fields.email} name='email' onChange={inputChange}/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>    
            </div> */}
            <ContactUsDemo></ContactUsDemo>
        </>
    )
}

export default ContactUs;