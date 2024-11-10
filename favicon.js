// Create link elements for both favicons
const createFaviconLink = (href) => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/svg+xml';
    link.href = href;
    return link;
  }
  
  // Create both favicon versions
  const lightFavicon = createFaviconLink('/favicon-light.svg');
  const darkFavicon = createFaviconLink('/favicon-dark.svg');
  
  // Function to update favicon based on theme
  const updateFavicon = () => {
    // Remove existing favicons
    document.head
      .querySelectorAll('link[rel="icon"]')
      .forEach(link => link.remove());
  
    // Add appropriate favicon based on color scheme
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.head.appendChild(isDark ? darkFavicon : lightFavicon);
  }
  
  // Initial setup
  updateFavicon();
  
  // Listen for theme changes
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', updateFavicon);
  
  // Export function to manually update favicon (useful for theme toggles)
  window.updateFavicon = updateFavicon;