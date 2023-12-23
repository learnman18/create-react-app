import React from "react";
// import Common from "./Common";
import MyWeatherApp from "./MyWeather";
import MyToDoList from "./NewToDoApp/ToDoCURD";
import PracticeOne from "./practices/Practice1";

const Home = () => {

    return(
        <>
            {/* <Common
                title="This is Home page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common> */}
            <MyWeatherApp></MyWeatherApp>
            <MyToDoList></MyToDoList>
            <PracticeOne></PracticeOne>
        </>
    )
}

export default Home;