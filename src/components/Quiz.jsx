import { useState, useEffect, useMemo } from "react";
import { createQuizEngine } from "../core/quiz";

export default function Quiz({ theme }) {
  const [quizData, setQuizData] = useState(null);

  // Carrega o tema via JSON
  useEffect(() => {
    fetch(`/themes/${theme}.json`)
      .then(res => res.json())
      .then(data => setQuizData(data));
  }, [theme]);

  // Cria a engine genérica com o quizData
  const quiz = useMemo(() => quizData ? createQuizEngine(quizData) : null, [quizData]);

  const [, force] = useState(0); // Para forçar rerender
  const rerender = () => force(n => n + 1);

  if (!quizData || !quiz) return <div>Carregando quiz...</div>;

  // Quando o quiz termina
  if (quiz.isFinished()) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">{quiz.getResultText()}</h2>
      </div>
    );
  }

  // Pergunta atual
  const q = quiz.getCurrentQuestion();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">{q.question}</h2>
      <div className="mt-4 space-y-2">
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => { quiz.answer(opt.trait); rerender(); }}
          >
            {opt.text}
          </button>
        ))}
      </div>
      <p className="mt-2 text-gray-500">
        Pergunta {quiz.getProgress().current} de {quiz.getProgress().total}
      </p>
    </div>
  );
}
