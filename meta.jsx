// src/components/Meta.jsx
import React from 'react';

const Meta = ({ language }) => {
  const meta = {
    DE: {
      title: "Murali Hemanna - Portfolio",
      description: "Software-Entwickler und Computational Engineering Master-Student. Erfahrung in Computer Vision, Backend-Entwicklung und KI.",
      keywords: "Software-Entwickler, Computer Vision, Backend-Entwicklung, KI, Docker, Python, Java"
    },
    EN: {
      title: "Murali Hemanna - Portfolio",
      description: "Software Developer and Computational Engineering Master's student. Experience in computer vision, backend development, and AI.",
      keywords: "software developer, computer vision, backend development, AI, Docker, Python, Java"
    }
  };

  return (
    <>
      <title>{meta[language].title}</title>
      <meta name="description" content={meta[language].description} />
      <meta name="keywords" content={meta[language].keywords} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={meta[language].title} />
      <meta property="og:description" content={meta[language].description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://[your-username].github.io" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta[language].title} />
      <meta name="twitter:description" content={meta[language].description} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="de" href="https://[your-username].github.io?lang=de" />
      <link rel="alternate" hrefLang="en" href="https://[your-username].github.io?lang=en" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Other Important Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Murali Hemanna" />
    </>
  );
};

export default Meta;