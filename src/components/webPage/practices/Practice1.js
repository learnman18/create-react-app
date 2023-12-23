import React, { useState } from "react";

export default function PracticeOne() {

    const [text , setText] = useState();

    const UpperCase = () => {
        setText(text.toUpperCase());
    }

    const LowerCase = () => {
        setText(text.toLowerCase());
    }

    const ClearText = () => {
        setText("");
    }

    return(
        <div className="container my-5">
            <h3>Enter some text</h3>
            <div>
                <textarea className="form-control" value={text} placeholder="Leave a comment here" rows="6" 
                onChange={(event)=>{
                    console.log(event.target.value);
                    setText(event.target.value);
                }}></textarea>
                <div className="my-3">
                    <button className="btn btn-primary me-3" onClick={UpperCase}>Upper Case</button>
                    <button className="btn btn-primary me-3" onClick={LowerCase}>Lower Case</button>
                    <button className="btn btn-primary" onClick={ClearText}>Clear Text</button>
                </div>
             </div>
             <div>
                <h4>Your Text Summary</h4>
                {
                text ? <p> {text.split(/\s/).length} words and {text.length} Characters </p> : 
                <p> 0 words and 0 Characters</p>
                }
             </div>
             <div>
                <h4>Preview</h4>
                <p>{text}</p>
             </div>
        </div>
    )
}