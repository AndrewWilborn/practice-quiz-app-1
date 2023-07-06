import { useState } from "react";
import Card from "./Card";
import Result from "./Result"
import data from "../../data/quiz.json";
import "./QuizApp.css";

export default function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    }

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score+1);
        }


        if(currentQuestion < data.length-1){
            setCurrentQuestion(currentQuestion+1);
        } else {
            setShowResult(true);
        }
    }

    return (
        <>
            <h2>Quiz App</h2>
            {showResult
                ? <Result 
                    data={data}
                    score={score}
                    handleRestart={handleRestart}
                />
                :<Card 
                    data={data}
                    currentQuestion={currentQuestion}
                    handleAnswer={handleAnswer}
                />
            }   
        </>
    )
}