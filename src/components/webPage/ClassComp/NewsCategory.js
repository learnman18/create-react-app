import React, {Component} from "react";
import { Link } from "react-router-dom";

//this is just demo, I haven't used it, navbar could be find in about.js file

class NewsCategory extends Component{

    render(){
        return(
            <>
                <h4>Read News based on category</h4>

                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link" to="">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>     
            </>
        )
    }
}

export default NewsCategory