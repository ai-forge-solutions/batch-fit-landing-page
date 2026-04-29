import React from 'react';

const CriticalCSS = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS for above-the-fold content */
        :root {
          --background: oklch(1 0 0);
          --foreground: oklch(0.18 0.02 300);
          --primary: oklch(0.82 0.15 165);
          --accent: oklch(0.82 0.15 165);
        }
        
        body {
          background-color: var(--background);
          color: var(--foreground);
          margin: 0;
          padding: 0;
          font-family: var(--font-body), 'Barlow Semi Condensed', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--font-title), 'Bebas Neue', sans-serif;
          font-weight: 400;
          margin: 0;
        }
        
        /* Header styles */
        .header {
          position: relative;
          z-index: 50;
          background: var(--background);
        }
        
        /* Hero section critical styles */
        .hero-container {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Button critical styles */
        .btn-primary {
          background-color: var(--primary);
          color: var(--foreground);
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        
        .btn-primary:hover {
          opacity: 0.9;
        }
        
        /* Hide non-critical content during load */
        .lazy-load {
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        
        .lazy-load.loaded {
          opacity: 1;
        }
      `
    }} />
  );
};

export default CriticalCSS;