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
      "Modern React & Next.js patterns",
      "Backend development with Node.js",
      "Database design & optimization",
      "DevOps & deployment workflows",
      "API design and implementation",
      "Authentication and authorization",
      "Real-time applications with WebSocket",
      "Performance optimization techniques"
    ],
    prerequisites: [
      "Basic JavaScript knowledge",
      "Understanding of HTML & CSS",
      "Familiarity with Git",
      "Basic command line usage",
      "Problem-solving mindset",
      "Basic understanding of HTTP"
    ],
    tools: [
      "VS Code",
      "GitHub",
      "Docker",
      "AWS/Vercel",
      "MongoDB/PostgreSQL",
      "Redis",
      "Jest/Cypress",
      "TypeScript"
    ],
    outcomes: [
      "Build full-stack web applications",
      "Deploy and scale applications",
      "Implement modern security practices",
      "Create responsive UI designs",
      "Develop RESTful and GraphQL APIs",
      "Implement real-time features",
      "Write clean, maintainable code",
      "Work with modern development tools"
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
      "React Native fundamentals",
      "Native device features",
      "App store optimization",
      "Performance optimization",
      "State management with Redux",
      "Offline data synchronization",
      "Push notifications",
      "Mobile UI/UX best practices",
      "App monetization strategies",
      "Analytics implementation"
    ],
    prerequisites: [
      "JavaScript basics",
      "React fundamentals",
      "Mobile UI/UX concepts",
      "Basic understanding of APIs",
      "Familiarity with npm/yarn",
      "Version control with Git"
    ],
    tools: [
      "Expo",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Redux/MobX",
      "React Navigation",
      "AsyncStorage",
      "React Native Testing Library"
    ],
    outcomes: [
      "Develop cross-platform mobile apps",
      "Implement native device features",
      "Publish to app stores",
      "Create engaging mobile UIs",
      "Handle offline data storage",
      "Implement push notifications",
      "Optimize app performance",
      "Integrate third-party services"
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
      "Neural networks & deep learning",
      "Natural language processing",
      "Computer vision applications",
      "MLOps & model deployment",
      "Reinforcement learning",
      "Time series analysis",
      "Generative AI models",
      "Model optimization",
      "Ethics in AI",
      "Large language models"
    ],
    prerequisites: [
      "Python programming",
      "Linear algebra basics",
      "Statistics fundamentals",
      "Data analysis experience",
      "Calculus fundamentals",
      "Basic ML concepts",
      "Data preprocessing skills",
      "Scientific computing"
    ],
    tools: [
      "TensorFlow",
      "PyTorch",
      "Jupyter Notebooks",
      "Google Colab",
      "Scikit-learn",
      "Pandas/NumPy",
      "Hugging Face",
      "MLflow",
      "Docker",
      "Git LFS"
    ],
    outcomes: [
      "Build and train ML models",
      "Deploy AI solutions",
      "Implement NLP applications",
      "Create computer vision systems",
      "Develop generative AI models",
      "Optimize model performance",
      "Handle large-scale datasets",
      "Build production ML pipelines"
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
      "Multi-cloud architecture",
      "Container orchestration",
      "Infrastructure as Code",
      "Security best practices",
      "Microservices architecture",
      "Serverless computing",
      "Cloud cost optimization",
      "High availability design",
      "Disaster recovery",
      "Performance monitoring"
    ],
    prerequisites: [
      "Linux administration",
      "Networking basics",
      "Command line proficiency",
      "Basic scripting skills",
      "Version control with Git",
      "Basic cloud concepts",
      "Security fundamentals",
      "Basic programming skills"
    ],
    tools: [
      "AWS/Azure/GCP",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Docker",
      "Ansible",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "HashiCorp Vault"
    ],
    outcomes: [
      "Design cloud architectures",
      "Implement CI/CD pipelines",
      "Manage containerized applications",
      "Optimize cloud costs",
      "Implement security controls",
      "Monitor cloud infrastructure",
      "Automate deployments",
      "Handle cloud migrations",
      "Implement disaster recovery",
      "Scale applications effectively"
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
    <section id="courses" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
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

        <div className="relative max-w-5xl mx-auto min-h-[450px] xs:min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px]
          mb-4 sm:mb-6 md:mb-8 lg:mb-12 overflow-visible">
          <CourseStack courses={coursesData} />
        </div>
      </div>
    </section>
  );
} 