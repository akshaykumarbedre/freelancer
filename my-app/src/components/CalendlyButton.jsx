'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyButton({ className, children }) {
  // Function to open Calendly when button is clicked
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/akshaykumarbm-aifx/30min',
      });
      return false;
    }
  };

  // Make sure Calendly is loaded
  useEffect(() => {
    // If window.Calendly exists but initPopupWidget doesn't, it might still be loading
    if (window.Calendly && !window.Calendly.initPopupWidget) {
      const interval = setInterval(() => {
        if (window.Calendly.initPopupWidget) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button 
        onClick={openCalendly} 
        className={className}
      >
        {children || 'Book Free Call Instantly'}
      </button>
    </>
  );
}
