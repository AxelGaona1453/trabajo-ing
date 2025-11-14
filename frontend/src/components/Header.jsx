// src/components/Header.jsx
import { Link } from 'react-router';

const Header = () => {
	return (
		<header className="bg-teal-800 text-white p-6 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">Instituto Politécnico Formosa</h1>
				<nav className="space-x-4">
					<Link to="/" className="text-lg hover:underline">
						Inicio
					</Link>
					<Link to="/credits" className="text-lg hover:underline">
						Créditos
					</Link>
					{/* --- LÍNEA NUEVA --- */}
					<Link
						to="/quiz"
						className="text-lg hover:underline font-semibold text-yellow-300"
					>
						Quiz
					</Link>
					{/* --- FIN LÍNEA NUEVA --- */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
