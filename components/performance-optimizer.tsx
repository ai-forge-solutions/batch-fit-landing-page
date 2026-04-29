"use client"

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Performance monitoring
    if ('performance' in window) {
      // Report Core Web Vitals using built-in Performance API
      const reportWebVital = (metric: any) => {
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'web_vital',
            metric_name: metric.name,
            metric_value: Math.round(metric.value),
            metric_id: metric.id
          });
        }
      };

      // Use built-in Performance Observer if available
      if ('PerformanceObserver' in window) {
        try {
          // LCP observer
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            reportWebVital({
              name: 'LCP',
              value: lastEntry.startTime,
              id: 'lcp-' + Date.now()
            });
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

          // FCP observer
          const fcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                reportWebVital({
                  name: 'FCP',
                  value: entry.startTime,
                  id: 'fcp-' + Date.now()
                });
              }
            });
          });
          fcpObserver.observe({ type: 'paint', buffered: true });
        } catch (e) {
          // Performance Observer not fully supported
        }
      }
    }

    // Prefetch critical assets when network is idle
    const prefetchAssets = () => {
      const criticalAssets = [
        '/social-proof-1.webp',
        '/social-proof-2.webp', 
        '/social-proof-3.webp'
      ];

      criticalAssets.forEach(asset => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = asset;
        document.head.appendChild(link);
      });
    };

    // Prefetch when network is idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(prefetchAssets);
    } else {
      setTimeout(prefetchAssets, 2000);
    }

    // Preload next likely navigation
    const preloadNextPage = () => {
      if ('IntersectionObserver' in window) {
        const buttons = document.querySelectorAll('[href="/pricing"], [href="/checkout"]');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const href = entry.target.getAttribute('href');
              if (href) {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = href;
                document.head.appendChild(link);
              }
              observer.unobserve(entry.target);
            }
          });
        });

        buttons.forEach(button => observer.observe(button));
      }
    };

    setTimeout(preloadNextPage, 1000);

  }, []);

  return null;
};

export default PerformanceOptimizer;