import React, { useState, useEffect } from 'react';
import { Globe2, Mail, Github, Linkedin, ChevronDown, ExternalLink, Sun, Moon } from 'lucide-react';

// Theme and Language toggle component
const ThemeAndLangToggle = ({ language, setLanguage, isDark, setIsDark }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2">
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? 
        <Sun className="w-4 h-4 text-gray-700 dark:text-gray-300" /> : 
        <Moon className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      }
    </button>
    <button 
      onClick={() => setLanguage(language === 'DE' ? 'EN' : 'DE')}
      className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
    >
      {language === 'DE' ? 'EN' : 'DE'}
    </button>
  </div>
);

// DroneSketch component remains the same
const DroneSketch = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <g stroke="currentColor" fill="none" strokeWidth="2">
      <rect x="80" y="80" width="40" height="40" />
      <line x1="60" y1="60" x2="140" y2="60" />
      <line x1="60" y1="140" x2="140" y2="140" />
      <circle cx="60" cy="60" r="15" />
      <circle cx="140" cy="60" r="15" />
      <circle cx="60" cy="140" r="15" />
      <circle cx="140" cy="140" r="15" />
    </g>
  </svg>
);

const Portfolio = () => {
  const [language, setLanguage] = useState('DE');
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Content object remains the same as before
  const content = {
    DE: {
        name: 'Murali Hemanna',
        title: 'Master in Computational Engineering',
        subtitle: 'Schwerpunkt auf Bildverarbeitung und numerischen Methoden',
        location: 'Erlangen, Deutschland',
        skills: {
          languages: ['Python', 'Java', 'C++', 'Shell-Scripting'],
          frameworks: ['PyTorch', 'SpringBoot', 'REST-APIs', 'MySQL', 'MLFlow'],
          tools: ['Git', 'Docker', 'QML', 'Linux', 'Make', 'Eclipse', 'PyCharm', 'Grafana', 'MATLAB', 'Octave', 'OpenFoam'],
          engineering: ['API Design', 'Debugging', 'Testing', 'Documentation']
        },
        experience: [
          {
            company: 'Fraunhofer-Institut',
            department: 'Angewandte Optik und Feinmechanik',
            role: 'Softwareentwickler',
            period: 'Mär 2024 - Sep 2024',
            location: 'Jena',
            details: [
              'Entwicklung einer QML-basierten GUI-Schnittstelle für ein Echtzeitbildrekonstruktionssystem',
              'Integration von C++-Backend mit Frontend-Visualisierungskomponenten'
            ]
          },
          {
            company: 'Fraunhofer-Institut',
            department: 'Kognitive Systeme',
            role: 'KI-Framework-Entwickler',
            period: 'Okt 2022 - Dez 2023',
            location: 'München',
            details: [
              'Konzipierung und Implementierung von REST-APIs mit Spring Boot für KI-Lifecycle-Management',
              'Erweiterung der Framework-Funktionalität durch Informationsspeicher-Erweiterung',
              'Containerisierung von Diensten für industrielle SPS-Bereitstellung mittels Docker',
              'Bereitstellung und Test des Forschungsprototyp-Frameworks'
            ]
          }
        ],
        projects: [
          {
            title: 'IDunion Blockchain-Infrastruktur',
            role: 'Entwickler - Metriken und Analytik',
            details: [
              'Konzeption und Implementierung einer Open-Source-Metrik-Engine',
              'Entwicklung eines Echtzeit-Monitoring-Dashboards mit Grafana',
              'Zusammenarbeit mit verteilten Teams nach Agilen Methoden'
            ]
          },
          {
            title: 'H-Frame Quadcopter',
            details: [
              'Konstruktion eines Holz-Quadcopters von Grund auf',
              'Feinabstimmung der PID-Steuerung',
              'Verwendung des Multi-wii Flugcontrollers'
            ],
            hasImage: true
          },
          {
            title: 'Go-Kart Chassis',
            details: [
              'Design und Bau eines Go-Kart-Chassis für Rennen',
              '3D-Modellierung eines Pulsar 150cc Motors'
            ],
            modelLink: 'https://grabcad.com/library/pulsar-150cc-engine-1'
          }
        ]
    },
    EN: {
        name: 'Murali Hemanna',
        title: "Master's in Computational Engineering",
        subtitle: 'Focus on image processing and numerical methods',
        location: 'Erlangen, Germany',
        skills: {
          languages: ['Python', 'Java', 'C++', 'Shell-Scripting'],
          frameworks: ['PyTorch', 'SpringBoot', 'RESTful API', 'MySQL', 'MLFlow'],
          tools: ['Git', 'Docker', 'QML', 'Linux', 'Make', 'Eclipse', 'PyCharm', 'Grafana', 'MATLAB', 'Octave', 'OpenFoam'],
          engineering: ['API Design', 'Debugging', 'Testing', 'Documentation']
        },
        experience: [
          {
            company: 'Fraunhofer Institute',
            department: 'Applied Optics and Precision Engineering',
            role: 'Software Developer',
            period: 'Mar 2024 - Sep 2024',
            location: 'Jena',
            details: [
              'Developed QML-based GUI interface for real-time image reconstruction system',
              'Integrated C++ backend with front-end visualization components'
            ]
          },
          {
            company: 'Fraunhofer Institute',
            department: 'Cognitive Systems',
            role: 'AI Framework Developer',
            period: 'Oct 2022 - Dec 2023',
            location: 'Munich',
            details: [
              'Architected and implemented REST APIs using Spring Boot for AI lifecycle management',
              'Extended framework functionality through information store extension',
              'Containerized services for industrial PLC deployment using Docker',
              'Deployed and tested research prototype framework'
            ]
          }
        ],
        projects: [
          {
            title: 'IDunion Blockchain Infrastructure',
            role: 'Developer - Metrics and Analytics',
            details: [
              'Designed and implemented open-source metrics engine',
              'Built real-time monitoring dashboard using Grafana',
              'Collaborated with distributed teams following agile methodologies'
            ]
          },
          {
            title: 'H-Frame Quadcopter',
            details: [
              'Construction of a wooden quadcopter from scratch',
              'Fine-tuning of PID control',
              'Used Multi-wii flight controller'
            ],
            hasImage: true
          },
          {
            title: 'Go-Kart Chassis',
            details: [
              'Design and construction of a Go-kart chassis for racing',
              '3D modeling of a Pulsar 150cc engine'
            ],
            modelLink: 'https://grabcad.com/library/pulsar-150cc-engine-1'
          }
        ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pattern-grid-lg transition-colors duration-300">
      <ThemeAndLangToggle 
        language={language} 
        setLanguage={setLanguage} 
        isDark={isDark} 
        setIsDark={setIsDark} 
      />
      
      {/* Header Section */}
      <header className="pt-20 pb-10 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          {content[language].name}
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-1">
          {content[language].title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {content[language].subtitle}
        </p>
        <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400">
          <a href="mailto:mkhg42@proton.me" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/murali-kri5hna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/murali-kri5hna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 grid gap-12 pb-20">
        {/* Skills Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(content[language].skills).map(([category, skills]) => (
              <div key={category}>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 uppercase">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Experience</h3>
          <div className="space-y-8">
            {content[language].experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">{exp.company}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{exp.department}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.role} | {exp.period} | {exp.location}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content[language].projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">{project.title}</h4>
                {project.role && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.role}</p>
                )}
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
                {project.hasImage && (
                  <div className="mt-4 h-32 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    <DroneSketch />
                  </div>
                )}
                {project.modelLink && (
                  <a 
                    href={project.modelLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <span>View 3D Model</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;