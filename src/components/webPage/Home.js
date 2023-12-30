import React, {useEffect, useState} from "react";
// import Common from "./Common";
import MyWeatherApp from "./MyWeather";
import MyToDoList from "./NewToDoApp/ToDoCURD";
import PracticeOne from "./practices/Practice1";


const Home = () => {

    const [borderChng , setBorderChng] = useState("dark");
    const initialVal = document.body.style.color;
    // console.log("color" + initialVal)

    useEffect(()=>{
        setBorderChng(initialVal === "black" ? "dark" : "light");
    },[initialVal])
    

    return(
        <>
            {/* <Common
                title="This is Home page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common> */}
            <div className="row">
                <div className="col-md-6">
                    <MyWeatherApp borderClr={borderChng}></MyWeatherApp>
                </div>
                <div className="col-md-6">
                    <MyToDoList borderClr={borderChng}></MyToDoList>
                </div>
            </div>
            <PracticeOne></PracticeOne>
        </>
    )
}

export default Home;