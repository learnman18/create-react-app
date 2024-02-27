import React from "react";

export default function PageLoaderCard({title , description , junoImg , dateCreated , compIndex}){

    const slicedDescription = description.slice(0,130);

    const descriptionNewTab = () => {
        window.open(`/juno/junoDesc/${encodeURIComponent(description)}/${title}`, "_blank");
    };    

    return(
        <>
            <div className="card mb-3 me-4" style={{maxWidth: 540}} id={compIndex}>
                <div className="row align-items-stretch">
                    <div className="col-md-4 ps-0">
                        <img src={junoImg} className="img-fluid rounded-start" style={{height:"199px",width:"176px"}} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{slicedDescription}
                                <span onClick={descriptionNewTab} style={{textDecoration:"none",color:"blue",cursor:"pointer"}}>
                                    {slicedDescription.length >= 130 ? "...Read More" : ""}
                                </span>
                                {/* <Link to={`/juno/junoDesc/${description}`} target="_blank">...Read More</Link> */}
                            </p>
                            <p className="card-text"><small className="text-body-secondary">{dateCreated}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}