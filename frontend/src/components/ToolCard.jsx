// src/components/ToolCard.jsx
import React from 'react';

// Un componente para mostrar cada categoría de herramientas
const ToolCard = ({ title, tools }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
			<h3 className="text-xl font-semibold text-teal-700 mb-3">{title}</h3>
			<ul className="list-disc list-inside space-y-1 text-gray-600">
				{tools.map((tool) => (
					<li key={tool}>{tool}</li>
				))}
			</ul>
		</div>
	);
};

export default ToolCard;
