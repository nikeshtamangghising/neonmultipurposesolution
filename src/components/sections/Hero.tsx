"use client";

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <section id="home" className="pt-[64px] bg-white dark:bg-black">
      <Card className="w-full h-[450px] md:h-[700px] bg-white dark:bg-black 
        relative overflow-hidden shadow-xl dark:shadow-none
        border-border/10 dark:border-border/5
        rounded-none border-t-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="currentColor"
        />
        
        <div className="flex flex-col md:flex-row h-full items-center justify-center gap-8 px-4">
          <div className="w-full md:w-1/2 p-4 md:p-8 relative z-10 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-b from-gray-900 to-gray-600 dark:from-neutral-50 dark:to-neutral-400 
              mb-4 md:mb-8 text-center md:text-left">
              Neon Multipurpose Solution
            </h2>
            <p className="mt-2 md:mt-4 text-gray-600 dark:text-neutral-300 
              max-w-2xl text-xl md:text-3xl text-center md:text-left">
              Discover comprehensive IT training programs designed to launch your tech career.
              Learn from industry experts and gain practical experience.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-[250px] md:h-[500px] relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="absolute inset-0"
            />
          </div>
        </div>
      </Card>
    </section>
  );
} 