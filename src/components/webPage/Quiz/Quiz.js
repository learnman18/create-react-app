import React, { useEffect, useState } from "react";
import quizData from './QuizQuestions'


export default function Quiz() {

    const [selectedVal , setSelectedVal] = useState([])
    const [currentSlide , setCurrentSlide] = useState(0);
    //setting it 0 because map indexing start from 0 however I can do index + 1 in map fun, but It's better.

    const getOptionsFromLocal = () => {
        let x = localStorage.getItem("selectedValue");
        if(x){
            return setSelectedVal(JSON.parse(x))
        }
    }

    // const setOptionsFromLocal = (qstns) => {
    //     localStorage.setItem("selectedValue" , JSON.stringify(qstns))
    // }

    useEffect(()=>{
        getOptionsFromLocal();
    },[])

    useEffect(()=>{
        localStorage.setItem("selectedValue" , JSON.stringify(selectedVal))
    },[selectedVal])

    
    const selectRadio = (event) => {
        const selectedOption = event.target.value;
        const index = currentSlide;
        setSelectedVal((oldSelection)=> {
            const updatedValue = [...oldSelection];
            updatedValue[index] = selectedOption;
            console.log(updatedValue);
            return updatedValue;
        })
    }
      

    const NextQuestion = () => {
        setCurrentSlide(currentSlide === quizData.length - 1 ? 0 : currentSlide + 1)
        // console.log(currentSlide)
    }

    const PreviousQuestion = () => {
        setCurrentSlide(currentSlide === 0 ? quizData.length - 1 : currentSlide - 1)
        // console.log(currentSlide);
    }

    const submitAllQuestios = () => {
        let confirmation = window.confirm("are you sure you want to submit");
        if(confirmation){
            console.log(quizData[0].answer)
            console.log(confirmation);
        } else {
            console.log(confirmation)
        }
    }

    return(
        <>
            <h3 className="text-center py-3">Quiz page</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 questionsParent">
                        {
                            quizData.map((currentQstn ,  index) => {
                                // console.log("index",index) //indexing starts from zero
                                return(
                                <div key={index} id={index} className={`questionsQuiz ${index === currentSlide ? "d-block" : "d-none"}`}>
                                    <p><span className="pe-1">{currentSlide + 1}.</span>{currentQstn.question}</p>
                                    <div className="answers ps-2">
                                        <ol>
                                            <li className="ps-2 qstn" style={{listStyle:"devanagari"}}>
                                                <p className="options"><input tabIndex="0" type="radio" name={`quiz${index}`} value="option1" onChange={selectRadio}/>
                                                <span className="ps-1">{currentQstn.optionOne}</span></p>
                                            </li>
                                            <li className="ps-2 qstn" style={{listStyle:"devanagari"}}>
                                                <p className="options"><input tabIndex="0" type="radio" name={`quiz${index}`} value="option2" onChange={selectRadio}/>
                                                <span className="ps-1">{currentQstn.optionTwo}</span></p>
                                            </li>
                                            <li className="ps-2 qstn" style={{listStyle:"devanagari"}}>
                                                <p className="options"><input tabIndex="0" type="radio" name={`quiz${index}`} value="option3" onChange={selectRadio}/>
                                                <span className="ps-1">{currentQstn.optionThree}</span></p>
                                            </li>
                                            <li className="ps-2 qstn" style={{listStyle:"devanagari"}}>
                                                <p className="options"><input tabIndex="0" type="radio" name={`quiz${index}`} value="option4" onChange={selectRadio}/>
                                                <span className="ps-1">{currentQstn.optionFour}</span></p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className="quizBtns text-end">
                            { 
                                <>
                                <button className="btn btn-primary me-4" onClick={PreviousQuestion}>Previous</button>
                                { currentSlide < quizData.length-1 ? <button className="btn btn-primary" onClick={NextQuestion}>Next</button>
                                    : <button className="btn btn-primary" onClick={submitAllQuestios}>Submit</button>
                                }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
