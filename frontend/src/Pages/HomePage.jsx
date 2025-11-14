// src/pages/HomePage.jsx
import React from 'react';
import Section from '../components/Section';
import ToolCard from '../components/ToolCard';

// Datos de las herramientas para el componente ToolCard
const toolsData = [
	{
		title: 'A. Gestión de proyectos',
		tools: ['Jira', 'Trello', 'Asana', 'Azure DevOps'],
	},
	{
		title: 'B. Control de versiones',
		tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
	},
	{
		title: 'C. Desarrollo y programación',
		tools: [
			'Visual Studio Code',
			'JetBrains (IntelliJ, etc.)',
			'Visual Studio',
			'Eclipse',
		],
	},
	{ title: 'D. Comunicación', tools: ['Slack', 'Discord', 'Microsoft Teams'] },
	{
		title: 'E. Bases de datos',
		tools: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
	},
	{
		title: 'F. Pruebas (Testing)',
		tools: ['Selenium', 'JUnit', 'Jest', 'Postman'],
	},
	{
		title: 'G. Diseño y arquitectura',
		tools: ['Draw.io', 'Figma', 'Lucidchart', 'Enterprise Architect'],
	},
	{
		title: 'H. DevOps y despliegue',
		tools: [
			'Docker',
			'Kubernetes',
			'AWS/Azure/Google Cloud',
			'GitHub Actions',
			'Jenkins',
		],
	},
];

const HomePage = () => {
	return (
		<div className="container mx-auto max-w-5xl p-6 mt-8">
			<h1 className="text-4xl font-extrabold text-center mb-12 text-teal-900">
				Página Informativa: Ingeniería de Software
			</h1>

			{/* Sección 1: Qué es */}
			<Section title="1. ¿Qué es la Ingeniería de Software?">
				<p>
					Es una disciplina que aplica principios científicos, matemáticos y de ingeniería
					en el diseño, desarrollo, implementación y mantenimiento de software.
				</p>
				<p>
					Su objetivo principal es crear sistemas confiables, escalables, seguros y de
					alta calidad que satisfagan las necesidades de los usuarios. Se ocupa tanto de
					los aspectos técnicos como de los procesos y la gestión.
				</p>
			</Section>

			{/* Sección 2: Cómo y cuándo surgió */}
			<Section title="2. ¿Cómo y cuándo surgió?">
				<p>
					Surgió como respuesta a la "Crisis del Software" en los 60s y 70s, cuando los
					proyectos enfrentaban:
				</p>
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>Retrasos enormes en los proyectos.</li>
					<li>Software muy costoso.</li>
					<li>Productos finales defectuosos o inutilizables.</li>
					<li>Malas prácticas de programación.</li>
				</ul>
				<h3 className="text-2xl font-semibold mt-6 mb-3">Línea temporal</h3>
				<ul className="list-decimal list-inside ml-4 space-y-2">
					<li>
						<b>1950s:</b> Programación artesanal.
					</li>
					<li>
						<b>1968:</b> Se acuña el término "Software Engineering" en la conferencia de
						la OTAN.
					</li>
					<li>
						<b>1970s:</b> Nacen modelos como Waterfall (Cascada).
					</li>
					<li>
						<b>2001:</b> Surge el Manifiesto Ágil.
					</li>
					<li>
						<b>Actualidad:</b> DevOps, IA y metodologías híbridas.
					</li>
				</ul>
			</Section>

			{/* Sección 3: Objetivos */}
			<Section title="3. Objetivos de la Ingeniería de Software">
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>Mejorar la calidad del software.</li>
					<li>Reducir costos y tiempos de desarrollo.</li>
					<li>Facilitar el mantenimiento y la escalabilidad.</li>
					<li>Minimizar errores y riesgos.</li>
					<li>Garantizar que el software cumpla con las necesidades del cliente.</li>
				</ul>
			</Section>

			{/* Sección 4: Áreas Principales */}
			<Section title="4. Áreas principales">
				<ol className="list-decimal list-inside ml-4 space-y-2">
					<li>Análisis de requisitos</li>
					<li>Diseño de software</li>
					<li>Desarrollo y codificación</li>
					<li>Pruebas (Testing)</li>
					<li>Mantenimiento</li>
					<li>Gestión de proyectos</li>
					<li>Aseguramiento de la calidad (QA)</li>
					<li>DevOps y operaciones</li>
				</ol>
			</Section>

			{/* Sección 5: Herramientas */}
			<Section title="5. Herramientas utilizadas">
				<p>La disciplina usa herramientas según la etapa de desarrollo.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
					{toolsData.map((category) => (
						<ToolCard
							key={category.title}
							title={category.title}
							tools={category.tools}
						/>
					))}
				</div>
			</Section>

			{/* Sección 6: Metodologías */}
			<Section title="6. Metodologías de desarrollo">
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>
						<b>Cascada (Waterfall):</b> Modelo secuencial tradicional.
					</li>
					<li>
						<b>Ágil:</b> Incluye Scrum, Kanban, XP.
					</li>
					<li>
						<b>Incremental/Iterativo:</b> Construcción por módulos.
					</li>
					<li>
						<b>DevOps:</b> Integración entre desarrollo y operaciones.
					</li>
				</ul>
			</Section>

			{/* Sección 7: Importancia */}
			<Section title="7. Importancia">
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>Reduce los riesgos técnicos.</li>
					<li>Permite trabajar en equipos grandes de forma organizada.</li>
					<li>Garantiza productos confiables.</li>
					<li>Permite resolver problemas complejos del mundo real.</li>
				</ul>
			</Section>

			{/* Sección 8: Ejemplos */}
			<Section title="8. Ejemplos de aplicaciones">
				<ul className="list-disc list-inside ml-4 space-y-2">
					<li>Redes sociales</li>
					<li>Sistemas bancarios</li>
					<li>Aplicaciones móviles</li>
					<li>Inteligencia artificial</li>
					<li>Videostreaming</li>
				</ul>
			</Section>

			{/* Sección 9: Conclusión */}
			<Section title="9. Conclusión">
				<p>
					La ingeniería de software es fundamental en la era digital. Gracias a ella, se
					construyen sistemas complejos y confiables que impactan todos los aspectos de la
					vida moderna.
				</p>
			</Section>
		</div>
	);
};

export default HomePage;
