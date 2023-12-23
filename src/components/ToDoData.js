import React from "react";

const ToDoData = (props)=>{

    return(
        <>
            {/* <span onClick={props.selectFun(props.id)}>X</span> */}
            
            <li>
                <i className="fa fa-window-close" onClick={()=>{
                        props.selectFun(props.id)
                    }}></i>
                <span>{props.curList}</span>
            </li>
        </>
    )
}


export default ToDoData;