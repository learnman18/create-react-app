import React from "react";
// import { Link } from "react-router-dom";
import AxiosExample from '../axios/AxiosExample'

const MainRouting = () =>{
    return(
        <React.Fragment>
            <AxiosExample></AxiosExample>
        </React.Fragment>
    )
}

export default MainRouting;

/* 
we can write this <Link> what we have in app.js in this file too, and what we have in index.js that
can be written in the app.js.
index.js or App.js - either of them could have the <Route> but if App.js is having the <ROute> than 
the other child comp will have the <Link>.
<Link is nothing but a <a href="">
so it means route and link can be written anywhere we just have to be sure on parents and child comp.
*/