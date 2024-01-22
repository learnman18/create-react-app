import React, { useEffect, useState } from "react";
import "./calculator.css"

export default function Calulator({borderClr}){

    const [inputVal , setInputVal] = useState([]);
    // const [output , setOutput] = useState();
    const list = document.querySelectorAll(".calcList");

    //read calcNotes.txt

    //TO display the clicked number side by side.
    useEffect(()=>{

        const iterateListItem = (event) => {
            console.log("event" , event.target.innerText);
            //useState function variable stores the previous state by default
            setInputVal((prevState)=>{
                return [...prevState , event.target.innerText]
            })
        }

        list.forEach((currentLists)=>{
            currentLists.addEventListener("click" , iterateListItem)
        })

        // Cleanup previous event listeners
        /*this is to cleanup the already clicked event listener before we add any more listener into it
        */
        return () => {
            console.log("event removed")
            list.forEach((currentLists)=>{
                currentLists.removeEventListener("click" , iterateListItem);
            })
        }

    },[list])

    const Backspace = () => {
        setInputVal((prevState)=>{
            console.log("previous state" , prevState);
            let updateTheState = prevState.slice(0,-1);
            console.log("updated state" , updateTheState);
            return updateTheState;
        })
    }

    const Multiplication = (event) => {
        /* Previous code  */
        setInputVal((prevState)=>{
            return [...prevState , event.target.innerText];
        })
        console.log("original array" , inputVal);

        let remSpecialChar = inputVal.join('').replace(/[^0-9]/g, ''); //regex is if any char is entered apart from digits will be replaced with no space ''(2nd param of replace)
        console.log("after replacing" , remSpecialChar);
        let toNumArray = remSpecialChar.split('').map(Number);
        console.log("split it and typecasted to number", toNumArray);
        let calculate = toNumArray.reduce(function (accum, digit) {
            return (accum * 10) + digit
        }, 0);

        console.log("Total output" , calculate)
    }

    const Conclude = (event) => {
        setInputVal((prevState)=>{
            console.log("conclude" , prevState);
            return [...prevState , event.target.innerText];
        })
    }
    

    return(
        <>
            <div className="mainCls py-5" style={{width:"20rem"}}>
                <div>
                    {/* <input className={`preview border border-${borderClr}`} type="text"
                     value={inputVal && inputVal.join('')} readOnly/> */}
                     <p className={`preview border border-${borderClr}`}
                     value={inputVal && inputVal.join('')}>{inputVal && inputVal.join('').replace(/\*+/g, "*").replace(/=+/g, "=")}</p>
                </div>
                <div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li id="" className="list-group-item">%</li>
                            <li onClick={()=>{setInputVal([])}} className="list-group-item">CE</li>
                            <li onClick={()=>{setInputVal([])}} className="list-group-item">C</li>
                            <li onClick={Backspace} className="list-group-item">✖️</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">7️</li>
                            <li className="calcList list-group-item">8️</li>
                            <li className="calcList list-group-item">9️</li>
                            <li id="divide" className="list-group-item">➗</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">4️</li>
                            <li className="calcList list-group-item">5️</li>
                            <li className="calcList list-group-item">6️</li>
                            <li onClick={Multiplication} id="multiply" className="list-group-item">*</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">1️</li>
                            <li className="calcList list-group-item">2️</li>
                            <li className="calcList list-group-item">3️</li>
                            <li id="subtract" className="list-group-item">-</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">.</li>
                            <li className="calcList list-group-item">0️</li>
                            <li id="addition" className="calcList list-group-item">+</li>
                            <li onClick={Conclude} className="list-group-item">=</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}