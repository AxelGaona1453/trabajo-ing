import React, { useRef, useEffect, useState, useCallback } from "react";
// Íconos de lucide-react (asume que están disponibles en el entorno de React)
import {
  Aperture,
  Code,
  GitBranch,
  Briefcase,
  Database,
  Package,
  ShieldCheck,
  Zap,
  MessageSquare,
  Edit,
  LayoutGrid,
  Cpu,
  Clock,
  Layers,
  TrendingUp,
} from "lucide-react";

// --- CONFIGURACIÓN DE DATOS ---
const toolsData = [
  {
    title: "A. Gestión de proyectos",
    tools: ["Jira", "Trello", "Asana", "Azure DevOps"],
    icon: Briefcase,
  },
  {
    title: "B. Control de versiones",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
    icon: GitBranch,
  },
  {
    title: "C. Desarrollo y programación",
    tools: [
      "Visual Studio Code",
      "JetBrains (IntelliJ, etc.)",
      "Visual Studio",
      "Eclipse",
    ],
    icon: Code,
  },
  {
    title: "D. Comunicación",
    tools: ["Slack", "Discord", "Microsoft Teams"],
    icon: MessageSquare,
  },
  {
    title: "E. Bases de datos",
    tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    icon: Database,
  },
  {
    title: "F. Pruebas (Testing)",
    tools: ["Selenium", "JUnit", "Jest", "Postman"],
    icon: ShieldCheck,
  },
  {
    title: "G. Diseño y arquitectura",
    tools: ["Draw.io", "Figma", "Lucidchart", "Enterprise Architect"],
    icon: LayoutGrid,
  },
  {
    title: "H. DevOps y despliegue",
    tools: [
      "Docker",
      "Kubernetes",
      "AWS/Azure/Google Cloud",
      "GitHub Actions",
      "Jenkins",
    ],
    icon: Zap,
  },
];

// --- HOOK PARA ANIMACIÓN AL SCROLL (IntersectionObserver) ---
const useAnimateOnScroll = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [domRef, isVisible];
};

// --- COMPONENTES AUXILIARES ---

