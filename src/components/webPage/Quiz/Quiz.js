import React, { useState } from "react";
import quizData from './QuizQuestions'

export default function Quiz() {

    const [currentSlide , setCurrentSlide] = useState(0);
    //setting it 0 because map indexing start from 0 however I can do index + 1 but It's better

    const NextQuestion = () => {
        setCurrentSlide(currentSlide === quizData.length - 1 ? 0 : currentSlide + 1)
        console.log(currentSlide)
    }

    const PreviousQuestion = () => {
        setCurrentSlide(currentSlide === 0 ? quizData.length - 1 : currentSlide - 1)
        console.log(currentSlide)
    }

    return(
        <>
            <h5>Quiz page</h5>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 questionsParent">
                        {
                            quizData.map((currentQstn ,  index) => {
                                // console.log("index",index) //indexing starts from zero
                                return(
                                <div key={index} className={`questionsQuiz ${index === currentSlide ? "d-block" : "d-none"}`}>
                                    <ol>
                                        <li>{currentQstn.question}</li>
                                    </ol>
                                    <div className="answers ps-4">
                                        <ol>
                                            <li style={{listStyle:"devanagari"}}>
                                                <p className="options"><input type="radio" name="quiz" id="" /><span>{currentQstn.optionOne}</span></p>
                                            </li>
                                            <li style={{listStyle:"devanagari"}}>
                                                <p className="options"><input type="radio" name="quiz" id="" /><span>{currentQstn.optionTwo}</span></p>
                                            </li>
                                            <li style={{listStyle:"devanagari"}}>
                                                <p className="options"><input type="radio" name="quiz" id="" /><span>{currentQstn.optionThree}</span></p>
                                            </li>
                                            <li style={{listStyle:"devanagari"}}>
                                                <p className="options"><input type="radio" name="quiz" id="" /><span>{currentQstn.optionFour}</span></p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                )
                            })
                        }
                        <div className="quizBtns">
                            <button className="btn btn-primary" onClick={PreviousQuestion}>Previous</button>
                            <button className="btn btn-primary" onClick={NextQuestion}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
