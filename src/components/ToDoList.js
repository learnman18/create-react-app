import React, { useState } from "react";
import ToDoData from "./ToDoData";

const ToDoList = ()=>{

    const [toDoItem , setToDoItem] = useState();
    const [addToDo , setAddToDo] = useState([]);

    const ToDoInputField =(event)=>{
        // console.log(event.target.value);
        setToDoItem(event.target.value)    
    }
    const addToDoList = ()=>{
        setAddToDo((oldItems)=>{
            // console.log(oldItems);
            if(toDoItem === ""){
                return [...oldItems]
            }else {
                return [...oldItems , toDoItem];
            }
        })
        setToDoItem("");
    }
    
    //we are getting this id from the props we have passed below in <ToDoData> comp
    //and that id is getting used in the function selectFun in the ToDoData> comp

    const removeToDoItem = (id) =>{
        // console.log({addToDo});
        console.log("id " ,id)
        setAddToDo((oldItems)=>{
            return oldItems.filter((arrElem , index)=>{
                return index !== id;
            })
        })
    }

    return(
        <>
            <div className="toDoListMain">
                <div className="toDoList">
                    <div className="headerPart">
                        <h1>To DO List</h1>
                        <input type="text" placeholder="enter item name" value={toDoItem} onChange={ToDoInputField}/>
                        <button onClick={addToDoList}>+</button>
                    </div>
                    <div className="emptyDiv">
                        <ol>
                                {
                                    addToDo.map((currentItem , index) => {
                                        // return (<li>{currentItem}</li>) //can be written in this way too

                                        //here we are calling other comp and passing props into it
                                        return <ToDoData curList={currentItem} 
                                        key={index} id={index} 
                                        selectFun={removeToDoItem}>
                                        </ToDoData>
                                    })
                                }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList;