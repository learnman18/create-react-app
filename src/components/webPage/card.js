import React from "react";
import { Link } from "react-router-dom";


/* 
I can pass access this props by using props.courseBtn and so on, 
by passing props in funciton Cards = (props)=>{} and then access it using props.courseDesc
but here I have destructre it so I won't have to use props keyword all the time.
*/
const Cards = ({courseBtn , courseDesc , courseImg , courseName}) => {
    return(
        <>
        <div className="col-md-4 d-flex align-items-stretch">
            <div className="card me-3 mb-5" >
                <div>
                    <img style={{height:220}} src={courseImg} className="card-img-top img-fluid" alt="..."v/>
                </div>
                <div className="card-body d-flex flex-column">
                    <h3>{courseName}</h3>
                    <p className="card-text">{courseDesc}</p>
                    <Link to={courseBtn} className="btn btn-primary align-self-start mt-auto">Read More</Link>                    
                </div>
            </div>
            </div>
        </>
    )
}

export default Cards;