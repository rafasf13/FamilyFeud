import React, { useState } from "react";

function Question({ questionData, onAnswer, correctAnswers }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(answer);
    setAnswer("");
  };

  return (
    <div>
      <h3>{questionData.question}</h3>
      <ul>
        {questionData.answers.map((item, index) => (
          <li key={index}>
            <span
              className={
                correctAnswers.includes(item.displayAnswer) ? "revealed" : ""
              }
            >
              {correctAnswers.includes(item.displayAnswer)
                ? `${item.displayAnswer} - ${item.points}%`
                : "---"}
            </span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Introduzca su respuesta"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Question;
