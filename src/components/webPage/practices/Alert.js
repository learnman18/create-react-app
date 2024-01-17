import React from "react";

export default function AlertBar(props){
    return(
        <>
        {/* or we can write it using ternary operator {props.alertMsg ? <div className="container">the whole div or html</div> : null} */}
       { props.alertMsg && <div className="container">
            <div className={`alert alert-${props.alertMsg.type} alert-dismissible`}>
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <strong>{props.alertMsg.type}</strong> {props.alertMsg.message}
            </div>
        </div> }
        </>
    )
}