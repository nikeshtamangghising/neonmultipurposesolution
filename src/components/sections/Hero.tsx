"use client";

import { useRef, useState, memo } from "react";
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

  const handleSceneLoad = () => {
    setIsLoaded(true);
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
        <div className="absolute inset-0 z-0">
          {isLoaded && (
            <Butterfly className="scale-[0.3] transition-opacity duration-500" containerRef={containerRef} />
          )}
        </div>

        <div className="flex flex-col-reverse md:flex-row min-h-[calc(100vh-64px)] items-center justify-center gap-4 md:gap-8 px-4 relative z-10">
          <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center md:items-start">
            <h2 className={`text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-b from-gray-900 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 
              mb-3 md:mb-8 text-center md:text-left transition-opacity duration-500
              ${isLoaded ? 'opacity-100' : 'opacity-100'}`}>
              Neon Multipurpose Solution
            </h2>
            <p className={`mt-2 md:mt-4 text-gray-600 dark:text-neutral-300 
              max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left
              transition-opacity duration-500 delay-200
              ${isLoaded ? 'opacity-100' : 'opacity-100'}`}>
              Discover comprehensive IT training programs designed to launch your tech career.
              Learn from industry experts and gain practical experience.
            </p>
          </div>

          <div className={`w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[500px] relative
            transition-all duration-500 ease-out transform
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
            <div className="absolute inset-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                onLoad={handleSceneLoad}
              />
            </div>
            {!isLoaded && <LoadingSpinner />}
          </div>
        </div>
      </Card>
    </section>
  );
});

Hero.displayName = 'Hero';
