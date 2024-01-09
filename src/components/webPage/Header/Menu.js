import React, {useState} from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { NavLink, Link, Outlet } from "react-router-dom";
import '../Header/Menu.css'


const Menu = (props) =>{

    const [isNavItemVisible, setNavItemVisibility] = useState(false);
    
//For mobile navbar collapse on item select
    const handleNavItemClick = () => {
        console.log(isNavItemVisible)
        isNavItemVisible ? setNavItemVisibility(false) : setNavItemVisibility(true)
    };

    return(
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="col-8 d-flex align-items-center">
                            <Link to='/' className="navbar-brand" style={{color:'inherit !important'}}>Navbar</Link>
                            <div className="">
                                <button onClick={()=>{
                                    props.BlackAndWhiteTheme();
                                }}>{props.btnName}</button>
                            </div>
                        </div>
                        <button onClick={handleNavItemClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse col-4 ${isNavItemVisible ? 'show' :'' }`} id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" onClick={handleNavItemClick}>
                                    <NavLink className="nav-link" 
                                    to='/' >Home</NavLink>
                                </li>
                                <li className="nav-item" onClick={handleNavItemClick}>
                                    <NavLink className="nav-link" to='/services' >Services</NavLink>
                                </li>
                                <li className="nav-item" onClick={handleNavItemClick}>
                                    <NavLink className="nav-link"  to='/about'>About</NavLink>
                                </li>
                                <li className="nav-item" onClick={handleNavItemClick}>
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