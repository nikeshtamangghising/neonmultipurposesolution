"use client";

import { useRef, useState, memo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Butterfly } from "@/components/ui/butterfly";

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";

export const Hero = memo(function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [butterflyReady, setButterflyReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure butterfly loads only on client-side after hydration
    setButterflyReady(true);

    // Add error handling for iframe
    const handleIframeError = () => {
      const error = 'Failed to load 3D scene';
      console.error(error);
      setLoadError(error);
      setIsLoaded(true);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('error', handleIframeError);
    }

    // Set a timeout to check if loading takes too long
    const timeoutId = setTimeout(() => {
      if (!isLoaded) {
        setLoadError('Loading timeout - Please check your connection');
      }
    }, 10000); // 10 seconds timeout

    return () => {
      if (iframe) {
        iframe.removeEventListener('error', handleIframeError);
      }
      clearTimeout(timeoutId);
    };
  }, [isLoaded]);

  // Function to handle iframe load
  const handleIframeLoad = () => {
    setIsLoaded(true);
    setLoadError(null);
  };

  return (
    <section id="home" className="pt-[64px] bg-white dark:bg-black min-h-screen">
      <Card
        ref={containerRef}
        className="w-full min-h-[calc(100vh-64px)] bg-white dark:bg-black 
        relative overflow-hidden shadow-xl dark:shadow-none
        border-border/10 dark:border-border/5
        rounded-none border-t-0"
      >
        {/* Butterfly Effect */}
        {butterflyReady && (
          <div className="absolute inset-0 z-0">
            <Butterfly className="scale-[0.3] transition-opacity duration-500" containerRef={containerRef} />
          </div>
        )}

        <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-64px)] items-center justify-center gap-4 md:gap-8 px-4 relative z-10">
          {/* Hero Text */}
          <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-b from-gray-900 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 
              mb-3 md:mb-8 text-center md:text-left transition-opacity duration-500">
              Neon Multipurpose Solution
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600 dark:text-neutral-300 
              max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left
              transition-opacity duration-500 delay-200">
              Discover comprehensive IT training programs designed to launch your tech career.
              Learn from industry experts and gain practical experience.
            </p>
          </div>

          {/* Hero Animation (Spline Scene) */}
          <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[500px] relative transition-all duration-500 ease-out transform">
            <div className="absolute inset-0">
              {!loadError ? (
                <iframe
                  ref={iframeRef}
                  src="https://my.spline.design/nexbotrobotcharacterconcept-63ef2e06f2694e675d93360f8a91f2e1/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  className="w-full h-full"
                  onLoad={handleIframeLoad}
                  onError={() => setLoadError('Failed to load 3D scene')}
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                    background: "transparent",
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm p-4">
                  <p className="text-sm text-red-500 dark:text-red-400 text-center font-medium">
                    {loadError}
                  </p>
                  <button
                    onClick={() => {
                      setLoadError(null);
                      setIsLoaded(false);
                    }}
                    className="px-4 py-2 text-xs font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
            {!isLoaded && !loadError && <LoadingSpinner />}
          </div>
        </div>
      </Card>
    </section>
  );
});

Hero.displayName = "Hero";
