
import React, { useState } from "react";
import questions from "../public/questions.json";
import "../public/FAQ.css"



function FAQcard() {

    const [states, setStates] = useState(Array(questions.length).fill(false))

    function handleClick(index) {

        const updatedStates = [...states]



        updatedStates.forEach((state, i) => {
            if (state != updatedStates[index]) {
                updatedStates[i] = false
            }
        })


        updatedStates[index] = !updatedStates[index]
        setStates(updatedStates)


    }


    console.log(states)
    return (
        <div className="FAQ col-lg-6 px-1  p-0 overflow-hidden">
            {questions.map((question, index) => (
                <div className="FAQcard container" key={index}>
                    <div className="question row col d-flex align-items-center py-3 ">
                        <h3 className="fw-bolder col-10 fs-5">{question.question}</h3>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button className="question-btn" onClick={() => handleClick(index)}>
                                {states[index] ?
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M9 12l6 0"></path>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                        <path d="M9 12h6"></path>
                                        <path d="M12 9v6"></path>
                                    </svg>
                                }

                            </button>
                        </div>


                    </div>
                    <div className={`answer col ${states[index] ? "active" : ""}`}>
                        <p>{question.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FAQcard;
