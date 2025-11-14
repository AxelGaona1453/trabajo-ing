// src/components/Section.jsx
import React from 'react';

const Section = ({ title, children }) => {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-teal-500">
				{title}
			</h2>
			<div className="text-gray-700 text-lg leading-relaxed space-y-4">{children}</div>
		</section>
	);
};

export default Section;
