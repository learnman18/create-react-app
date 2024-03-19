import React, { useState } from "react";

const ContactUsDemo = () => {

    const [userFields , setUserFields] = useState({
        userName:"" ,
        userEmail:"",
        userNumber:""
    });
    
    const userInput = (event) => {
        const {name , value} = event.target;
        setUserFields({...userFields , [name] : value})
    }


    const UserInfoSubmission = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <div>
                <form className="row contact" onSubmit={UserInfoSubmission}>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="name"  name='userName' onChange={userInput}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="email" name='userEmail' onChange={userInput}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label  className="col-sm-1 col-form-label">Mobile</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control"id="mobile" name='userNumber' onChange={userInput}/>
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