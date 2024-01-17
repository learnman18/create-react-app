import React, { useEffect, useState } from "react";
import "./calculator.css"

export default function Calulator({borderClr}){

    const [inputVal , setInputVal] = useState([]);
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
            removeEvents();
        }

        list.forEach((currentLists)=>{
            currentLists.addEventListener("click" , iterateListItem)
        })

        // Cleanup previous event listeners
        /*this is to cleanup the already clicked event listener before we add any more listener into it
        */
        const removeEvents =  () => {
            console.log("event removed")
            list.forEach((currentLists)=>{
                currentLists.removeEventListener("click" , iterateListItem);
            })
        }
    },[list])

    const Backspace = () => {
        setInputVal((prevState)=>{
            let updateTheState = inputVal.pop();
            return [...prevState , updateTheState];
        })
    }


    return(
        <>
            <div className="mainCls py-5" style={{width:"20rem"}}>
                <div>
                    <input className={`preview border border-${borderClr}`} type="text"
                     value={inputVal && inputVal.join('')} readOnly/>
                </div>
                <div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li id="" className="list-group-item">%</li>
                            <li onClick={()=>{setInputVal("")}} className="list-group-item">CE</li>
                            <li onClick={()=>{setInputVal("")}} className="list-group-item">C</li>
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
                            <li id="multiply" className="list-group-item">&#9734;</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">1️</li>
                            <li className="calcList list-group-item">2️</li>
                            <li className="calcList list-group-item">3️</li>
                            <li id="subtract" className="list-group-item">➖</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">.</li>
                            <li className="calcList list-group-item">0️</li>
                            <li id="addition" className="calcList list-group-item">➕</li>
                            <li id="conclude" className="list-group-item">🟰</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}