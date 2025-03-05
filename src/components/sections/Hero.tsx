"use client";

import { useRef, useState, memo, useEffect } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Butterfly } from "@/components/ui/butterfly";
import { useTheme } from "next-themes";

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

export const Hero = memo(function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<any>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [butterflyReady, setButterflyReady] = useState(false);
  const [splineError, setSplineError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    // Start loading butterfly immediately
    const timer = setTimeout(() => {
      setButterflyReady(true);
    }, 500); // Small delay for smooth transition

    return () => clearTimeout(timer);
  }, []);

  // Handle theme changes
  useEffect(() => {
    if (!splineRef.current) return;

    const updateMaterials = () => {
      const scene = splineRef.current;
      if (!scene) return;

      try {
        // Get all objects in the scene
        const robotParts = [
          scene.findObjectByName('Head'),
          scene.findObjectByName('Body'),
          scene.findObjectByName('Base')
        ].filter(Boolean);

        // Update materials for each part
        robotParts.forEach(part => {
          if (part && part.material) {
            if (theme === 'dark') {
              // Brighter and more reflective in dark mode
              part.material.color = { r: 0.9, g: 0.9, b: 0.95 };
              part.material.metalness = 1;
              part.material.roughness = 0.1;
              part.material.envMapIntensity = 1.5;
            } else {
              // More matte and darker in light mode
              part.material.color = { r: 0.7, g: 0.7, b: 0.75 };
              part.material.metalness = 0.8;
              part.material.roughness = 0.2;
              part.material.envMapIntensity = 1;
            }
          }
        });
      } catch (error) {
        console.warn('Error updating materials:', error);
      }
    };

    // Small delay to ensure scene is fully loaded
    const timer = setTimeout(updateMaterials, 100);
    return () => clearTimeout(timer);
  }, [theme]);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const handleSceneLoad = (splineApp: any) => {
    console.log('Scene loaded, setting up interactions');
    splineRef.current = splineApp;
    setIsLoaded(true);
    setSplineError(null);

    // Get the head object
    const head = splineApp.findObjectByName('Head');
    if (head) {
      // Animation function for smooth movement
      const animate = () => {
        // Lerp current rotation towards target rotation with faster response
        currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.15;
        currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.15;

        // Apply smoothed rotation to head
        head.rotation.x = currentRotation.current.x;
        head.rotation.y = currentRotation.current.y;

        // Continue animation
        animationFrame.current = requestAnimationFrame(animate);
      };

      // Start animation loop
      animate();

      // Add mouse move listener
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate normalized mouse position with increased sensitivity
        const mouseX = ((e.clientX - centerX) / (rect.width / 2)) * 0.8;
        const mouseY = ((e.clientY - centerY) / (rect.height / 2)) * 0.8;
        
        // Update target rotation with precise sync offsets
        targetRotation.current.x = mouseY + 0.5; // Vertical offset
        targetRotation.current.y = mouseX - 0.385; // Horizontal offset
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
      };
    }
  };

  const handleSplineError = (error: string) => {
    console.error('Spline error:', error);
    setSplineError(error);
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
        <div className="absolute inset-0 z-30">
          {butterflyReady && (
            <Butterfly className="scale-[0.3] transition-opacity duration-500" containerRef={containerRef} />
          )}
        </div>

        <div className="flex flex-col-reverse md:flex-row h-full relative z-20">
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

          <div className="w-full md:w-[55%] h-full relative z-10">
            <div className="absolute inset-0 pointer-events-auto">
              <SplineScene 
                key={retryCount}
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full touch-none"
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
