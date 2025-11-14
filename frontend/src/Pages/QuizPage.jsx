// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';

// --- Base de datos de preguntas (basadas en el PDF) ---
// El 'status' inicial es 'pending'. Cambia a 'correct' o 'incorrect'.
const initialQuestions = [
	{
		letter: 'A',
		question: 'Metodología de desarrollo que surge en 2001 (Manifiesto...]',
		answer: 'Ágil',
		status: 'pending',
	},
	{
		letter: 'B',
		question: 'Herramienta de control de versiones, competencia de GitHub/GitLab.',
		answer: 'Bitbucket',
		status: 'pending',
	},
	{
		letter: 'C',
		question: 'Modelo de proceso tradicional y secuencial (Modelo en...]',
		answer: 'Cascada',
		status: 'pending',
	},
	{
		letter: 'D',
		question: 'Metodología que integra Desarrollo (Dev) y Operaciones (Ops).',
		answer: 'DevOps',
		status: 'pending',
	},
	{
		letter: 'E',
		question: 'Objetivo de la Ing. de Software: crear sistemas confiables y...',
		answer: 'Escalables',
		status: 'pending',
	},
	{
		letter: 'F',
		question: 'Herramienta popular de diseño y arquitectura de interfaces.',
		answer: 'Figma',
		status: 'pending',
	},
	{
		letter: 'G',
		question: 'Sistema de control de versiones más popular del mundo.',
		answer: 'Git',
		status: 'pending',
	},
	{
		letter: 'H',
		question: 'Nombre de la categoría 5 del documento (CASE, de desarrollo, etc.).',
		answer: 'Herramientas',
		status: 'pending',
	},
	{
		letter: 'I',
		question: 'Disciplina que aplica principios científicos al desarrollo de software.',
		answer: 'Ingeniería',
		status: 'pending',
	},
	{
		letter: 'J',
		question: 'Herramienta popular de gestión de proyectos de Atlassian.',
		answer: 'Jira',
		status: 'pending',
	},
	{
		letter: 'K',
		question: 'Metodología ágil visual basada en tarjetas o tableros.',
		answer: 'Kanban',
		status: 'pending',
	},
	{
		letter: 'L',
		question: 'Herramienta de diseño y arquitectura similar a Draw.io.',
		answer: 'Lucidchart',
		status: 'pending',
	},
	{
		letter: 'M',
		question: 'Una de las áreas principales: corregir errores y mejorar el sistema.',
		answer: 'Mantenimiento',
		status: 'pending',
	},
	{
		letter: 'N',
		question:
			'Contiene la N: Conferencia donde se acuñó el término "Software Engineering" en 1968.',
		answer: 'OTAN',
		status: 'pending',
	},
	{
		letter: 'Ñ',
		question: 'Contiene la Ñ: Área principal n°2, se define la arquitectura y diagramas.',
		answer: 'Diseño',
		status: 'pending',
	},
	{
		letter: 'O',
		question: 'Herramienta de base de datos de la compañía homónima.',
		answer: 'Oracle',
		status: 'pending',
	},
	{
		letter: 'P',
		question: 'Herramienta para probar APIs (Testing de servicios).',
		answer: 'Postman',
		status: 'pending',
	},
	{
		letter: 'Q',
		question: 'Siglas en inglés para "Aseguramiento de la Calidad" (Área n°7).',
		answer: 'QA',
		status: 'pending',
	},
	{
		letter: 'R',
		question: 'Área principal n°1: entender qué necesita el cliente (Análisis de...]',
		answer: 'Requisitos',
		status: 'pending',
	},
	{
		letter: 'S',
		question: 'Metodología Ágil que se trabaja en "sprints".',
		answer: 'Scrum',
		status: 'pending',
	},
	{
		letter: 'T',
		question: 'Área principal n°4: verificar que el software funcione (Pruebas o...]',
		answer: 'Testing',
		status: 'pending',
	},
	{
		letter: 'U',
		question: 'El objetivo es crear software que satisfaga las necesidades de los...',
		answer: 'Usuarios',
		status: 'pending',
	},
	{
		letter: 'V',
		question: 'Área n°5B: se usa Git para el "Control de...".',
		answer: 'Versiones',
		status: 'pending',
	},
	{
		letter: 'W',
		question: 'Nombre en inglés del Modelo en Cascada.',
		answer: 'Waterfall',
		status: 'pending',
	},
	{
		letter: 'X',
		question: 'Metodología ágil mencionada junto a Scrum y Kanban (Siglas).',
		answer: 'XP',
		status: 'pending',
	},
	{
		letter: 'Y',
		question: 'Contiene la Y: Base de datos SQL popular y de código abierto.',
		answer: 'MySQL',
		status: 'pending',
	},
	{
		letter: 'Z',
		question: 'Contiene la Z: Plataforma de nube de Microsoft (DevOps).',
		answer: 'Azure',
		status: 'pending',
	},
];

