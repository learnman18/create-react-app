import React, { useState } from "react";
import "../../../UndoRedo" //we import this file for undo redo or we can also add a CDN for this in index.html

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

    const RemoveExtraSpaces = () => {
        let extraSpace = text.split(/[ ]+/); //if we have more than one space
        setText(extraSpace.join(" "));
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
                    <button className="btn btn-primary me-3" onClick={ClearText}>Clear Text</button>
                    <button className="btn btn-primary me-3" onClick={RemoveExtraSpaces}>Remove extra Spaces</button>
                </div>
             </div>
            <div>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
            <div>
                <h4>Your Text Summary</h4>
                {
                text ? <p> {text.split(/\s/).length} words and {text.length} Characters </p> : 
                <p> 0 words and 0 Characters</p>
                }
            </div>
            <div className="d-flex">
                <div className="me-3">
                    <h6>Paragraphs</h6>
                    {text ? text.includes('\n') ?  <p> {text.match(/\n/g).length} </p> : <p> 0 </p> : <p> 0 </p>}
                </div>
                <div>
                    <h6>Sentence</h6>
                    {text ? text.includes('.') ?  <p> {text.match(/\./g).length} </p> : <p> 0 </p> : <p> 0 </p>}
                    {/* it has 2 condition's in it, {text ? text.includes('.'): <p> 0 </p> and the other one which is
                    nested if condition text.includes('.') ?  <p> {text.match(/\./g).length} </p> : <p> 0 </p>.
                    explain - if text is not empty it will check the nested if condition i.e text.includes('.') and if the 
                        sentence has .(dot) in it will cehck the text.match(/\./g).length and count It's length.
                        and if both the condition fails it will display 0.
                    */}
                </div>
            </div>
        </div>
    )
}