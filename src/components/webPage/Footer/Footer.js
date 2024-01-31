import React from "react";
import { Link } from "react-router-dom";
import "../Header/Menu.css"

export default function Footer () {

    const footerYear = new Date();
    const getCurYear = footerYear.getFullYear();

    return(
        <React.Fragment>
            {/* <div className="b-example-divider"></div> */}
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/" className="px-2">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="px-2">About</Link></li>
                    </ul>
                    <p className="text-center">©{getCurYear} Company, Inc</p>
                </footer>
            </div>
        </React.Fragment>
    )
}