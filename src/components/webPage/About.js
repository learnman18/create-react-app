import React, { Component } from "react";
// import Common from "./Common";
import News from "./ClassComp/News";
// import NewsCategory from "./ClassComp/NewsCategory";
import { Outlet, NavLink } from "react-router-dom";


//this About and News component both of them are getting called from App.js , all the Newss categories created are child comp of about.js

class About extends Component {

    render(){
        return(
            <>
                {/* <NewsCategory></NewsCategory> */}
                     
                <div className="container-fluid">
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">General</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="business">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="health">Health</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="science">Science</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="sports">Sports</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="technology">Technology</NavLink>
                        </li>
                    </ul>
                    {window.location.pathname === "/about" && <News></News> }
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