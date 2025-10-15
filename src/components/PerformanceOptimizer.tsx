import React from 'react';

const PerformanceOptimizer: React.FC = () => {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml" />
      <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#00C4CC" />
      <meta name="msapplication-TileColor" content="#00C4CC" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </>
  );
};

export default PerformanceOptimizer;
