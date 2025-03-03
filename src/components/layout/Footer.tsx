"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const navigation = {
  sections: [
    {
      id: "useful",
      name: "Quick Links",
      items: [
        { name: "Home", href: "home" },
        { name: "Courses", href: "courses" },
        { name: "Why Choose Us", href: "why-choose-us" },
        { name: "Testimonials", href: "testimonials" },
        { name: "About", href: "about" },
        { name: "Contact", href: "contact" },
      ],
    },
    {
      id: "courses",
      name: "Our Courses",
      items: [
        { name: "Web Development", href: "web-dev" },
        { name: "Mobile Apps", href: "mobile-apps" },
        { name: "Data Science", href: "data-science" },
      ],
    },
  ],
};

const socialLinks = [
  { icon: Mail, href: "mailto:info@neonmultipurpose.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/neonmultipurpose", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/neonmultipurpose", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/neonmultipurpose", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/company/neonmultipurpose", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@neonmultipurpose", label: "YouTube" },
];

const contactInfo = [
  { 
    icon: MapPin, 
    text: "Srijananagar, Bhaktapur, Nepal", 
    href: "https://maps.google.com" 
  },
  { 
    icon: Phone, 
    text: "+977 9808811777, +977 015924949", 
    href: "tel:+9779808811777" 
  },
  { 
    icon: Mail, 
    text: "nmsmultipurpose@gmail.com", 
    href: "mailto:nmsmultipurpose@gmail.com" 
  },
];

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="border-t border-border/10 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-full px-6 py-16">
        {/* Logo and About Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-16 mb-16 max-w-full">
          <div className="flex-shrink-0">
            <Link href="/">
              <img 
                src="/assets/images/logo.png" 
                alt="Neon Multipurpose Solution" 
                className="h-32 w-auto dark:invert hover:scale-105 transition-transform"
              />
            </Link>
          </div>
          <div className="flex-1 text-center md:text-left pt-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg space-y-4">
              <span className="block">
                Neon Multipurpose Solution is a leading IT education provider in Bhaktapur, 
                dedicated to empowering students with practical skills and industry knowledge.
              </span>
              <span className="block">
                With state-of-the-art facilities and expert instructors, we offer comprehensive 
                training programs in web development, mobile applications, and data science. 
                Our hands-on approach ensures students gain real-world experience while learning.
              </span>
              <span className="block">
                We're committed to nurturing talent and preparing the next generation of tech 
                professionals through quality education and industry-focused training.
              </span>
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-16">
            {navigation.sections.map((section) => (
              <div key={section.name} className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  {section.name}
                </h3>
                <ul className="mt-4 space-y-4 w-full">
                  {section.items.map((item) => (
                    <li key={item.name} className="w-full">
                      <Link
                        href={`#${item.href}`}
                        className="text-base text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors block w-full"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Contact Info</h3>
            <ul className="space-y-6">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-4 text-gray-600 dark:text-gray-300 
                      hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="h-6 w-6 flex-shrink-0" />
                    <span className="text-base">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle and Social Links */}
          <div className="space-y-8">
            {/* Theme Toggle */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Theme</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTheme("light")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                    text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition-colors duration-200"
                >
                  <Sun className="h-5 w-5" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                    text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 
                    transition-colors duration-200"
                >
                  <Moon className="h-5 w-5" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                      text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary 
                      transition-all duration-200 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/10 mt-8 pt-8 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Neon Multipurpose Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 