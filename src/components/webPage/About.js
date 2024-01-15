import React, { Component } from "react";
// import Common from "./Common";
// import News from "./ClassComp/News";
// import NewsCategory from "./ClassComp/NewsCategory";
import { Outlet, NavLink } from "react-router-dom";

class About extends Component {

    render(){
        return(
            <>
                {/* <NewsCategory></NewsCategory> */}
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
                <div className="container-fluid">
                    {/* <Routes>
                        <Route path="" key="general" element={<News pageSize="9" category="general"></News>}></Route>
                        <Route path="/business" key="business" element={<News pageSize={9} category="business"></News>}></Route>
                        <Route path="science" key="science" element={<News pageSize="9" category="science"></News>}></Route>
                        <Route path="sports" key="sports" element={<News pageSize="9" category="sports"></News>}></Route>
                        <Route path="health" key="health" element={<News pageSize="9" category="health"></News>}></Route>
                        <Route path="technology" key="technology" element={<News pageSize="9" category="technology"></News>}></Route>
                    </Routes> */}
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