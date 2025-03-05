"use client";

import { CourseStack } from "@/components/ui/course-stack";
import { Code2, Smartphone, Cloud, Database, Bot, Shield } from "lucide-react";

const coursesData = [
  {
    href: "/courses/web-dev",
    title: "Full-Stack Web Development",
    description: "Master modern web development with React, Next.js, and Node.js. Learn real-world practices including CI/CD, testing, and deployment strategies. Build scalable applications used by industry leaders.",
    duration: "3 months",
    level: "Intermediate" as const,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&fit=crop",
    highlights: [
      "Modern React & Next.js",
      "Backend with Node.js",
      "Database Design",
      "DevOps & CI/CD",
      "API Development",
      "Security & Auth"
    ],
    prerequisites: [
      "JavaScript Basics",
      "HTML & CSS",
      "Git Version Control",
      "Command Line",
      "Problem Solving",
      "HTTP Fundamentals"
    ],
    tools: [
      "VS Code",
      "GitHub",
      "Docker",
      "AWS/Vercel",
      "MongoDB/PostgreSQL",
      "TypeScript"
    ],
    outcomes: [
      "Build Full-Stack Apps",
      "Deploy & Scale Apps",
      "Implement Security",
      "Create REST APIs",
      "Design Databases",
      "Write Clean Code"
    ],
    schedule: {
      hoursPerWeek: 15,
      totalModules: 12,
      projectCount: 4
    }
  },
  {
    href: "/courses/mobile-dev",
    title: "Cross-Platform Mobile Development",
    description: "Create native mobile apps for iOS and Android using React Native. Learn app store deployment, push notifications, and offline-first strategies. Build apps that users love with modern mobile development practices.",
    duration: "3 months",
    level: "Beginner" as const,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&fit=crop",
    highlights: [
      "React Native Core",
      "Native Features",
      "App Store Deploy",
      "State Management",
      "Offline Storage",
      "Push Notifications"
    ],
    prerequisites: [
      "JavaScript Basics",
      "React Fundamentals",
      "Mobile UI/UX",
      "API Basics",
      "NPM/Yarn",
      "Git Basics"
    ],
    tools: [
      "Expo",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Redux/MobX",
      "React Navigation"
    ],
    outcomes: [
      "Build Mobile Apps",
      "Native Integration",
      "App Store Launch",
      "Offline Support",
      "Push Notifications",
      "Performance Tuning"
    ],
    schedule: {
      hoursPerWeek: 12,
      totalModules: 10,
      projectCount: 3
    }
  },
  {
    href: "/courses/ai-ml",
    title: "AI & Machine Learning",
    description: "Dive into artificial intelligence and machine learning. Learn to build and deploy ML models, work with neural networks, and implement real-world AI solutions. Master the latest techniques in deep learning and natural language processing.",
    duration: "3 months",
    level: "Advanced" as const,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&fit=crop",
    highlights: [
      "Neural Networks",
      "NLP Applications",
      "Computer Vision",
      "MLOps & Deploy",
      "Model Training",
      "AI Ethics"
    ],
    prerequisites: [
      "Python Programming",
      "Linear Algebra",
      "Statistics",
      "Data Analysis",
      "Calculus Basics",
      "Scientific Computing"
    ],
    tools: [
      "TensorFlow",
      "PyTorch",
      "Jupyter",
      "Scikit-learn",
      "Pandas/NumPy",
      "Hugging Face"
    ],
    outcomes: [
      "Build ML Models",
      "Deploy AI Solutions",
      "NLP Applications",
      "Computer Vision",
      "Model Optimization",
      "Production Pipeline"
    ],
    schedule: {
      hoursPerWeek: 20,
      totalModules: 15,
      projectCount: 5
    }
  },
  {
    href: "/courses/cloud-computing",
    title: "Cloud Architecture & DevOps",
    description: "Master cloud services and DevOps practices. Learn to design, deploy, and manage scalable cloud infrastructure using AWS, Azure, and Google Cloud. Implement modern DevOps practices and automate development workflows.",
    duration: "3 months",
    level: "Advanced" as const,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&fit=crop",
    highlights: [
      "Cloud Architecture",
      "Containerization",
      "Infrastructure as Code",
      "Security Best Practices",
      "Microservices",
      "Serverless Computing"
    ],
    prerequisites: [
      "Linux Basics",
      "Networking",
      "Command Line",
      "Basic Scripting",
      "Git Version Control",
      "Cloud Concepts"
    ],
    tools: [
      "AWS/Azure/GCP",
      "Kubernetes",
      "Terraform",
      "Docker",
      "Jenkins",
      "Prometheus"
    ],
    outcomes: [
      "Design Cloud Systems",
      "Implement CI/CD",
      "Container Management",
      "Cost Optimization",
      "Security Controls",
      "Auto Deployment"
    ],
    schedule: {
      hoursPerWeek: 18,
      totalModules: 14,
      projectCount: 4
    }
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-4 sm:py-6 md:py-8 lg:py-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
              bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600
              dark:from-gray-100 dark:to-gray-400 
              leading-tight sm:leading-tight md:leading-tight">
              Our Courses
            </h2>
            <div className="h-1 w-1/2 mx-auto mt-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
              transform transition-all duration-300 group-hover:scale-x-100"></div>
          </div>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 
            max-w-2xl mx-auto leading-relaxed px-4">
            Industry-focused courses designed to prepare you for real-world challenges. 
            Learn from experts and build production-ready skills.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-auto pb-4 sm:pb-6 md:pb-8 mt-16 sm:mt-20 md:mt-24 lg:mt-28">
          <CourseStack courses={coursesData} />
        </div>
      </div>
    </section>
  );
} 