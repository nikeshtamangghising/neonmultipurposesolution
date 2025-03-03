"use client";

import { Card } from "@/components/ui/card";
import { Code2, Smartphone, ArrowRight } from "lucide-react";

const coursesData = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Learn modern web development with React, Node.js, and MongoDB",
    duration: "6 months",
    lessons: "150+",
    level: "Intermediate",
    icon: Code2,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/web-dev.jpg"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps with React Native",
    duration: "4 months",
    lessons: "100+",
    level: "Beginner",
    icon: Smartphone,
    technologies: ["React Native", "JavaScript", "Firebase"],
    image: "/images/mobile-dev.jpg"
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6
            bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600
            dark:from-gray-100 dark:to-gray-400">
            Our Courses
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 
            max-w-2xl mx-auto leading-relaxed px-4">
            Explore our industry-focused courses designed to prepare you for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 
                  text-gray-900 dark:text-gray-100">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <div className="flex items-start justify-between">
                  <div className="w-fit rounded-lg border-[0.75px] border-border/20 dark:border-border/20 
                    bg-background/80 dark:bg-background/10 p-4 transition-all duration-300 
                    group-hover:bg-primary dark:group-hover:bg-primary 
                    group-hover:text-white dark:group-hover:text-black 
                    group-hover:scale-110 group-hover:rotate-3 
                    dark:group-hover:border-primary/50">
                    <course.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:text-primary/90">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:text-primary/90">
                      {course.lessons} Lessons
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:text-primary/90">
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full 
                        bg-secondary/80 dark:bg-secondary/20 
                        text-secondary-foreground dark:text-secondary-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
                    text-primary hover:text-white dark:hover:text-black
                    bg-primary/10 hover:bg-primary 
                    rounded-full transition-all duration-300
                    group-hover:translate-x-2 mt-4"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 