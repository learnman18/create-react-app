import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { NavLink, Link, Outlet } from "react-router-dom";
import './Menu.css';

const Menu = () =>{

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="col-8">
                            <Link to='/home' className="navbar-brand" style={{color:'inherit !important'}}>Navbar</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse col-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" 
                                    to='/home' >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/services' >Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to='/about'>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/contact' >Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Menu;