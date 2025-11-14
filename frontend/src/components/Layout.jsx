// src/components/Layout.jsx
import { Outlet } from 'react-router';
import Header from './Header';

const Layout = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<Header />
			<main>
				<Outlet /> {/* Aquí se renderizarán HomePage o CoverPage */}
			</main>
			<footer className="text-center p-4 mt-12 bg-gray-800 text-white">
				Instituto Politécnico Formosa - 2025
			</footer>
		</div>
	);
};

export default Layout;
