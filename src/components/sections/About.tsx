"use client";

import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Mail, Target, Rocket } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";

const teamMembers = [
  {
    id: 1,
    name: "Nawaraj Prajapati ",
    role: "Founder & CEO",
    image: "/assets/images/team/NawarajPrajapati.png",
    bio: "With over 20+ years of experience in IT education and software development, Nawaraj leads our vision of empowering students with practical tech skills.",
    social: {
      linkedin: "https://linkedin.com/in/nawarajprajapati",
      twitter: "https://twitter.com/nawarajprajapati",
      email: "nawaraj@neonmultipurpose.com"
    }
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&fit=crop&auto=format&compress",
    bio: "Expert in full-stack development and cloud technologies, Rajesh ensures our curriculum stays cutting-edge and industry-relevant.",
    social: {
      linkedin: "https://linkedin.com/in/rajesh",
      twitter: "https://twitter.com/rajesh",
      email: "mailto:rajesh@example.com"
    }
  },
  // Add more team members as needed
];

// Update the media items array with relevant project images
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Modern Development Environment",
    desc: "State-of-the-art coding workspace with latest tools and technologies",
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Collaborative Learning",
    desc: "Interactive pair programming and team collaboration sessions",
    url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&fit=crop",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "AI & Machine Learning",
    desc: "Advanced AI and machine learning training facilities",
    url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&fit=crop",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Cloud Infrastructure",
    desc: "Modern cloud computing and DevOps practices",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Mobile Development",
    desc: "Cross-platform mobile app development training",
    url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&fit=crop",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Web Technologies",
    desc: "Full-stack web development with modern frameworks",
    url: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 
            bg-clip-text text-transparent bg-gradient-to-r 
            from-gray-900 via-gray-700 to-gray-900
            dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 
            max-w-3xl mx-auto leading-relaxed px-4">
            Leading the way in IT education and professional development in Bhaktapur, 
            empowering the next generation of tech professionals.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow h-full
              border-2 border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide high-quality IT education that bridges the gap between academic learning 
                and industry requirements, empowering students to become successful tech professionals.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow h-full
              border-2 border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/30">
                  <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                To be the leading IT education provider in Nepal, recognized for excellence in 
                practical training and producing industry-ready professionals.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 -mx-4 sm:-mx-6 lg:-mx-8"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 
              text-gray-900 dark:text-gray-100">
              Our Gallery
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 
              max-w-2xl mx-auto leading-relaxed px-4">
              Take a visual tour of our facilities, training sessions, and student activities
            </p>
          </div>

          <div className="w-full max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8">
            <InteractiveBentoGallery
              mediaItems={mediaItems}
              title=""
              description=""
            />
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 
            text-gray-900 dark:text-gray-100">
            Meet Our Team
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 
            max-w-2xl mx-auto leading-relaxed px-4">
            Our experienced team of professionals is dedicated to providing the best IT education
            and guidance to our students.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 group
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
                border-2 border-gray-100 dark:border-gray-700">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 
                    font-semibold mb-3 sm:mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 
                    mb-4 sm:mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-6">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        className="text-gray-500 hover:text-primary dark:text-gray-400 
                          dark:hover:text-primary transition-colors duration-300
                          transform hover:-translate-y-1"
                      >
                        {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                        {platform === 'twitter' && <Twitter className="w-6 h-6" />}
                        {platform === 'email' && <Mail className="w-6 h-6" />}
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 