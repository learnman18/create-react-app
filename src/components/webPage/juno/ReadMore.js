import React from "react";
import { useParams } from "react-router-dom";

const ReadMore = () => {

  console.log("Read more is getting loasd")
  const {description , title} = useParams();
  /*
    //using useLocation for that we need to also use useNavigate in the pageLoaderCard.js file
    const location = useLocation();
    const {description , title} = location.state;
  */
  return (
    <div className="align-items-center justify-content-center d-flex pt-4">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{decodeURIComponent(description)}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ReadMore;
