import React, { useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';

export default function Test() {
    const [result, setResult] = useState('');

    const [questions, setQuestions] = useState([
        {
            question: "Jaké jsou základní druhy živností",
            answers: ["Volné, koncesované", "Prosté, Náročné", "Náročné, ohlašovací", "Ohlašovací, koncesované"],
            selectedAnswer: null,
            correctAnswer: 3
        },
        {
            question: "Co vyžaduje živnost řemeslného typu?",
            answers: ["splnění všeobecných podmínek a zvláštních podmínek", "nic", "bezúhonnost a svéprávnost"],
            selectedAnswer: null,
            correctAnswer: 0
        },
        {
            question: "Které oblasti patří mezi řemeslné živnosti?",
            answers: ["Řeznictví a uzenářství", "velkoobchod a maloobchod"],
            selectedAnswer: null,
            correctAnswer: 0
        },
        {
            question: "K čemu slouží nižší management?",
            answers: ["ke tvoření plánu na další rok", "sestavování taktických plánů", "k operativnímu plánování"],
            selectedAnswer: null,
            correctAnswer: 2
        },
        {
            question: "Kdo spadá do středního managementu?",
            answers: ["ke tvoření taktických plánů", "zástupce ředitele", "k operativnímu plánování"],
            selectedAnswer: null,
            correctAnswer: 1
        },
        {
            question: "Jaké jsou hlavní úkoly vrcholového managementu?",
            answers: ["ke tvoření taktických plánů", "rozhodování, kdo dnes zastoupí nemocného skladníka", "Vytváření strategických plánů"],
            selectedAnswer: null,
            correctAnswer: 2
        },
        // Add more questions as needed...
    ]);

    function calculateSuccessRate(correctAnswers, totalQuestions) {
        return (correctAnswers / totalQuestions) * 100;
    }

    function handleAnswerSelection(questionIndex, answerIndex) {
        const updatedQuestions = [...questions];
        updatedQuestions[questionIndex].selectedAnswer = answerIndex;
        setResult('');

        setQuestions(updatedQuestions);
    }

    function submitForm() {
        let correctAnswers = 0;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].selectedAnswer === questions[i].correctAnswer) {
                correctAnswers++;
            }
        }

        const totalQuestions = questions.length;
        const successRate = calculateSuccessRate(correctAnswers, totalQuestions);

        setResult(`Úspěšnost: ${successRate.toFixed(2)}%`);
    }

    return (
        <div>
            <Header />
            <section class="max-w-screen-2xl p-3 m-auto min-h-90vh">
                <div id="formContainer">
                    <form id="quizForm">
                        {questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="question-container m-6">
                                <p class="text-xl mb-1">{question.question}</p>
                                {question.answers.map((answer, answerIndex) => (
                                    <div key={answerIndex} className="answer-container">
                                        <input
                                            type="radio"
                                            id={`answer-${questionIndex}-${answerIndex}`}
                                            name={`question-${questionIndex}`}
                                            checked={question.selectedAnswer === answerIndex}
                                            onChange={() => handleAnswerSelection(questionIndex, answerIndex)}
                                        />
                                        <label class="ml-1" htmlFor={`answer-${questionIndex}-${answerIndex}`}>{answer}</label>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <button class="w-min p-2 my-4 bg-cstmGreen text-white" type="button" onClick={submitForm}>Odeslat</button>
                    </form>
                </div>
                <div class="w-fit bg-cstmGreen text-white p-2" id="result">Zde uvidíte Váš výsledek: {result}</div>
            </section>
            <Footer />
        </div>
    );
};


