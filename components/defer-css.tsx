"use client"

import { useEffect } from 'react';

const DeferCSS = () => {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadDeferredCSS = () => {
      // Load Tailwind utilities that are not critical
      const deferredStyles = document.createElement('link');
      deferredStyles.rel = 'stylesheet';
      deferredStyles.href = '/deferred-styles.css'; // Future non-critical styles
      deferredStyles.media = 'print';
      deferredStyles.onload = function() {
        this.media = 'all';
      };
      
      // Append after critical CSS is loaded
      setTimeout(() => {
        document.head.appendChild(deferredStyles);
      }, 0);
    };

    // Load when page becomes visible or after a delay
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadDeferredCSS);
    } else {
      setTimeout(loadDeferredCSS, 100);
    }
  }, []);

  return null;
};

export default DeferCSS;