const RoscoLetter = ({ letter, status, isActive }) => {
	let statusClass = 'bg-gray-300 text-gray-700';
	if (status === 'correct') {
		statusClass = 'bg-green-500 text-white';
	} else if (status === 'incorrect') {
		statusClass = 'bg-red-500 text-white';
	} else if (isActive) {
		statusClass = 'bg-blue-500 text-white animate-pulse';
	} else if (status === 'pending') {
		statusClass = 'bg-blue-200 text-blue-800';
	}

	return (
		<div
			className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold uppercase transition-all duration-300 ${statusClass} ${
				isActive ? 'ring-4 ring-blue-600' : ''
			}`}
		>
			{letter}
		</div>
	);
};

const QuizPage = () => {
	const [questions, setQuestions] = useState(initialQuestions);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [userInput, setUserInput] = useState('');
	const [score, setScore] = useState({ correct: 0, incorrect: 0, pending: 27 });
	const [isGameFinished, setIsGameFinished] = useState(false);

	const currentQuestion = questions[currentIndex];

	const findNextPending = (startIndex) => {
		let i = (startIndex + 1) % questions.length;
		while (i !== startIndex) {
			if (questions[i].status === 'pending') {
				return i;
			}
			i = (i + 1) % questions.length;
		}
		// Si no encuentra, revisa el actual (solo pasa si queda 1)
		if (questions[startIndex].status === 'pending') return startIndex;
		return -1; // No hay más pendientes
	};

	const checkGameEnd = () => {
		const pendingCount = questions.filter((q) => q.status === 'pending').length;
		if (pendingCount === 0) {
			setIsGameFinished(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!userInput.trim()) return;

		const isCorrect =
			userInput.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
		const newStatus = isCorrect ? 'correct' : 'incorrect';

		// Actualizar el estado de la pregunta actual
		const updatedQuestions = [...questions];
		updatedQuestions[currentIndex] = { ...currentQuestion, status: newStatus };
		setQuestions(updatedQuestions);

		// Actualizar el puntaje
		setScore((prev) => ({
			...prev,
			[newStatus]: prev[newStatus] + 1,
			pending: prev.pending - 1,
		}));

		// Mover al siguiente
		const nextIndex = findNextPending(currentIndex);
		setUserInput('');
		if (nextIndex === -1) {
			setIsGameFinished(true);
		} else {
			setCurrentIndex(nextIndex);
		}
	};

	const handlePasapalabra = () => {
		const nextIndex = findNextPending(currentIndex);
		setUserInput('');
		if (nextIndex === -1) {
			checkGameEnd(); // Revisa si justo era la última
		} else {
			setCurrentIndex(nextIndex);
		}
	};

	const handleRestart = () => {
		// Resetea los status a 'pending'
		const resetQuestions = initialQuestions.map((q) => ({ ...q, status: 'pending' }));
		setQuestions(resetQuestions);
		setCurrentIndex(0);
		setScore({ correct: 0, incorrect: 0, pending: 27 });
		setIsGameFinished(false);
		setUserInput('');
	};

	// --- Renderizado ---

	if (isGameFinished) {
		return (
			<div className="container mx-auto max-w-2xl p-6 mt-8 text-center">
				<div className="bg-white p-10 rounded-lg shadow-xl">
					<h1 className="text-3xl font-bold text-gray-800 mb-6">¡Juego Terminado!</h1>
					<div className="flex justify-around text-2xl mb-8">
						<span className="font-bold text-green-600">Aciertos: {score.correct}</span>
						<span className="font-bold text-red-600">Errores: {score.incorrect}</span>
					</div>
					<button
						onClick={handleRestart}
						className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors"
					>
						Jugar de Nuevo
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="container mx-auto max-w-4xl p-6 mt-8">
			<div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
				{/* Marcador */}
				<div className="flex justify-between items-center mb-6 border-b pb-4">
					<h1 className="text-3xl font-bold text-teal-800">Pasapalabra</h1>
					<div className="flex space-x-4 text-lg">
						<span className="font-semibold text-green-600">
							Aciertos: {score.correct}
						</span>
						<span className="font-semibold text-red-600">Errores: {score.incorrect}</span>
						<span className="font-semibold text-blue-600">
							Pendientes: {score.pending}
						</span>
					</div>
				</div>

				{/* El Rosco (en Grilla) */}
				<div className="grid grid-cols-9 gap-4 mb-8">
					{questions.map((q, index) => (
						<RoscoLetter
							key={q.letter}
							letter={q.letter}
							status={q.status}
							isActive={index === currentIndex}
						/>
					))}
				</div>

				{/* Pregunta y Formulario */}
				<div className="bg-gray-100 p-6 rounded-lg shadow-inner">
					<div className="mb-4">
						<span className="text-2xl font-bold text-blue-700 uppercase">
							{currentQuestion.letter}
						</span>
						<p className="text-xl text-gray-800 mt-2">{currentQuestion.question}</p>
					</div>
					<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							value={userInput}
							onChange={(e) => setUserInput(e.target.value)}
							className="flex-grow p-3 border-2 border-gray-300 rounded-lg text-lg text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
							placeholder="Escribí tu respuesta..."
							autoFocus
						/>
						<div className="flex gap-4">
							<button
								type="submit"
								className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
							>
								Comprobar
							</button>
							<button
								type="button"
								onClick={handlePasapalabra}
								className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow hover:bg-yellow-600 transition-colors"
							>
								Pasapalabra
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default QuizPage;
