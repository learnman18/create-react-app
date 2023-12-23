import React from "react";


function Cards(props){
 
    return(
        <>
            <div className="myCard">
                <div className="cardImg">
                    <img src={props.imgsrc} alt="Jailer"/>
                </div>
                <div className="cardDetails">
                    <p>{props.movieName}</p>
                    <a href={props.url}>View Details</a>
                </div>
            </div>
        </>
    )
}

export default Cards;