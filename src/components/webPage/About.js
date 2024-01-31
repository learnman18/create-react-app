import React, { Component } from "react";
// import Common from "./Common";
// import NewsCategory from "./ClassComp/NewsCategory";
import { Outlet, NavLink } from "react-router-dom";


//this About and News component both of them are getting called from App.js , all the Newss categories created are child comp of about.js

class About extends Component {

    render(){
        return(
            <>
                {/* <NewsCategory></NewsCategory> */}
                 <h3 className="py-3 text-center fw-light">Pick the category you want to read</h3>    
                <div className="container-fluid">
                    <ul className="nav nav-underline newsCategory">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="general" style={{color:"unset"}}>General</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="business" style={{color:"unset"}}>Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="health" style={{color:"unset"}}>Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="science" style={{color:"unset"}}>Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="sports" style={{color:"unset"}}>Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="technology" style={{color:"unset"}}>Technology</NavLink>
                        </li>
                    </ul>
                    <Outlet></Outlet>
                </div>

                
                {/* <Common
                    title="This is About page"
                    desc="We are team of talented designers making websites"
                    buttonName="Get Started"
                    btnLink = "/services"
                ></Common> */}
            </>
        )
    }
}

export default About;