import React, {useEffect, useState} from "react";
// import Common from "./Common";
import MyWeatherApp from "./MyWeather";
import MyToDoList from "./NewToDoApp/ToDoCURD";
import PracticeOne from "./practices/Practice1";
import CurrencyExchnage from "./practices/CurrencyExchange";
import CurrencyExchnageTwo from "./practices/CurrencyExchangeTwo";
import AlertBar from "./practices/Alert";


const Home = () => {

    const [borderChng , setBorderChng] = useState("dark");
    const initialVal = document.body.style.color;
    // console.log("color" + initialVal)
    const [alertMsg , setAlertMsg] = useState(); //alert msg object here;

    useEffect(()=>{
        setBorderChng(initialVal === "black" ? "dark" : "light");
    },[initialVal])
    

    //showAlert we are passint it to child comps i.e practic1 and AlertBar comps.
    const showAlert = (textMessage , type) => {
        setAlertMsg({
            message : textMessage,
            type : type
        })
        setTimeout(()=>{
            setAlertMsg(null)
        },3000)
    }

    return(
        <>
            {/* <Common
                title="This is Home page"
                desc="We are team of talented designers making websites"
                buttonName="Get Started"
                btnLink = "/services"
            ></Common> */}
            <div className="row">
                <div className="col-md-4">
                    <MyWeatherApp borderClr={borderChng}></MyWeatherApp>
                </div>
                <div className="col-md-4">
                    <MyToDoList borderClr={borderChng}></MyToDoList>
                </div>
                <div className="col-md-4">
                    <CurrencyExchnageTwo borderClr={borderChng}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <CurrencyExchnage borderClr={borderChng}/>
                </div>
            </div>
            <AlertBar alertMsg={alertMsg}></AlertBar>
            <PracticeOne showAlert={showAlert}></PracticeOne>
        </>
    )
}

export default Home;