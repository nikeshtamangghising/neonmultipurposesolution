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
    image: "/assets/images/team/tech-director.jpg",
    bio: "Expert in full-stack development and cloud technologies, Rajesh ensures our curriculum stays cutting-edge and industry-relevant.",
    social: {
      linkedin: "https://linkedin.com/in/rajeshkumar",
      twitter: "https://twitter.com/rajeshkumar",
      email: "rajesh@neonmultipurpose.com"
    }
  },
  // Add more team members as needed
];

// Add the media items array
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Campus View",
    desc: "Our modern training facility",
    url: "/assets/images/gallery/campus.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Student Projects",
    desc: "Live project demonstrations",
    url: "/assets/videos/projects-demo.mp4",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Training Session",
    desc: "Interactive learning environment",
    url: "/assets/images/gallery/training.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Lab Facilities",
    desc: "State-of-the-art equipment",
    url: "/assets/images/gallery/lab.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  // ... add more items as needed
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