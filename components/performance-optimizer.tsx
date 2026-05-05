"use client"

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const PerformanceOptimizer = () => {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const reportWebVital = (name: string, value: number) => {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'web_vital',
          metric_name: name,
          metric_value: Math.round(value),
          metric_id: `${name.toLowerCase()}-${Date.now()}`
        });
      }
    };

    const observers: PerformanceObserver[] = [];

    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVital('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      observers.push(lcpObserver);

      const fcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            reportWebVital('FCP', entry.startTime);
          }
        }
      });
      fcpObserver.observe({ type: 'paint', buffered: true });
      observers.push(fcpObserver);

      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        reportWebVital('CLS', clsValue);
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      observers.push(clsObserver);

      const inpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          reportWebVital('INP', entry.duration);
        }
      });
      inpObserver.observe({ type: 'event', buffered: true, durationThreshold: 40 } as PerformanceObserverInit);
      observers.push(inpObserver);
    } catch {
      // Some observers may not be supported in all browsers
    }

    // Preload next likely navigation when CTA buttons become visible
    if ('IntersectionObserver' in window) {
      const prefetchObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const href = entry.target.getAttribute('href');
            if (href) {
              const link = document.createElement('link');
              link.rel = 'prefetch';
              link.href = href;
              document.head.appendChild(link);
            }
            prefetchObserver.unobserve(entry.target);
          }
        }
      });

      const buttons = document.querySelectorAll('[href="/pricing"], [href="/checkout"]');
      buttons.forEach(button => prefetchObserver.observe(button));
    }

    return () => {
      observers.forEach(o => o.disconnect());
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;