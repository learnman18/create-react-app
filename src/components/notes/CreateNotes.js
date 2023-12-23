import React, { useState } from "react";

const CreateNotes = (props)=>{

    const [notes , setNotes] = useState({
        Title:'',
        Content:''
    })

    const inputChngEvent = (event)=>{
        // console.log(event.target.value);
        const {name , value} = event.target

        setNotes((previouValues)=>{
            // console.log("prvous value" , previouValues);
            return {...previouValues , [name] : value}
        })
        console.log(notes)

    }

    const AddItToNotes = ()=>{
        props.test(notes);
         /*passing notes as object parameter so it can be access on TheApp.js page, 
        notes has all the values we have entered in title and content field.*/
        setNotes({
            Title:'',
            Content:''
        })
       
    }

    return(
        <>
            <div className="parentNotes">
                <input type="text" placeholder="Enter Title" 
                onChange={inputChngEvent} name="Title" value={notes.Title}/>
                <textarea row="" placeholder="write something..."
                onChange={inputChngEvent} name="Content" value={notes.Content}></textarea>
                <button onClick={AddItToNotes}>Plus Icon</button>
            </div>
        </>
    )
}

export default CreateNotes;