import React, { useState } from "react";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
import Notes from "./Notes";
import './notes.css'


const TheApp = ()=>{

    const [addItem , setAddItem] = useState([]);

    const AddNotes = (notes)=>{
        console.log("data getting from notes on theApp.js file" , notes); 
        setAddItem((oldValues)=>{
            console.log('old values ', oldValues);
                    return [...oldValues , notes]
        })
    }
    console.log("add item", addItem)

    //itemIdtoDelete is coming from the props we haave passed.
    const deleteItem = (itemIdtoDelete)=>{
        const newAddItem = addItem.filter((item , i) =>{
            console.log("deleted Item" , i , itemIdtoDelete , i !== itemIdtoDelete);
            return i !== itemIdtoDelete
        })
        setAddItem(newAddItem)
    }

    return(
        <>
            <Header></Header>
            <CreateNotes test={AddNotes}></CreateNotes>
            <br /><br />
            <div className="added-Notes">
                {
                    addItem.map((curVal , i)=>{
                        console.log("curVal" , curVal);
                        if(curVal.Title !== "" && curVal.Content !== ""){
                            return <Notes key={i} id={i} 
                                    title={curVal.Title} content={curVal.Content} 
                                    handleDelete={()=>deleteItem(i)}></Notes>
                        }else{
                            return null;
                        }
                    })
                }
            </div>
        </>
    )
}

export default TheApp;