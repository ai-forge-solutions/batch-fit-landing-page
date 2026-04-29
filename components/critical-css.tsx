import React from 'react';

const CriticalCSS = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS - Only essentials to prevent FOUC */
        :root {
          --background: oklch(1 0 0);
          --foreground: oklch(0.18 0.02 300);
          --primary: oklch(0.82 0.15 165);
          --font-title: 'Bebas Neue Local', 'Bebas Neue', sans-serif;
        }
        
        body {
          background-color: var(--background);
          color: var(--foreground);
          margin: 0;
          padding: 0;
          font-family: var(--font-body), 'Geist', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-title);
          font-weight: 400;
        }
        
        /* Prevent layout shift for images */
        img {
          max-width: 100%;
          height: auto;
        }
      `
    }} />
  );
};

export default CriticalCSS;