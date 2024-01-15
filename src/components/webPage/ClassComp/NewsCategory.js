import React, {Component} from "react";
import { Link } from "react-router-dom";

class NewsCategory extends Component{

    render(){
        return(
            <>
                <h4>Read News based on category</h4>

                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClassName="active" to="/business">Business</Link>
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