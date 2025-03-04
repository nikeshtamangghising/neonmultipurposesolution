"use client";

import { useRef, useState, memo, useEffect } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Butterfly } from "@/components/ui/butterfly";

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

export const Hero = memo(function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [butterflyReady, setButterflyReady] = useState(false);
  const [splineError, setSplineError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    // Start loading butterfly immediately
    const timer = setTimeout(() => {
      setButterflyReady(true);
    }, 500); // Small delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  const handleSceneLoad = () => {
    setIsLoaded(true);
    setSplineError(null);
  };

  const handleSplineError = (error: string) => {
    console.error('Spline error:', error);
    setSplineError(error);
    // Still mark as loaded to show other content
    setIsLoaded(true);
  };

  const handleRetry = () => {
    setIsLoaded(false);
    setSplineError(null);
    setRetryCount(prev => prev + 1);
  };

  return (
    <section id="home" className="bg-white dark:bg-black h-screen">
      <Card 
        ref={containerRef}
        className="w-full h-full bg-white dark:bg-black 
        relative overflow-hidden shadow-xl dark:shadow-none
        border-border/10 dark:border-border/5
        rounded-none border-t-0"
      >
        <div className="absolute inset-0 z-0">
          {butterflyReady && (
            <Butterfly className="scale-[0.3] transition-opacity duration-500" containerRef={containerRef} />
          )}
        </div>

        <div className="flex flex-col-reverse md:flex-row h-full relative z-10">
          <div className="w-full md:w-[45%] p-4 md:p-8 flex flex-col justify-center items-center md:items-start">
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

          <div className="w-full md:w-[55%] h-full relative">
            <div className="absolute inset-0">
              <SplineScene 
                key={retryCount}
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                onLoad={handleSceneLoad}
                onError={handleSplineError}
              />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
});

Hero.displayName = 'Hero';
