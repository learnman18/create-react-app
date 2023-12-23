import React from "react";
import { Link, Outlet } from "react-router-dom";

const Travel = (props) =>{
    return(
        <>
            <div>
                <Link to='child-one'>Child One</Link>
                <h1>Hello, This is {props.pageName} Page</h1>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Travel;