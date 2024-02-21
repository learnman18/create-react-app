import React from "react";

export default function PageLoaderCard({title , description , junoImg , dateCreated , compIndex}){
    return(
        <>
            <div className="card mb-3 me-4" style={{maxWidth: 540}} key={compIndex} id={compIndex}>
                <div className="row">
                    <div className="col-md-4 ps-0">
                        <img src={junoImg} className="img-fluid rounded-start h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">{dateCreated}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}