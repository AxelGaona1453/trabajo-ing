// src/pages/CoverPage.jsx

const CoverPage = () => {
	return (
		<div className="container mx-auto max-w-2xl p-6 mt-8 text-center">
			<div className="bg-white p-10 rounded-lg shadow-xl border border-gray-200">
				{/* Simulación del logo IPF */}
				<div className="w-32 h-32 bg-teal-800 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-lg">
					<span className="text-white text-5xl font-bold">IPF</span>
				</div>

				<h1 className="text-3xl font-bold text-gray-800 mb-4">
					Entrevista Ingeniería de Software [cite: 5]
				</h1>
				<p className="text-xl text-gray-600 mb-8">Fecha: 31/10 [cite: 8]</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h2 className="text-xl font-semibold text-teal-700 mb-3">
							Profesores: [cite: 1]
						</h2>
						<ul className="space-y-1 text-gray-700">
							<li>Silvia Hoferek [cite: 6]</li>
							<li>Monica Ines Galeano [cite: 7]</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-semibold text-teal-700 mb-3">
							Alumnos: [cite: 9]
						</h2>
						<ul className="space-y-1 text-gray-700">
							<li>Ramírez Luana Abigail [cite: 9]</li>
							<li>Lautaro Ayala [cite: 9]</li>
							<li>Fariña Eric [cite: 9]</li>
							<li>Gaona Axel [cite: 10]</li>
							<li>Silvera Matías [cite: 10]</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoverPage;
