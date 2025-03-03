"use client";

import React from "react";
import { Users, Trophy, Award, Headphones, Monitor, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 
            bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600
            dark:from-gray-100 dark:to-gray-400">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 
            max-w-3xl mx-auto leading-relaxed px-4">
            Discover what makes us the preferred choice for IT education in Bhaktapur
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 
          xl:grid-rows-[repeat(2,minmax(180px,1fr))] xl:gap-8">
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Expert Instructors"
            description="Learn from industry professionals with years of practical experience"
          />
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<Trophy className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Small Class Sizes"
            description="Personalized attention with limited students per batch"
          />
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<Award className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Industry Recognition"
            description="Certificates recognized by top IT companies"
          />
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<Headphones className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="24/7 Support"
            description="Round-the-clock assistance for all your queries"
          />
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<Monitor className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Modern Facilities"
            description="State-of-the-art computer labs and learning resources"
          />
          <GridItem
            area="xl:col-span-4 xl:row-span-1"
            icon={<TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Career Growth"
            description="Job placement assistance and career counseling"
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactElement;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] sm:min-h-[18rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border-[0.75px] border-border p-3 sm:p-4">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 
          overflow-hidden rounded-xl border-[0.75px] bg-background 
          p-6 sm:p-8 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border-[0.75px] border-border 
              bg-gray-100 dark:bg-muted 
              p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:rotate-3">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold font-sans 
                tracking-tight text-balance text-foreground">
                {title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}; 