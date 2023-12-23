import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './components/webPage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import About from './components/webPage/About';
import Services from './components/webPage/Services';
import ContactUs from './components/webPage/ContactUs';
// import MainRouting from './components/routing/MainRouter';
// import ErrorMsg from './components/routing/Error';
// import ChildOne from './components/routing/ChildOne';
// import Travel from './components/routing/Travel';


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("button is clicked");
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App></App>
        {/* <Routes>
          <Route path='/' element={<MainRouting />}></Route>
          <Route path='travel' element={<Travel pageName='Travel'></Travel>}>
              <Route path='child-one' element={<ChildOne />}></Route>
          </Route>
            <Route element={<ErrorMsg></ErrorMsg>}></Route>
        </Routes> */}
        <Routes>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='services' element={<Services></Services>}></Route>
          <Route path='contact' element={<ContactUs></ContactUs>}></Route>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
