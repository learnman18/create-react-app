import React, { useEffect, useState } from "react";

function ExampleTwoUseEfct (){

    const [titleCount , setTitleCount] = useState(0)
    useEffect(()=>{
        document.title = `total count ${titleCount}` 
    },[titleCount])

    // document.title = `total count ${titleCount}` 


    return(
        <button onClick={()=> {return setTitleCount(titleCount + 1)}}>Click Here {titleCount}</button>
    )
}

export default ExampleTwoUseEfct;