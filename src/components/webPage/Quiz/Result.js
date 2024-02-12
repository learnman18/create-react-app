import React from "react";

export default function QuizResult(props) {
    return(
        <>
            <div>
                <h1>Quiz Result</h1>
            </div>
            <div className="totalCorrect">
                <h3>Total correct answers are : {props.rightAnswer}</h3>
            </div>
            <div className="totalIncorrect">
                <h3>Total incorrect ansers are : {props.wrongAnswer}</h3>
            </div>
        </>
    )
}