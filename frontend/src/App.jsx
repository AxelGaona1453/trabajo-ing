// src/App.jsx
import { Route, Routes } from 'react-router';
import CoverPage from './/Pages/CoverPage';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import QuizPage from './pages/QuizPage'; // <-- IMPORT NUEVO

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="credits" element={<CoverPage />} />
				<Route path="quiz" element={<QuizPage />} /> {/* <-- RUTA NUEVA */}
			</Route>
		</Routes>
	);
}

export default App;
