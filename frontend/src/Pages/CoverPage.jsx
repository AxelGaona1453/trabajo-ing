// src/pages/CoverPage.jsx

import { motion } from "framer-motion";

const CoverPage = () => {
  return (
    <div className="container mx-auto max-w-2xl p-6 mt-8 text-center">
      <motion.div
        whileHover={{ rotate: 2, scale: 1.03, y: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-teal-300/50 cursor-pointer select-none transform duration-300"
      >
        {/* Simulación del logo IPF */}
        <div className="w-32 h-32 bg-gradient-to-br from-teal-700 to-cyan-600 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-white shadow-xl">
          <span className="text-white text-5xl font-extrabold tracking-widest drop-shadow-lg">
            IPF
          </span>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 drop-shadow-sm">
          Entrevista Ingeniería de Software
        </h1>
        <p className="text-xl text-gray-600 mb-6 font-medium">Fecha: 14/11</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold text-teal-700 mb-3 underline decoration-teal-400">
              Profesores:
            </h2>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>Silvia Hoferek</li>
              <li>Monica Ines Galeano</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold text-teal-700 mb-3 underline decoration-teal-400">
              Alumnos:
            </h2>
            <ul className="space-y-1 text-gray-700 font-medium">
              <li>Ramírez Luana Abigail</li>
              <li>Lautaro Ayala</li>
              <li>Fariña Eric</li>
              <li>Gaona Axel</li>
              <li>Silvera Matías</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverPage;
