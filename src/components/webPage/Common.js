import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../imgs/hero-img.png'

const Common = (props) => {
    return(
        <>
            <section id="hero" className="d-flex align-items-center">

            <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <h1>{props.title}</h1>
                <h2>{props.desc}</h2>
                <div className="d-flex justify-content-center justify-content-lg-start">
                    <Link to={props.btnLink} className="btn-get-started scrollto">{props.buttonName}</Link>
                </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <img src={heroImg} className="img-fluid animated" alt="hero" />
                </div>
            </div>
            </div>

            </section>
        </>
    )
}

export default Common;