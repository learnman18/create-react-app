import React from "react";
import Common from "./Common";

const About = () => {
    return(
        <>
            <Common
                title="This is About page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common>
        </>
    )
}

export default About;