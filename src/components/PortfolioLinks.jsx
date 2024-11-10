import React from 'react';
import { ExternalLink, GitHub, Youtube, Book, Building, Code } from 'lucide-react';

const PortfolioLinks = ({ isDark = true }) => {
  const institutions = [
    {
      name: "Friedrich Alexander University",
      url: "https://www.fau.de/",
      type: "education",
      icon: Book,
      description: "My alma mater where I completed my Master's in Computational Engineering"
    },
    {
      name: "Fraunhofer IOF",
      url: "https://www.iof.fraunhofer.de/",
      type: "work",
      icon: Building,
      description: "Institute for Applied Optics and Precision Engineering"
    },
    {
      name: "Fraunhofer IKS",
      url: "https://www.iks.fraunhofer.de/",
      type: "work",
      icon: Building,
      description: "Institute for Cognitive Systems"
    }
  ];

  const projects = [
    {
      name: "IDunion Blockchain Dashboard",
      type: "featured",
      links: [
        {
          type: "github",
          url: "https://github.com/amosproj/amos2022ss06-idunion-blockchain-dashboard",
          icon: GitHub
        }
      ],
      image: {
        url: "https://github.com/amosproj/amos2022ss06-idunion-blockchain-dashboard/blob/main/Documentation/software-architecture-images/0001.jpg",
        alt: "IDunion Project Architecture"
      }
    },
    {
      name: "Go-Kart Engine Design",
      type: "engineering",
      links: [
        {
          type: "model",
          url: "https://grabcad.com/library/pulsar-150cc-engine-1",
          icon: Code
        }
      ],
      description: "3D model of a Pulsar 150cc engine designed for the go-kart project"
    },
    {
      name: "DIY Quadcopter Build",
      type: "engineering",
      links: [
        {
          type: "tutorial",
          url: "https://youtube.com/playlist?list=PLzidsatoEzeieT03YQ6-LpO0bR1yfEZpx",
          icon: Youtube
        }
      ],
      description: "Custom-built quadcopter following comprehensive tutorial series"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Institutions Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Institutions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {institutions.map((institution) => (
            <a
              key={institution.name}
              href={institution.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start p-4 rounded-lg transition-colors
                ${isDark ? 
                  'bg-gray-700 hover:bg-gray-600' : 
                  'bg-gray-50 hover:bg-gray-100'}`}
            >
              <institution.icon 
                className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 
                  ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
              />
              <div>
                <h3 className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                  {institution.name}
                </h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {institution.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project) => (
            <div 
              key={project.name}
              className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}
            >
              <h3 className={`text-lg font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {project.name}
              </h3>
              {project.description && (
                <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
              )}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm
                      ${isDark ? 
                        'bg-gray-600 hover:bg-gray-500 text-gray-200' : 
                        'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                ))}
              </div>
              {project.image && (
                <div className="mt-4">
                  <img
                    src="/api/placeholder/800/400"
                    alt={project.image.alt}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioLinks;