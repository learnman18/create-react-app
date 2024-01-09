import React, { Component } from "react";
import Common from "./Common";
import News from "./ClassComp/News";

class About extends Component {

    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row mx-4 my-4">
                        <News></News>
                    </div>
                </div>
                <Common
                    title="This is About page"
                    desc="We are team of talented designers making websites"
                    buttonName="Get Started"
                    btnLink = "/services"
                ></Common>
            </>
        )
    }
}

export default About;