// ToolCard mejorado con diseño visual
const ToolCard = ({ title, tools, Icon }) => {
  const [domRef, isVisible] = useAnimateOnScroll(0.2);

  const SafeIcon = Icon || Cpu;

  return (
    <div
      ref={domRef}
      className={`
                bg-gray-800 text-gray-100 p-6 rounded-xl shadow-2xl border-l-4 border-emerald-500 transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                hover:shadow-emerald-500/50 hover:scale-[1.03] transform transition-transform duration-300
            `}
    >
      <div className="flex items-center mb-4">
        <SafeIcon className="w-6 h-6 text-emerald-400 mr-3" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-1 text-gray-300">
        {tools.map((tool, index) => (
          <li key={index} className="flex items-center text-sm">
            <span className="text-emerald-500 mr-2 font-black">▶</span> {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Section mejorado con diseño visual y animación
const Section = ({ title, children, icon: Icon, className = "" }) => {
  const [domRef, isVisible] = useAnimateOnScroll(0.1);

  const SafeIcon = Icon || Cpu;

  return (
    <section
      ref={domRef}
      className={`
                mb-16 p-8 bg-white rounded-3xl shadow-xl transition-all duration-1000 ease-out 
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }
                md:p-10 ${className}
            `}
    >
      <div className="flex items-center mb-6 border-b pb-4 border-emerald-200">
        <SafeIcon className="w-8 h-8 text-emerald-600 mr-4" />
        <h2 className="text-3xl font-extrabold text-emerald-700 leading-tight">
          {title}
        </h2>
      </div>
      <div className="text-gray-700 space-y-4 text-lg">{children}</div>
    </section>
  );
};

// --- COMPONENTE PRINCIPAL (HomePage) ---
const HomePage = () => {
  return (
    // Contenedor principal con fondo que imita un patrón de circuito
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Encabezado Principal (Hero Section) - Usa todo el ancho */}
      <header className="py-20 bg-gray-900 text-white shadow-2xl mb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-10">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-4 tracking-tight leading-tight">
              La Disciplina que Crea el Futuro Digital
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Aplicando principios de ingeniería rigurosos para construir
              sistemas de software confiables, escalables y seguros.
            </p>
            <div className="text-green-500 font-mono text-sm"></div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="w-64 h-64 bg-emerald-700 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50">
              <Cpu className="w-32 h-32 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Contenido Principal con distribución limitada */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Sección 1: Qué es */}
        <Section title="1. ¿Qué es la Ingeniería de Software?" icon={Cpu}>
          <p>
            Es una disciplina que aplica principios científicos, matemáticos y
            de ingeniería en el **diseño, desarrollo, implementación y
            mantenimiento de software**.
          </p>
          <p>
            Su objetivo principal es crear sistemas confiables, escalables,
            seguros y de alta calidad que satisfagan las necesidades de los
            usuarios. Se ocupa tanto de los aspectos técnicos como de los
            procesos y la gestión.
          </p>
        </Section>

        {/* Sección 2: Cómo y cuándo surgió */}
        <Section title="2. ¿Cómo y cuándo surgió?" icon={Aperture}>
          <p className="mb-4 font-medium">
            Surgió como respuesta a la **"Crisis del Software"** en los 60s y
            70s, cuando los proyectos enfrentaban problemas graves:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 p-4 bg-red-50 border border-red-300 rounded-lg text-red-800 font-semibold">
            <li>Retrasos enormes en los proyectos.</li>
            <li>Software muy costoso.</li>
            <li>Productos finales defectuosos o inutilizables.</li>
            <li>Malas prácticas de programación.</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8 mb-3 text-emerald-600 border-l-4 border-emerald-500 pl-3">
            Línea temporal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 text-center">
            <TimeBox year="1950s" event="Programación artesanal" />
            <TimeBox
              year="1968"
              event="Término 'Software Engineering'"
              icon={Clock}
              highlight={true}
            />
            <TimeBox year="1970s" event="Nacen modelos como Waterfall" />
            <TimeBox
              year="2001"
              event="Surge el Manifiesto Ágil"
              icon={Layers}
              highlight={true}
            />
            <TimeBox
              year="Actualidad"
              event="DevOps, IA y metodologías híbridas"
              icon={TrendingUp}
            />
          </div>
        </Section>

        {/* Sección 3: Objetivos - Diseño distribuido en 2 columnas */}
        <Section
          title="3. Objetivos de la Ingeniería de Software"
          icon={Package}
        >
          <p className="text-center font-semibold text-emerald-700 mb-6">
            La meta es estandarizar la producción de código de calidad y
            minimizar riesgos.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                text: "Mejorar la calidad del software.",
                color: "text-emerald-600",
              },
              {
                text: "Reducir costos y tiempos de desarrollo.",
                color: "text-blue-600",
              },
              {
                text: "Facilitar el mantenimiento y la escalabilidad.",
                color: "text-purple-600",
              },
              { text: "Minimizar errores y riesgos.", color: "text-red-600" },
              {
                text: "Garantizar que el software cumpla con las necesidades del cliente.",
                color: "text-yellow-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-emerald-500"
              >
                <ShieldCheck
                  className={`w-6 h-6 ${item.color} mr-3 flex-shrink-0`}
                />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Sección 4: Áreas Principales */}
        <Section title="4. Áreas principales" icon={Edit}>
          <p>
            La ingeniería de software se divide en fases clave que garantizan el
            ciclo de vida completo del producto.
          </p>
          <ol className="list-decimal list-inside space-y-3 font-medium text-gray-700 ml-4">
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

        {/* Sección 5: Herramientas - Usa una distribución más amplia */}
        <div className="max-w-7xl mx-auto">
          <Section
            title="5. Herramientas utilizadas"
            icon={Zap}
            className="max-w-full"
          >
            <p className="mb-6 italic text-gray-600">
              La disciplina usa herramientas según la etapa de desarrollo. Estas
              son algunas de las más populares por categoría:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolsData.map((category) => (
                <ToolCard
                  key={category.title}
                  title={category.title}
                  tools={category.tools}
                  Icon={category.icon}
                />
              ))}
            </div>
          </Section>
        </div>

        {/* Sección 6: Metodologías - Diseño distribuido en 2 columnas */}
        <Section title="6. Metodologías de desarrollo" icon={LayoutGrid}>
          <div className="grid md:grid-cols-2 gap-6">
            <MethodologyCard
              title="Cascada (Waterfall)"
              description="Modelo secuencial tradicional. Las fases se completan antes de pasar a la siguiente."
              color="blue"
              Icon={Layers}
            />
            <MethodologyCard
              title="Ágil"
              description="Incluye Scrum, Kanban, XP. Enfoque iterativo e incremental, flexible al cambio."
              color="green"
              Icon={GitBranch}
            />
            <MethodologyCard
              title="Incremental/Iterativo"
              description="Construcción por módulos que se mejoran en ciclos repetidos."
              color="yellow"
              Icon={Code}
            />
            <MethodologyCard
              title="DevOps"
              description="Integración entre desarrollo y operaciones para automatizar la entrega de software."
              color="purple"
              Icon={Zap}
            />
          </div>
        </Section>

        {/* Sección 7: Importancia */}
        <Section title="7. Importancia" icon={ShieldCheck}>
          <ul className="space-y-3 p-4 bg-emerald-50 rounded-lg border border-emerald-300">
            <li className="flex items-start font-medium text-gray-800">
              <span className="text-emerald-600 text-2xl mr-3 font-bold">
                ✓
              </span>{" "}
              Reduce los riesgos técnicos y comerciales.
            </li>
            <li className="flex items-start font-medium text-gray-800">
              <span className="text-emerald-600 text-2xl mr-3 font-bold">
                ✓
              </span>{" "}
              Permite trabajar en equipos grandes de forma organizada.
            </li>
            <li className="flex items-start font-medium text-gray-800">
              <span className="text-emerald-600 text-2xl mr-3 font-bold">
                ✓
              </span>{" "}
              Garantiza productos confiables y escalables.
            </li>
            <li className="flex items-start font-medium text-gray-800">
              <span className="text-emerald-600 text-2xl mr-3 font-bold">
                ✓
              </span>{" "}
              Permite resolver problemas complejos del mundo real de manera
              eficiente.
            </li>
          </ul>
        </Section>

        {/* Sección 8: Ejemplos */}
        <Section title="8. Ejemplos de aplicaciones" icon={Code}>
          <p className="mb-4">
            Prácticamente todos los sistemas digitales son fruto de la
            Ingeniería de Software:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Redes sociales",
              "Sistemas bancarios",
              "Aplicaciones móviles",
              "Inteligencia artificial",
              "Videostreaming",
              "Sistemas de gestión empresarial (ERP)",
            ].map((item, index) => (
              <span
                key={index}
                className="text-sm font-medium bg-emerald-200 text-emerald-800 p-2 rounded-full px-4 text-center hover:bg-emerald-300 transition duration-200 shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>

        {/* Sección 9: Conclusión */}
        <Section title="9. Conclusión" icon={Cpu}>
          <p className="text-center text-xl font-bold text-gray-900 p-4 border border-emerald-500 rounded-xl bg-emerald-100 shadow-lg">
            La ingeniería de software es fundamental en la era digital. Gracias
            a ella, se construyen sistemas complejos y confiables que impactan
            todos los aspectos de la vida moderna, asegurando calidad,
            eficiencia y escalabilidad.
          </p>
        </Section>
      </div>
    </div>
  );
};

const TimeBox = ({ year, event, icon: Icon, highlight = false }) => {
  const [domRef, isVisible] = useAnimateOnScroll(0.8);

  const baseClasses = `p-3 rounded-lg border-2 ${
    highlight
      ? "bg-emerald-100 border-emerald-500 shadow-lg"
      : "bg-white border-gray-200"
  } transition-all duration-1000 ease-out text-sm`;
  const animationClasses = isVisible
    ? "opacity-100 scale-100"
    : "opacity-0 scale-90";

  return (
    <div ref={domRef} className={`${baseClasses} ${animationClasses}`}>
      <p className="text-xl font-bold text-emerald-700">{year}</p>
      <p className="text-gray-600">{event}</p>
      {Icon && <Icon className="w-4 h-4 text-emerald-500 mx-auto mt-1" />}
    </div>
  );
};

// Componente auxiliar para tarjetas de metodología
const MethodologyCard = ({ title, description, color, Icon }) => {
  const [domRef, isVisible] = useAnimateOnScroll(0.3);

  const colorClasses = {
    green: "border-green-500 text-green-800 bg-green-50",
    blue: "border-blue-500 text-blue-800 bg-blue-50",
    yellow: "border-yellow-500 text-yellow-800 bg-yellow-50",
    purple: "border-purple-500 text-purple-800 bg-purple-50",
  };

  const iconColorClasses = {
    green: "text-green-600",
    blue: "text-blue-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
  };

  const animationClasses = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-5";

  return (
    <div
      ref={domRef}
      className={`p-5 rounded-xl border-t-8 shadow-md transition-all duration-700 ease-out ${colorClasses[color]} ${animationClasses}`}
    >
      <div className="flex items-center mb-3">
        <Icon className={`w-6 h-6 ${iconColorClasses[color]} mr-3`} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

// Exporta el componente principal
export default HomePage;
