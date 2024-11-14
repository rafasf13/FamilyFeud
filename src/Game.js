import React, { useState } from "react";
import Question from "./Question";
import "./Game.css";

const questions = [
  {
    question: "¿Has tomado alcohol?",
    answers: [
      {
        displayAnswer: "Sí, lo he probado",
        typeAnswers: ["probado"],
        points: 50,
      },
      { displayAnswer: "Nunca", typeAnswers: ["no"], points: 27 },
      {
        displayAnswer: "Sí, varias veces",
        typeAnswers: ["varias"],
        points: 23,
      },
    ],
  },
  {
    question: "¿Tenés una buena relación con tus padres?",
    answers: [
      {
        displayAnswer: "Claro, nos llevamos super bien",
        typeAnswers: ["si"],
        points: 55,
      },
      {
        displayAnswer: "A veces sí, a veces no",
        typeAnswers: ["a veces"],
        points: 45,
      },
    ],
  },
  {
    question: "¿A quién acudís cuando tenés un problema?",
    answers: [
      {
        displayAnswer: "Busco a mis amigos",
        typeAnswers: ["amigos"],
        points: 46,
      },
      {
        displayAnswer: "No le cuento a nadie",
        typeAnswers: ["nadie"],
        points: 27,
      },
      {
        displayAnswer: "Hablo con alguien de mi familia",
        typeAnswers: ["familia"],
        points: 27,
      },
    ],
  },
  {
    question: "¿Has fumado cigarro / vapeado?",
    answers: [
      { displayAnswer: "No, no me interesa", typeAnswers: ["no"], points: 46 },
      {
        displayAnswer: "Sí, lo he probado",
        typeAnswers: ["probado"],
        points: 36,
      },
      {
        displayAnswer: "Sí, varias veces",
        typeAnswers: ["varias"],
        points: 18,
      },
    ],
  },
  {
    question: "¿Has consumido alguna droga?",
    answers: [
      {
        displayAnswer: "No, no me llama la atención",
        typeAnswers: ["no"],
        points: 77,
      },
      {
        displayAnswer: "Sí, me daba curiosidad",
        typeAnswers: ["probado"],
        points: 18,
      },
      { displayAnswer: "Sí, varias veces", typeAnswers: ["varias"], points: 5 },
    ],
  },
  {
    question: "¿Has tenido relaciones sexuales?",
    answers: [
      { displayAnswer: "No, aun no", typeAnswers: ["no"], points: 63 },
      {
        displayAnswer: "Sí, he tenido varias parejas sexuales",
        typeAnswers: ["varias"],
        points: 23,
      },
      {
        displayAnswer: "Sí, he tenido una pareja sexual",
        typeAnswers: ["una"],
        points: 14,
      },
    ],
  },
  {
    question: "¿Cuánto tiempo al día pasás en internet?",
    answers: [
      { displayAnswer: "Entre 6 y 8 horas", typeAnswers: ["b"], points: 63 },
      { displayAnswer: "Menos de 5 horas", typeAnswers: ["a"], points: 23 },
      { displayAnswer: "Más de 9 horas", typeAnswers: ["c"], points: 14 },
    ],
  },
  {
    question: "¿Hablás en internet con gente que no conocés en persona?",
    answers: [
      {
        displayAnswer: "No, solo gente que conozco",
        typeAnswers: ["no"],
        points: 73,
      },
      {
        displayAnswer: "Sí, con personas que me parecen interesantes",
        typeAnswers: ["si"],
        points: 27,
      },
    ],
  },
  {
    question: "¿Has sufrido bullying?",
    answers: [
      { displayAnswer: "Sí, me ha pasado", typeAnswers: ["si"], points: 64 },
      { displayAnswer: "No, nunca", typeAnswers: ["no"], points: 32 },
      { displayAnswer: "No, el bully soy yo", typeAnswers: ["yo"], points: 4 },
    ],
  },
  {
    question: "¿Estás cómod@ con tu cuerpo?",
    answers: [
      {
        displayAnswer: "Más o menos, no estoy mal",
        typeAnswers: ["meh"],
        points: 59,
      },
      { displayAnswer: "Sí, estoy cómod@", typeAnswers: ["si"], points: 23 },
      { displayAnswer: "No, para nada", typeAnswers: ["no"], points: 18 },
    ],
  },
  {
    question: "¿Has pensado hacerte daño?",
    answers: [
      { displayAnswer: "No, nunca", typeAnswers: ["no"], points: 50 },
      { displayAnswer: "Sí, lo he hecho", typeAnswers: ["hecho"], points: 27 },
      {
        displayAnswer: "Sí, lo he pensado",
        typeAnswers: ["pensado"],
        points: 23,
      },
    ],
  },
  {
    question: "¿Pensás en morir?",
    answers: [
      { displayAnswer: "No, nunca", typeAnswers: ["no"], points: 50 },
      {
        displayAnswer: "Sí, lo he pensado",
        typeAnswers: ["pensado"],
        points: 36,
      },
      {
        displayAnswer: "Sí, he intentado matarme",
        typeAnswers: ["intentado"],
        points: 14,
      },
    ],
  },
  {
    question: "¿Qué pensás de tu autoestima?",
    answers: [
      { displayAnswer: "Podría mejorar", typeAnswers: ["meh"], points: 77 },
      { displayAnswer: "Es saludable", typeAnswers: ["bien"], points: 14 },
      { displayAnswer: "Es terrible", typeAnswers: ["mal"], points: 9 },
    ],
  },
  {
    question: "¿Has estado deprimid@?",
    answers: [
      {
        displayAnswer: "Sí, en algún momento",
        typeAnswers: ["si"],
        points: 55,
      },
      { displayAnswer: "Creo que no, nunca", typeAnswers: ["no"], points: 27 },
      { displayAnswer: "Constantemente", typeAnswers: ["siempre"], points: 18 },
    ],
  },
  {
    question: "¿Creés que lo que ves en internet representa la vida real?",
    answers: [
      {
        displayAnswer: "Algunas cosas, no todo",
        typeAnswers: ["cosas"],
        points: 86,
      },
      { displayAnswer: "No, todo es falso", typeAnswers: ["no"], points: 14 },
    ],
  },
  {
    question: "¿Usás algún método anticonceptivo?",
    answers: [
      { displayAnswer: "No aplica", typeAnswers: ["na"], points: 64 },
      {
        displayAnswer: "Sí, protección ante todo",
        typeAnswers: ["si"],
        points: 36,
      },
    ],
  },
  {
    question: "¿Has recibido educación sexual? ",
    answers: [
      { displayAnswer: "Sí, en mi casa", typeAnswers: ["casa"], points: 50 },
      {
        displayAnswer:
          "No, solo sé lo que he visto en internet y lo que me cuentan",
        typeAnswers: ["no"],
        points: 32,
      },
      { displayAnswer: "Sí, en el cole", typeAnswers: ["cole"], points: 18 },
    ],
  },
  {
    question: "¿Has sido víctima de algún tipo de violencia?",
    answers: [
      { displayAnswer: "No, nunca", typeAnswers: ["no"], points: 55 },
      { displayAnswer: "Sí, me ha pasado", typeAnswers: ["si"], points: 45 },
    ],
  },
  {
    question: "¿Qué peligros creés que pasás como adolescente? ",
    answers: [
      {
        displayAnswer: "Violencia y acoso",
        typeAnswers: ["acoso"],
        points: 32,
      },
      {
        displayAnswer: "Alcohol y drogas",
        typeAnswers: ["drogas"],
        points: 23,
      },
      {
        displayAnswer: "Redes sociales y encajar",
        typeAnswers: ["encajar"],
        points: 17,
      },
      {
        displayAnswer: "Timidez y relaciones familiares difíciles",
        typeAnswers: ["familia"],
        points: 14,
      },
      {
        displayAnswer: "Depresión, autoestima y suicidio",
        typeAnswers: ["depresion"],
        points: 14,
      },
    ],
  },
  {
    question: "¿Cómo perciben los padres el cambio a la adolescencia?",
    answers: [
      { displayAnswer: "Tranquila", typeAnswers: ["tranquila"], points: 54 },
      { displayAnswer: "Difícil", typeAnswers: ["dificil"], points: 46 },
    ],
  },
  {
    question: "¿Qué cosas se interponen en tu relación con tus hijos?",
    answers: [
      {
        displayAnswer: "Diferencia de opinión y autoridad",
        typeAnswers: ["opinion"],
        points: 46,
      },
      {
        displayAnswer: "Comunicación",
        typeAnswers: ["comunicacion"],
        points: 15,
      },
      { displayAnswer: "Tecnología ", typeAnswers: ["tecnologia"], points: 15 },
      { displayAnswer: "Amistades", typeAnswers: ["amistades"], points: 15 },
      { displayAnswer: "Diferencia de edad", typeAnswers: ["edad"], points: 9 },
    ],
  },
  {
    question:
      "¿Cuáles de los siguientes son problemas que ha enfrentado tu hijo? Podés marcar todos los que apliquen.",
    answers: [
      { displayAnswer: "Depresión", typeAnswers: ["depresion"], points: 20 },
      {
        displayAnswer: "Uso del internet / contacto con extraños",
        typeAnswers: ["internet"],
        points: 20,
      },
      { displayAnswer: "Bullying", typeAnswers: ["bullying"], points: 12 },
      {
        displayAnswer: "Desordenes alimenticios",
        typeAnswers: ["alimenticios"],
        points: 12,
      },
      {
        displayAnswer: "Embarazo / conducta sexual",
        typeAnswers: ["sexo"],
        points: 8,
      },
      {
        displayAnswer: "Intentos de suicidio",
        typeAnswers: ["suicidio"],
        points: 8,
      },
      { displayAnswer: "Auto lesiones", typeAnswers: ["lesiones"], points: 8 },
      {
        displayAnswer: "Relaciones abusivas / indebidas",
        typeAnswers: ["abuso"],
        points: 4,
      },
      { displayAnswer: "Alcohol / fumado", typeAnswers: ["drogas"], points: 4 },
      {
        displayAnswer: "Ninguno de los mencionados ",
        typeAnswers: ["ninguno"],
        points: 4,
      },
    ],
  },
  {
    question:
      "¿Cómo solucionás con tus adolescentes cuando tienen un desacuerdo?",
    answers: [
      {
        displayAnswer: "Conversando",
        typeAnswers: ["conversando"],
        points: 76,
      },
      {
        displayAnswer: "Consecuencias ",
        typeAnswers: ["consecuencias"],
        points: 16,
      },
      { displayAnswer: "Regaños", typeAnswers: ["regano"], points: 8 },
    ],
  },
  {
    question:
      "¿A quién acudís vos cuando tenés algún desacuerdo con tus hijos? ¿Tenés alguien con quién hablar?",
    answers: [
      {
        displayAnswer: "Personas de confianza",
        typeAnswers: ["confianza"],
        points: 33,
      },
      { displayAnswer: "Pareja", typeAnswers: ["pareja"], points: 29 },
      { displayAnswer: "Psicóloga", typeAnswers: ["psicologa"], points: 14 },
      {
        displayAnswer: "Líder espíritual / Dios",
        typeAnswers: ["dios"],
        points: 14,
      },
      { displayAnswer: "Maestros", typeAnswers: ["maestros"], points: 5 },
      { displayAnswer: "Nadie", typeAnswers: ["nadie"], points: 5 },
    ],
  },
  {
    question: "¿Te gustaría participar de un taller para padres?",
    answers: [
      { displayAnswer: "Sí", typeAnswers: ["si"], points: 70 },
      {
        displayAnswer: "Posiblemente ",
        typeAnswers: ["meh"],
        points: 15,
      },
      { displayAnswer: "No", typeAnswers: ["no"], points: 15 },
    ],
  },
  {
    question: "¿Aprendiste algo con esto?",
    answers: [
      { displayAnswer: "Sí", typeAnswers: ["si"], points: 100 },
      {
        displayAnswer: "Obvio ",
        typeAnswers: ["obvio"],
        points: 100,
      },
      { displayAnswer: "Claro", typeAnswers: ["claro"], points: 100 },
    ],
  },
];

function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if any answer's `typeAnswers` array includes the user input (case-insensitive)
    const foundAnswer = currentQuestion.answers.find((item) =>
      item.typeAnswers.some(
        (typeAnswer) => typeAnswer.toLowerCase() === answer.toLowerCase()
      )
    );

    if (foundAnswer && !correctAnswers.includes(foundAnswer.displayAnswer)) {
      setScore(score + foundAnswer.points);
      setCorrectAnswers([...correctAnswers, foundAnswer.displayAnswer]);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setCorrectAnswers([]);
  };

  return (
    <div>
      <h2>Total: {score}</h2>
      <Question
        questionData={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        correctAnswers={correctAnswers}
      />
      {currentQuestionIndex < questions.length - 1 && (
        <button onClick={nextQuestion}>Siguiente Pregunta</button>
      )}
    </div>
  );
}

export default Game;
