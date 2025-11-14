// src/components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
// --- IMPORTAMOS LA IMAGEN ---
import logo from '../assets/logo.png';
// --- FIN IMPORTACIÓN ---

const navLinks = [
	{ name: 'Inicio', path: '/' },
	{ name: 'Créditos', path: '/credits' },
	{ name: 'Quiz', path: '/quiz' },
];

const Header = () => {
	return (
		<header className="bg-teal-800 text-white p-6 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				{/* --- REEMPLAZAMOS EL H1 POR LA IMAGEN --- */}
				<div className="flex items-center">
					<img
						src={logo}
						alt="Instituto Politécnico Formosa Logo"
						className="h-10 mr-3"
					/>{' '}
					{/* Ajusta el 'h-10' si quieres que sea más grande o más chico */}
					<span className="text-2xl font-bold">Instituto Politécnico Formosa</span>{' '}
					{/* Mantenemos el texto para accesibilidad y si el logo no carga */}
				</div>
				{/* --- FIN REEMPLAZO --- */}

				<nav>
					<ul className="flex space-x-2">
						{navLinks.map((link) => (
							<li key={link.path} className="relative">
								<NavLink to={link.path} end={link.path === '/'}>
									{({ isActive }) => (
										<>
											{!isActive && (
												<span className="block text-lg font-medium rounded-[20px] px-4 py-2 text-teal-100 bg-teal-700 transition-colors duration-200 hover:bg-teal-600">
													{link.name}
												</span>
											)}

											{isActive && (
												<span className="block text-lg font-medium rounded-[20px] px-4 py-2 text-gray-900">
													<span className="relative z-10">{link.name}</span>
													<motion.span
														layoutId="active-highlight"
														className="absolute inset-0 bg-green-500 rounded-[20px] z-0"
														transition={{
															type: 'spring',
															stiffness: 350,
															damping: 30,
														}}
													/>
												</span>
											)}
										</>
									)}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
