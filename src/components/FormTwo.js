import React, { useState } from "react";

//here we are using only one useState for multiple form fields

const FormTwo = () =>{

    const [fullName , setFullName] = useState({
        fname :'',
        lname :'',
        email :'',
        phone :''
    });

    const InputChangeEvnt = (event) =>{
        // console.log(event.target.value);
        // console.log(event.target.name);

        const storedName = event.target.name;
        const storedValue = event.target.value;

        //below line is destructuring of above two line of code
        //const {storedName , storedValue} = event.target; 

        setFullName((previousValue)=>{
            console.log(previousValue);
            //previousValue is state parameter to display what was the value before we updated with storedValue
            //so basically we are updating the values of object property using setFullname, and if want to check what was the value of those properties before we update it we are using previousValue para.
            console.log("previous fname" ,fullName.fname , "||" , previousValue.fname)
            if(storedName === "firstName"){
                return{
                    fname : storedValue,
                    lname : previousValue.lname,
                    email : previousValue.email,
                    phone : previousValue.phone
                }
                    
            }else if(storedName === "lastName"){
                return{
                    fname : previousValue.fname,
                    lname : storedValue,
                    email : previousValue.email,
                    phone : previousValue.phone
                }
            }else if(storedName === "email"){
                return{
                    fname : previousValue.fname,
                    lname : previousValue.lname,
                    email : storedValue,
                    phone : previousValue.phone
                }
            }else if(storedName === "mobile"){
                return{
                    fname : previousValue.fname,
                    lname : previousValue.lname,
                    email : previousValue.email,
                    phone : storedValue
                }
            }
       
        })

    }


    const SubmitDetails = (event) =>{
        event.preventDefault();
        alert("form is submitted")
    }

    return(
        <>
            <div className="logFormCls">
            
                <form  onSubmit={SubmitDetails}>

                    <h1>Hello, {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.email}</p>
                    <p style={{paddingBottom:10}}>{fullName.phone}</p>

                    <div className="logFormFields">

                        <div>
                            <input type="text" placeholder="enter your name" name="firstName" value={fullName.fname} onChange={InputChangeEvnt}/>
                        </div>
                        <div>
                            <input type="text" placeholder="enter your last name" name="lastName" onChange={InputChangeEvnt}/>
                        </div>
                        <div>
                            <input type="email" placeholder="enter your email" name="email" onChange={InputChangeEvnt}/>
                        </div>
                        <div>
                            <input type="number" placeholder="enter your Mobile number" name="mobile" onChange={InputChangeEvnt}/>
                        </div>
                        <div>
                            <button type="submit" className="button">Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </>
    )

}

export default FormTwo;