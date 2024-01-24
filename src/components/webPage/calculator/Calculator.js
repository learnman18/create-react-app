import React, { useEffect, useState } from "react";
import "./calculator.css"

//this eslint will disable the warnign messages we get.
/* eslint-disable */ 

export default function Calulator({borderClr , bgClr}){

    const [inputVal , setInputVal] = useState([]);
    const [output , setOutput] = useState([]);
    const list = document.querySelectorAll(".calcList");

    useEffect(()=>{
        /*querySelectorAll(".mainCls ul li") returns list of node not a single element or single node ,
        so we have loop through all to apply the css. in current example we have around 15 to 20 node list
        */
        let allList = document.querySelectorAll(".mainCls ul li");
        allList.forEach((currentColor) => {
            bgClr.color === "black" ? currentColor.classList.add("bgDefault") : currentColor.classList.remove("bgDefault")
        })
    },[bgClr])

    //read calcNotes.txt

    //TO display the clicked number side by side.
    useEffect(()=>{

        const iterateListItem = (event) => {
            console.log("event" , event.target.innerText);
            //useState function variable stores the previous state by default
            setInputVal((prevState)=>{
                return [...prevState , event.target.innerText]
            })

            setOutput((prevVal)=>{
                return [...prevVal , event.target.innerText]
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
        setOutput([]);
        let equalSign = inputVal.lastIndexOf("=")
        if(equalSign !== -1){
            inputVal.pop()
        }
    }

    const Addition = (event) => {
        Multiplication(event);
    }

    const Divide = (event)=> {
        Multiplication(event);
    }

    const Subtract = (event)=> {
        Multiplication(event);
    }


    const Conclude = (event) => {
        setInputVal((prevState)=>{
            console.log("conclude" , prevState);
            return [...prevState , event.target.innerText];
        })

        /*when we want to check the index of array values by looping thorugh it and return the first element that passes a test*/
        let regExOperator = /^[\/+\-=.*]+$/;
        let indexOfMultiply = inputVal.findIndex(val => regExOperator.test(val));
        
        // Check if regExOperator exists in the array
        if (indexOfMultiply !== -1) {
            // Split the array into two parts
            const partBeforeMultiply = inputVal.slice(0, indexOfMultiply); // Elements before "*"
            const partAfterMultiply = inputVal.slice(indexOfMultiply + 1); // Elements after "*"
        

            console.log("original array" , inputVal);

            let remSpecialChar = partBeforeMultiply.join('').replace(/[^0-9]/g, ''); //regex is if any char is entered apart from digits will be replaced with no space ''(2nd param of replace) or we can say filtering out special chars.
            console.log("after replacing" , remSpecialChar);
            let toNumArray = remSpecialChar.split('').map(Number);
            console.log("split it and typecasted to number", toNumArray);
            let calculate = toNumArray.reduce(function (accum, digit) {
                return (accum * 10) + digit
            }, 0);


            let convertToNum = partAfterMultiply.join('').replace(/[^0-9]/g, '')
            let toNumOP = convertToNum.split('').map(Number)
            let caculateOP = toNumOP.reduce(function (accum, digit) {
                return (accum * 10) + digit
            }, 0);
            console.log("calculate" , calculate)
            console.log("current value output" , caculateOP);

            if(inputVal.includes("*")){
                let multiplicationResult = calculate * caculateOP;
                console.log("Multiplication" , multiplicationResult)
                setOutput(multiplicationResult)
            }else if(inputVal.includes("+")){
                let additionResult = calculate + caculateOP;
                console.log("Addition" , additionResult)
                setOutput(additionResult)
            }else if(inputVal.includes("/")){
                let additionResult = calculate / caculateOP;
                console.log("divison" , additionResult)
                setOutput(additionResult)
            }else if(inputVal.includes("-")){
                let additionResult = calculate - caculateOP;
                console.log("subtraction" , additionResult)
                setOutput(additionResult)
            }


            // Now you have two separate arrays
            console.log("Part before *:", partBeforeMultiply);
            console.log("Part after *:", partAfterMultiply);
        } else {
            // If "*" is not found, handle accordingly
            console.log("No * operator found in the array");
        }


        
    }

    

    return(
        <>
            <div className="mainCls py-5" style={{width:"20rem"}}>
                <div className={`border border-${borderClr}`}>
                    {/* <input className={`preview border border-${borderClr}`} type="text"
                     value={inputVal && inputVal.join('')} readOnly/> */}
                     <p style={{marginBottom: 0}}
                     value={inputVal && inputVal.join('')}>{inputVal && inputVal.join('').replace(/\*+/g, "*").replace(/=+/g, "=").replace(/\++/g, "+")}</p>
                     <p className="preview" value={output && output}>{output && output}</p>
                </div>
                <div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li id="" className="list-group-item">%</li>
                            <li onClick={()=>{setInputVal([]);setOutput([])}} className="list-group-item">CE</li>
                            <li onClick={()=>{setInputVal([]);setOutput([])}} className="list-group-item">C</li>
                            <li onClick={Backspace} className="list-group-item">✖️</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">7️</li>
                            <li className="calcList list-group-item">8️</li>
                            <li className="calcList list-group-item">9️</li>
                            <li onClick={Divide} className="list-group-item">/</li>
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
                            <li onClick={Subtract} className="list-group-item">-</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-group list-group-horizontal">
                            <li className="calcList list-group-item">.</li>
                            <li className="calcList list-group-item">0️</li>
                            <li onClick={Addition} className="list-group-item">+</li>
                            <li onClick={Conclude} className="list-group-item">=</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}