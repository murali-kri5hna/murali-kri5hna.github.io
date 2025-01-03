/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Sun, Moon, Languages, Mail, Phone, Github, Linkedin, ChevronRight,
   ExternalLink, X, ChevronLeft, ChevronDown, ChevronUp, Loader, MinusCircle} from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState('de');
  const [showThesisDetails, setShowThesisDetails] = useState(false);
  const [showArchitectureModal, setShowArchitectureModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  // const [showImageModal, setShowImageModal] = useState(false);
  // const [currentImage, setCurrentImage] = useState(null);

  // Add the modal state
  // const [activeModal, setActiveModal] = useState(null);

  const images = {
    idunion: {
      src: "/api/placeholder/800/600",
      alt: "IDunion Architecture",
      caption: language === 'en' ? "IDunion Project Architecture" : "IDunion Projekt-Architektur"
    },
    gokart: {
      src: "/api/placeholder/800/600",
      alt: "Go-Kart Engine Model",
      caption: language === 'en' ? "3D Model of Pulsar 150cc Engine" : "3D-Modell des Pulsar 150cc Motors"
    }
  };

  const KeywordPill = ({ keyword, isDark }) => (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium 
      ${isDark ? 
        'bg-gray-700 text-gray-200' : 
        'bg-gray-200 text-gray-700'} 
      mr-2 mb-2`}
    >
      {keyword}
    </span>
  );

    // Thesis section component
  const ThesisSection = ({ thesis, keywords, isDark }) => {
    return (
      <div className="mt-2">
        <div className="flex items-start">
          <div className="flex-grow">
            <span className={`font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              Thesis:{' '}
            </span>
            <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {thesis.title}
            </span>
          </div>
          <button
            onClick={() => setShowThesisDetails(!showThesisDetails)}
            className={`ml-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            aria-label={showThesisDetails ? 'Hide thesis details' : 'Show thesis details'}
          >
            {showThesisDetails ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        </div>
        
        <div className="flex items-center mt-1 space-x-3">
          <a
            href={thesis.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 text-sm ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`}
          >
            <Github size={14} />
            <span>View Code</span>
          </a>
          
          {showThesisDetails && (
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {thesis.description}
            </span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap">
          {keywords.split(',').map((keyword, index) => (
            <KeywordPill 
              key={index} 
              keyword={keyword.trim()} 
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    );
  };

  const idunionLinks = {
    github: "https://github.com/amosproj/amos2022ss06-idunion-blockchain-dashboard",
    architecture: "https://raw.githubusercontent.com/amosproj/amos2022ss06-idunion-blockchain-dashboard/main/Documentation/software-architecture-images/0001.jpg"
  };

  // Modal component for architecture overview
  const ArchitectureModal = ({ isOpen, onClose, isDark }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <div className={`relative max-w-4xl w-full rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Modal Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content[language].projects.idunion.title} - Architecture Overview
              </h3>
              <button
                onClick={onClose}
                className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-6">
            <div className="relative">
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader className="w-8 h-8 animate-spin text-blue-500" />
                </div>
              )}
              <img
                src={idunionLinks.architecture}
                alt="IDunion Architecture Overview"
                className={`w-full h-auto rounded-lg ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageLoading(false);
                  // You might want to show an error state here
                }}
              />
            </div>
            
            {/* Optional: Add a caption or description */}
            <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Software architecture overview of the IDunion Blockchain Dashboard project
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Modify the IDunion project section in the return statement
  const IDunionProjectSection = () => {
    const [showArchitecture, setShowArchitecture] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
  
    const idunionLinks = {
      github: "https://github.com/amosproj/amos2022ss06-idunion-blockchain-dashboard",
      architecture: "https://raw.githubusercontent.com/amosproj/amos2022ss06-idunion-blockchain-dashboard/main/Documentation/software-architecture-images/0001.jpg"
    };
  
    const architectureText = {
      en: {
        view: "View Architecture",
        hide: "Hide Architecture",
        overview: "Architecture Overview",
        caption: "Software architecture overview of the IDunion Blockchain Dashboard project",
        fullscreen: "View full size"
      },
      de: {
        view: "Architektur anzeigen",
        hide: "Architektur ausblenden",
        overview: "Architekturübersicht",
        caption: "Softwarearchitektur-Übersicht des IDunion Blockchain Dashboard Projekts",
        fullscreen: "In voller Größe anzeigen"
      }
    };
  
    return (
      <div className="mb-8">
        {/* Fixed Header Section */}
        <div className="mb-4">
          {/* Title and Controls */}
          <div className="flex justify-between items-start mb-2">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              {content[language].projects.idunion.title}
            </h3>
            <div className="flex space-x-2">
              <a
                href={idunionLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-1 text-sm ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <button
                onClick={() => setShowArchitecture(!showArchitecture)}
                className={`inline-flex items-center space-x-1 text-sm ${
                  isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                <ExternalLink size={16} />
                <span>
                  {showArchitecture ? architectureText[language].hide : architectureText[language].view}
                </span>
              </button>
            </div>
          </div>
          
          {/* Role */}
          <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {content[language].projects.idunion.role}
          </p>
        </div>
  
        {/* Content Section with Flexible Layout */}
        <div className={`grid ${showArchitecture ? 'grid-cols-2 gap-6' : 'grid-cols-1'}`}>
          {/* Project Points */}
          <ul className="space-y-2">
            {content[language].projects.idunion.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className={`mt-1 mr-2 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={16} />
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
              </li>
            ))}
          </ul>
  
          {/* Architecture Image */}
          {showArchitecture && (
            <div className="relative">
              <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="w-8 h-8 animate-spin text-blue-500" />
                  </div>
                )}
                <div className="relative group">
                  <img
                    src={idunionLinks.architecture}
                    alt={architectureText[language].overview}
                    className={`w-full h-auto transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)}
                  />
                  {/* Image Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">{architectureText[language].overview}</span>
                      <button
                        onClick={() => window.open(idunionLinks.architecture, '_blank')}
                        title={architectureText[language].fullscreen}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {architectureText[language].caption}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
  

  const content = {
    en: {
      description: "Master's in Computational Engineering with focus on image processing and numerical methods. Skilled in software development through research positions at Fraunhofer Institutes and contribution to open source.",
      skills: {
        title: "Skills",
        programming: {
          title: "Programming",
          languages: "Languages",
          languagesList: "Python · Java · C++ · Shell-Scripting",
          frameworks: "Frameworks",
          frameworksList: "PyTorch · SpringBoot · REST-APIs · MySQL · MLFlow",
          tools: "Tools",
          toolsList: "Git · Docker · QML · Linux · Make · Eclipse · PyCharm · Grafana · MATLAB · Octave · OpenFoam",
          softwareEng: "Software Engineering",
          softwareEngList: "API Design · Debugging · Testing · Documentation"
        }
      },
      experience: {
        title: "Experience",
        fraunhoferIof: {
          title: "Fraunhofer-Institut",
          link: "https://www.iof.fraunhofer.de/",
          department: "Applied Optics and Precision Engineering",
          role: "Software Developer | Student Research Assistant",
          date: "Mar 2024 - Sep 2024 | Jena, Germany",
          points: [
            "Developed QML-based GUI interface for real-time image reconstruction system",
            "Integrated C++ backend with front-end visualization components"
          ]
        },
        fraunhoferIks: {
          title: "Fraunhofer-Institut",
          link: "https://www.iks.fraunhofer.de/",
          department: "Cognitive Systems",
          role: "AI Framework Developer | Student Research Assistant",
          date: "Oct 2022 - Dec 2023 | München, Germany",
          points: [
            "Architected and implemented REST APIs using Spring Boot for AI lifecycle management",
            "Extended framework functionality through information store extension and health monitoring",
            "Containerized services for industrial PLC deployment using Docker",
            "Deployed and tested research prototype framework combining Java and Python components"
          ]
        }
      },
      projects: {
        title: "Projects",
        idunion: {
          title: "IDunion Blockchain Infrastructure",
          role: "Developer - Metrics and Analytics",
          points: [
            "Designed and implemented open-source metrics engine for Hyperledger Indy nodes",
            "Built real-time monitoring dashboard using Grafana for distributed ledger analysis",
            "Collaborated with distributed teams following agile methodologies"
          ]
        },
        coursework: {
          title: "Coursework",
          projects: [
            {
              title: "Deconstructing Text-to-Image Diffusion",
              description: "Delivered technical presentation on diffusion models, analyzing the mathematics and architecture behind text-to-image generation from Gaussian noise."
            },
            {
              title: "Computational Fluid Dynamics",
              description: "Implemented 2D flow solver in Octave, simulating lid-driven cavity flows with focus on finite difference methods."
            }
          ]
        }
      },
      education: {
        title: "Education",
        masters: {
          university: "Friedrich-Alexander University",
          link: "https://www.fau.de/",
          degree: "Master - Computational Engineering",
          date: "2020 - 2024 | Erlangen",
          thesis: {
            title: "Reinforcement Learning for learning Mean Average Precision",
            repo: "https://github.com/murali-kri5hna/icdar23",
            description: "Implementation and research code for enhancing Mean Average Precision using Reinforcement Learning techniques."
          },
          keywords: "Computer Vision, Image Retrieval, Writer Recognition, Reinforcement Learning"
        },
        bachelors: {
          university: "Visvesvaraya Technical University",
          degree: "Bachelor - Mechanical Engineering",
          date: "2015 - 2019 | Belgavi",
          thesis: "Bio-mimicking Swarm Intelligence of insects in micro-bots"
        }
      },
      modal: {
        close: "Close",
        viewArchitecture: "View Architecture",
        viewProject: "View Project",
        view3DModel: "View 3D Model",
        learnMore: "Learn more",
      },
      links: {
        fau: {
          title: "Friedrich-Alexander University",
          url: "https://www.fau.de/",
          description: "One of Germany's largest and most research-intensive universities"
        },
        iof: {
          title: "Fraunhofer IOF",
          url: "https://www.iof.fraunhofer.de/",
          description: "Research institute focusing on applied optics and precision engineering"
        },
        iks: {
          title: "Fraunhofer IKS",
          url: "https://www.iks.fraunhofer.de/",
          description: "Research institute specializing in cognitive systems and AI"
        }
      }
    },
    de: {
      description: "Master in Computational Engineering mit Schwerpunkt auf Bildverarbeitung und numerischen Methoden. Erfahren in Softwareentwicklung durch Forschungspositionen an Fraunhofer-Instituten und Beitrag zu Open Source.",
      skills: {
        title: "Kenntnisse",
        programming: {
          title: "Programmierung",
          languages: "Sprachen",
          languagesList: "Python · Java · C++ · Shell-Scripting",
          frameworks: "Frameworks",
          frameworksList: "PyTorch · SpringBoot · REST-APIs · MySQL · MLFlow",
          tools: "Tools",
          toolsList: "Git · Docker · QML · Linux · Make · Eclipse · PyCharm · Grafana · MATLAB · Octave · OpenFoam",
          softwareEng: "Software-Engineering",
          softwareEngList: "API Design · Debugging · Testing · Documentation"
        }
      },
      experience: {
        title: "Erfahrung",
        fraunhoferIof: {
          title: "Fraunhofer-Institut",
          link: "https://www.iof.fraunhofer.de/",
          department: "Angewandte Optik und Feinmechanik",
          role: "Softwareentwickler | Wissenschaftliche Hilfskraft",
          date: "Mär 2024 - Sep 2024 | Jena, Deutschland",
          points: [
            "Entwicklung einer QML-basierten GUI-Schnittstelle für ein Echtzeitbildrekonstruktionssystem",
            "Integration von C++-Backend mit Frontend-Visualisierungskomponenten"
          ]
        },
        fraunhoferIks: {
          title: "Fraunhofer-Institut",
          link: "https://www.iks.fraunhofer.de/",
          department: "Kognitive Systeme",
          role: "KI-Framework-Entwickler | Wissenschaftliche Hilfskraft",
          date: "Okt 2022 - Dez 2023 | München, Deutschland",
          points: [
            "Konzipierung und Implementierung von REST-APIs mit Spring Boot für KI-Lifecycle-Management",
            "Erweiterung der Framework-Funktionalität durch Informationsspeicher-Erweiterung und Gesundheitsüberwachung",
            "Containerisierung von Diensten für industrielle SPS-Bereitstellung mittels Docker",
            "Bereitstellung und Test des Forschungsprototyp-Frameworks unter Kombination von Java- und Python-Komponenten"
          ]
        }
      },
      projects: {
        title: "Projekte",
        idunion: {
          title: "IDunion Blockchain-Infrastruktur",
          role: "Entwickler - Metriken und Analytik",
          points: [
            "Konzeption und Implementierung einer Open-Source-Metrik-Engine für Hyperledger Indy-Knoten",
            "Entwicklung eines Echtzeit-Monitoring-Dashboards mit Grafana für verteilte Ledger-Analyse",
            "Zusammenarbeit mit verteilten Teams nach Agilen Methoden"
          ]
        },
        coursework: {
          title: "Kursprojekte",
          projects: [
            {
              title: "Dekonstruktion von Text-zu-Bild-Diffusion",
              description: "Technische Präsentation über Diffusionsmodelle, mit Analyse der Mathematik und Architektur hinter der Text-zu-Bild-Generierung aus Gaußschem Rauschen."
            },
            {
              title: "Numerische Strömungsmechanik",
              description: "Entwicklung eines numerischen 2D-Strömungslösers in Octave mittels Finite-Differenzen-Methode."
            }
          ]
        }
      },
      education: {
        title: "Bildung",
        masters: {
          university: "Friedrich-Alexander Universität",
          link: "https://www.fau.de/",
          degree: "Master - Computational Engineering",
          date: "2020 - 2024 | Erlangen",
          thesis: {
            title: "Reinforcement Learning for learning Mean Average Precision",
            repo: "https://github.com/murali-kri5hna/icdar23",
            description: "Implementierungs- und Forschungscode zur Verbesserung der Mean Average Precision mittels Reinforcement Learning."
          },
          keywords: "Computer Vision, Bildsuche, Schrifterkennung, Reinforcement Learning"
        },
        bachelors: {
          university: "Visvesvaraya Technical University",
          degree: "Bachelor - Maschinenbau",
          date: "2015 - 2019 | Belgavi",
          thesis: "Bio-mimicking Swarm Intelligence of insects in micro-bots"
        }
      }
    },
    modal: {
      close: "Schließen",
      viewArchitecture: "Architektur ansehen",
      viewProject: "Projekt ansehen",
      view3DModel: "3D-Modell ansehen",
      learnMore: "Mehr erfahren",
    },
    links: {
      fau: {
        title: "Friedrich-Alexander-Universität",
        url: "https://www.fau.de/",
        description: "Eine der größten und forschungsstärksten Universitäten Deutschlands"
      },
      iof: {
        title: "Fraunhofer IOF",
        url: "https://www.iof.fraunhofer.de/",
        description: "Forschungsinstitut mit Fokus auf angewandte Optik und Feinmechanik"
      },
      iks: {
        title: "Fraunhofer IKS",
        url: "https://www.iks.fraunhofer.de/",
        description: "Forschungsinstitut spezialisiert auf kognitive Systeme und KI"
      }
    }
  };

  // Helper component for institution links
  const InstitutionLink = ({ href, children, isDark }) => (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:underline ${
        isDark ? 'text-gray-200 hover:text-white' : 'text-gray-800 hover:text-black'
      }`}
    >
      {children}
    </a>
  );


  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Background texture */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.15' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Fixed header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 dark:border-gray-800">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={() => setLanguage(prev => prev === 'en' ? 'de' : 'en')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Languages size={20} className={isDark ? 'text-white' : 'text-gray-800'} />
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {language === 'en' ? 'EN' : 'DE'}
              </span>
            </button>

            <button
              onClick={() => setIsDark(prev => !prev)}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative container mx-auto px-6 py-12">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className={`text-6xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Murali Hemanna
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {content[language].description}
          </p>
          
          {/* Contact links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="mailto:work.ludicrous111@passinbox.com" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <Mail size={20} />
              <span>Email</span>
            </a>
            {/* <a href="tel:+4915734768688" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <Phone size={20} />
              <span>Phone</span>
            </a> */}
            <a href="https://github.com/murali-kri5hna" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/murali-kri5hna" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Grid layout for main sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content[language].skills.title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {content[language].skills.programming.languages}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {content[language].skills.programming.languagesList}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {content[language].skills.programming.frameworks}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {content[language].skills.programming.frameworksList}
                  </p>
                </div>
                
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {content[language].skills.programming.tools}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {content[language].skills.programming.toolsList}
                  </p>
                </div>
                
                <div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {content[language].skills.programming.softwareEng}
                  </h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {content[language].skills.programming.softwareEngList}
                  </p>
                </div>
              </div>
            </section>

            {/* Education section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content[language].education.title}
              </h2>
              
              <div className="space-y-6">
                {/* Masters */}
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    <InstitutionLink href={content[language].education.masters.link} isDark={isDark}>
                      {content[language].education.masters.university}
                    </InstitutionLink>
                  </h3>
                  <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {content[language].education.masters.degree}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {content[language].education.masters.date}
                  </p>

                  <ThesisSection 
                    thesis={content[language].education.masters.thesis}
                    keywords={content[language].education.masters.keywords}
                    isDark={isDark}
                  />
                </div>

                {/* Bachelors */}
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {content[language].education.bachelors.university}
                  </h3>
                  <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {content[language].education.bachelors.degree}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {content[language].education.bachelors.date}
                  </p>
                  <p className="mt-2">
                    <span className={`font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      Thesis:{' '}
                    </span>
                    <span className={`${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      {content[language].education.bachelors.thesis}
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right column (wider) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content[language].experience.title}
              </h2>

              <div className="space-y-8">
                {/* Fraunhofer IOF */}
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {content[language].experience.fraunhoferIof.title}
                      </h3>
                      <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <InstitutionLink href={content[language].experience.fraunhoferIof.link} isDark={isDark}>
                          {content[language].experience.fraunhoferIof.department}
                        </InstitutionLink>
                      </p>
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {content[language].experience.fraunhoferIof.date}
                    </span>
                  </div>
                  {/* <p className={`text-md mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}> */}
                  <p className={`text-md mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {content[language].experience.fraunhoferIof.role}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {content[language].experience.fraunhoferIof.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className={`mt-1 mr-2 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={16} />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fraunhofer IKS */}
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {content[language].experience.fraunhoferIks.title}
                      </h3>
                      <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        <InstitutionLink href={content[language].experience.fraunhoferIks.link} isDark={isDark}>
                          {content[language].experience.fraunhoferIks.department}
                        </InstitutionLink>
                      </p>
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {content[language].experience.fraunhoferIks.date}
                    </span>
                  </div>
                  {/* <p className={`text-md mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}> */}
                  <p className={`text-md mt-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {content[language].experience.fraunhoferIks.role}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {content[language].experience.fraunhoferIks.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className={`mt-1 mr-2 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={16} />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {content[language].projects.title}
              </h2>

              {/* IDunion project */}
              {/* <div className="mb-8">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {content[language].projects.idunion.title}
                </h3>
                <p className={`text-md font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {content[language].projects.idunion.role}
                </p>
                <ul className="mt-4 space-y-2">
                  {content[language].projects.idunion.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className={`mt-1 mr-2 flex-shrink-0 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={16} />
                      <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div> */}
              <IDunionProjectSection />

              {/* Coursework projects */}
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {content[language].projects.coursework.title}
                </h3>
                <div className="space-y-4">
                  {content[language].projects.coursework.projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                      <h4 className={`text-md font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        {project.title}
                      </h4>
                      <p className={`mt-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Architecture Modal */}
            <ArchitectureModal 
              isOpen={showArchitectureModal}
              onClose={() => 
                setShowArchitectureModal(false)}
              isDark={isDark}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
