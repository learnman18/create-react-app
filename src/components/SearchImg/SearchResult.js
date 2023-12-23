import React from "react";

const SearchResult = (props) => {
    
    const allImgs = `https://source.unsplash.com/random/?${props.searchedImg}`;
    console.log(allImgs);

    return(
        <>
            <img style={{height:300,width:300,marginTop:50}} src={allImgs} alt="the searched one"></img>
        </>
    )
}

export default SearchResult;