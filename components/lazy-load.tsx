import React, { useState, useEffect, useRef } from 'react';

interface LazyLoadProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  fallback?: React.ReactNode;
}

const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  fallback = null 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsLoaded(true), 50); // Small delay for smooth transition
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`lazy-load ${isLoaded ? 'loaded' : ''} ${className}`}
    >
      {isVisible ? children : fallback}
    </div>
  );
};

export default LazyLoad;