import React, {useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';
// import { ReactDOM } from 'react';
import './App.css';
// import SearchImg from './components/SearchImg/Search';
import Menu from './components/webPage/Header/Menu'
// import AxiosExample from './components/axios/AxiosExample';
// import TheApp from './components/notes/TheApp';
// import ExampleTwoUseEfct from './components/useEfect/ExampleTwo';
// import EffectExample from './components/useEfect/useEfct';
// import CompA from './components/createContxt/CompA';
// import Accordion from './components/accordion/Accordion';
// import AccordionTwo from './components/accordion/AccordionTwo';
// import Increment from './components/Increment';
// import ToDoList from './components/ToDoList';
// import FormTwo from './components/FormTwo';
// import FormOne from './components/FormOne';
// import DigitalClock from './components/DigitalClock';
// import ExactTime from './components/StateHook';
// import SlotMatch from './components/SlotMatch';
// import Cards from './components/MyCards';
// import Greets from './components/greets';
// import MiniCalculation, {Addition, Multiply, Subtract, Divide} from './components/MiniCal';
// import Mov from './components/MovieData';
import {Route, Routes } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import About from './components/webPage/About';
import Services from './components/webPage/Services';
import ContactUs from './components/webPage/ContactUs';
// import Home from './components/webPage/Home';
import MyWeatherApp from './components/webPage/MyWeather';
import MyToDoList from './components/webPage/NewToDoApp/ToDoCURD';
import PracticeOne from "./components/webPage/practices/Practice1";
import CurrencyExchnage from "./components/webPage/practices/CurrencyExchange";
import CurrencyExchnageTwo from "./components/webPage/practices/CurrencyExchangeTwo";
import AlertBar from "./components/webPage/practices/Alert";
import ColorPallete from "./components/webPage/practices/ColorPallete";
import Footer from './components/webPage/Footer/Footer';
import News from './components/webPage/ClassComp/News';
import Calulator from './components/webPage/calculator/Calculator';

function App() {

/* border color change variable*/
const [borderChng , setBorderChng] = useState("dark");
/* border color change variable*/

/* alert message variable*/
const [alertMsg , setAlertMsg] = useState(); //alert msg object here;
/* alert message variable*/

/* Theme script starts here */

  const initialTheme = JSON.parse(localStorage.getItem('theme')) || {
    color: "black",
    backgroundColor: "white",
  };
  const [btnName , setBtnName] = useState(initialTheme.color==="white" ? "Light Mode" : "Dark Mode");
  const [myStyle , setMyStyle] = useState(initialTheme);

  //switch to dark and light mode
  const DarkLightMode = () => {
      const newStyle = myStyle.color === "black"
      ? {color:"white" , backgroundColor:"#042743"}
      : {color:"black" , backgroundColor:"white"}

      setMyStyle(newStyle);

      setBtnName(newStyle.color==="white" ? "Light Mode" : "Dark Mode")
      // console.log(document.body.style = {myStyle});

  }

  //start- Adding CSS to document body
  useEffect(()=>{
    Object.assign(document.body.style , myStyle);
    localStorage.setItem('theme', JSON.stringify(myStyle));
  },[myStyle])

/* Theme script ends here */

/* Border color set */
useEffect(()=>{
  if(myStyle.color === "black"){
    setBorderChng("dark")
  }else{
    setBorderChng("white")
  }
},[myStyle])
/* Border color set */

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

  return (
    <>
      {/* <Link to='/'>Home</Link> | 
      <Link to='travel'>Travel</Link> */}
      <Menu BlackAndWhiteTheme={DarkLightMode} btnName={btnName}></Menu>
      <Routes>
          <Route exact path='/' element={
            <>
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
                <div className="col-md-6">
                    <ColorPallete />
                </div>
            </div>
            <AlertBar alertMsg={alertMsg}></AlertBar>
            <PracticeOne showAlert={showAlert}></PracticeOne>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Calulator borderClr={borderChng}></Calulator>
                </div>  
              </div>
            </div>
            
            </>
          }></Route>
          <Route path='about' element={<About></About>}>
            <Route path="" element={<News category="general" pageSize="9"></News>}></Route>
            <Route path="business" element={<News category="business" pageSize="9"></News>}></Route>
            <Route path="science" element={<News pageSize="9" category="science"></News>}></Route>
            <Route path="sports" element={<News pageSize="9" category="sports"></News>}></Route>
            <Route path="health" element={<News pageSize="9" category="health"></News>}></Route>
            <Route path="technology" element={<News pageSize="9" category="technology"></News>}></Route>
          </Route>
          <Route path='services' element={<Services></Services>}></Route>
          <Route path='contact' element={<ContactUs></ContactUs>}></Route>
          {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
        </Routes>
        <Footer></Footer>
    </>
  );
}

export default App;

