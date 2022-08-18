import React, {useState} from "react";
import '../../../styles/quiz.scss'
import questions from "../../../assets/questions"


export const JoinContest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='show-quiz'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <div>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>

                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        <div className='question-img'><img src={questions[currentQuestion].image} alt={""}/></div>

                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption: { isCorrect: boolean; answerText: string }, index) => (
                            <button key={index}
                                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
