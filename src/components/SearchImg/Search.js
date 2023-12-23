import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchImg = () =>{

    const [disImg , setDisImg] = useState("");

    const InputEvnt = (event) => {
        // console.log(event.target.value);
        setDisImg(event.target.value);
    }

    return(
        <React.Fragment>
            <div className="logFormCls">
                <input placeholder="search something" value={disImg} onChange={InputEvnt}/>
                <div>
                    { disImg ? <SearchResult searchedImg={disImg}></SearchResult> : null}
                    {/* if input field has some value it will display image otherwise it will pass null and won't display anything  */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default SearchImg