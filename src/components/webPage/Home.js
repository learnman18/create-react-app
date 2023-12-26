import React, { useEffect, useState } from "react";
// import Common from "./Common";
import MyWeatherApp from "./MyWeather";
import MyToDoList from "./NewToDoApp/ToDoCURD";
import PracticeOne from "./practices/Practice1";

const Home = () => {

    const [borderChng , setBorderChng] = useState({
        // color:""
    });

    console.log("bgCOlor " + document.body.style.backgroundColor);

    useEffect(()=>{
        const bgColor = document.body.style;
        if(bgColor.backgroundColor === "white"){
            setBorderChng({
                borderColor:"blue"
                // color:"red"
            })

        }else{
            setBorderChng({
                // color:"blue"
                borderColor:"red"
            })
        }

    },[])

    return(
        <>
            {/* <Common
                title="This is Home page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common> */}
            <MyWeatherApp borderClr={borderChng}></MyWeatherApp>
            <MyToDoList borderClr={borderChng}></MyToDoList>
            <PracticeOne></PracticeOne>
        </>
    )
}

export default Home;