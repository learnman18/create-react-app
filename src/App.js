import React, {useEffect,useState} from 'react';
// import { Link } from 'react-router-dom';
// import { ReactDOM } from 'react';
import './App.css';
// import SearchImg from './components/SearchImg/Search';
import Menu from './components/webPage/Menu'
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
import { Navigate } from "react-router-dom";
import About from './components/webPage/About';
import Services from './components/webPage/Services';
import ContactUs from './components/webPage/ContactUs';
import Home from './components/webPage/Home';


function App() {

  const initialTheme = JSON.parse(localStorage.getItem('theme')) || {
    color: "black",
    backgroundColor: "white",
  };
  const [btnName , setBtnName] = useState(initialTheme.color==="white" ? "Light Mode" : "Dark Mode");
  const [myStyle , setMyStyle] = useState(initialTheme);

  //switch to dark and light mode

  const DarkLightMode = () => {
      const newStyle = myStyle.color === "black"
      ? {color:"white" , backgroundColor:"black"}
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

  return (
    <>
      {/* <Link to='/'>Home</Link> | 
      <Link to='travel'>Travel</Link> */}
      <Menu BlackAndWhiteTheme={DarkLightMode} btnName={btnName}></Menu>
      <Routes>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='services' element={<Services></Services>}></Route>
          <Route path='contact' element={<ContactUs></ContactUs>}></Route>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    </>
  );
}

export default App;

