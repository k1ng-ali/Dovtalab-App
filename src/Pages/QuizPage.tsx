import { useEffect, useState } from "react";
import type { MainQuiz } from "../../Types/QuizType.ts";
import { OptionsButton, Button } from "../Components/UIKits.tsx";
import { loadSubjectData } from "../Utils.ts";
import { ArrowLeft, Clock5 } from "lucide-react";
import "./Styles/QuizPage.css";
import {useTranslation} from "react-i18next";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";

export function QuizPage() {
    const { subject } = useParams();
    const questions = loadSubjectData(subject || "");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(Math.floor(Math.random() * 200));
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // ⏳ время в секундах
    const {t} = useTranslation("quiz");
    const navigate = useNavigate();

    // 🎯 Обработка таймера
    useEffect(() => {
        if (isAnswered) return; // если уже ответили — не продолжаем таймер

        if (timeLeft === 0) {
            setIsAnswered(true); // время вышло — показываем правильный ответ
            setAnswers(prev => prev + 1);
            return;
        }

        const timer = setTimeout(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, isAnswered]);

    if (!questions) {
        return (
            <div className="invalid-quiz">

                <p className={"invalid-subject"}>Invalid subject: {subject}</p>
            </div>
        )
    }


    const currentQuestion: MainQuiz = questions[currentQuestionIndex];

    // 🧹 Сброс таймера и состояний на след. вопрос
    const handleNext = () => {
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(30);

        if (answers < questions.length) {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * questions.length);
            } while (nextIndex === currentQuestionIndex); // избегаем одинакового вопроса подряд

            setCurrentQuestionIndex(nextIndex);
        } else {
            alert(`Quiz complete! Score: ${score}/${questions.length}`);
        }
    };


    const handleOptionClick = (optionKey: string) => {
        if (isAnswered) return;

        setSelectedOption(optionKey);
        setIsAnswered(true);
        setAnswers(prev => prev + 1);

        if (optionKey === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };
    console.log(questions)
    if (!questions || questions.length === 0) {
        return <p>No questions found for subject "{subject}"</p>;
    }
    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <div className="back-btn-wrapper" onClick={() => navigate("/tests")}>
                    <ArrowLeft className="back-btn" />
                </div>
                <h2>{t(`topics.${subject}`)}</h2>
                <div className={`timer-wrapper ${timeLeft < 10 ? "warning" : " "}`}>
                    <Clock5 className="timer-ico" />
                    <p className="timer">{timeLeft}{t("s")}</p>
                </div>
            </div>
            <div className="quiz-body">
                <p className="question-text">
                    {currentQuestionIndex + 1}) {currentQuestion.question}
                </p>

                {Object.entries(currentQuestion.answers).map(([key, value]) => {
                    let variant: "default" | "success" | "wrong" = "default";
                    if (isAnswered) {
                        if (key === currentQuestion.correctAnswer) variant = "success";
                        else if (key === selectedOption && selectedOption !== currentQuestion.correctAnswer)
                            variant = "wrong";
                    }

                    return (
                        <div className="option-wrapper" key={key} onClick={() => handleOptionClick(key)}>
                            <OptionsButton variant={variant} option={key} text={value} />
                        </div>
                    );
                })}
            </div>

            <div className="score-wrapper">
                <p className="score">{t("score")}: {score}/{answers}</p>
            </div>

            {isAnswered && (
                <div onClick={handleNext} className="next-btn-wrapper">
                    <Button variant="blue" text={t("next-question")} className="next-btn" />
                </div>
            )}
        </div>
    );
}
