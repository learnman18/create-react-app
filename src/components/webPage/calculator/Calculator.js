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
            console.log("event added");
            currentLists.addEventListener("click" , iterateListItem);
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
        setInputVal((prevState) => [...prevState, event.target.innerText]);
      
        const regExOperator = /^[\/+\-=.*]+$/;
        let operators = [];
        let operands = [];
        let currentNumber = '';
      
        // Iterate through inputVal to separate operators and operands
        for (let i = 0; i < inputVal.length; i++) {
          const char = inputVal[i];
          console.log("char" , char);
          if (regExOperator.test(char)) {
            //it checks if we have entered any speical char if it has it will push the char in operands, and if it has number first it will go to the else part
            // If we encounter an operator, add the currentNumber to operands
            let convertToNum = currentNumber.replace(/[^0-9]/g, '')
            let toNumOP = convertToNum.split('').map(Number)
            let caculateOP = toNumOP.reduce(function (accum, digit) {
                return (accum * 10) + digit
            }, 0);
            operands.push(caculateOP);
            currentNumber = '';
            operators.push(char);
          } else {
            // If it's a digit, build the currentNumber
            currentNumber = currentNumber +  char;
          }
        }
      
        // Add the last number to operands
        let convertToNum = currentNumber.replace(/[^0-9]/g, '')
            let toNumOP = convertToNum.split('').map(Number)
            let caculateOP = toNumOP.reduce(function (accum, digit) {
                return (accum * 10) + digit
            }, 0);
        operands.push(caculateOP);
      
        console.log("Operators:", operators);
        console.log("Operands:", operands);
      
        // Perform calculations based on operators and operands
        let result = operands[0];
      
        for (let i = 0; i < operators.length; i++) {
          const operator = operators[i];
          const operand = operands[i + 1];
      
          switch (operator) {
            case '*':
              result *= operand;
              break;
            case '+':
              result += operand;
              break;
            case '/':
              result /= operand;
              break;
            case '-':
              result -= operand;
              break;
            default:
              break;
          }
        }
      
        setOutput(result);
      };


      
    return(
        <>
            <div className="mainCls py-5" style={{width:"20rem"}}>
                <div style={{height:90}} className={`border border-${borderClr}`}>
                    {/* <input className={`preview border border-${borderClr}`} type="text"
                     value={inputVal && inputVal.join('')} readOnly/> */}
                     <p style={{marginBottom: 0}}
                     value={inputVal && inputVal.join('')}>{inputVal && inputVal.join('').replace(/\*+/g, "*").replace(/=+/g, "=").replace(/\++/g, "+").replace(/\-+/g, "-").replace(/\/+/g, "/")}</p>
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