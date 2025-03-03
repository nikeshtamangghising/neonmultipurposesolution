"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Download } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navigation = [
    { name: "Home", href: "home" },
    { name: "Courses", href: "courses" },
    { name: "Why Choose Us", href: "why-choose-us" },
    { name: "Testimonials", href: "testimonials" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];

  // Update the download function
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    try {
      // Use window.location to trigger a direct download
      window.location.href = '/assets/documents/NMS_Admission_Form_2024.pdf';
    } catch (error) {
      console.error('Download failed:', error);
      alert('Sorry, the admission form is currently unavailable. Please try again later or contact support.');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-lg' : 'bg-white dark:bg-gray-900'}
      border-b border-gray-200/50 dark:border-gray-700/50`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center gap-6 transition-transform hover:scale-105">
            <button 
              onClick={() => scrollToSection('home')}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            >
              <Image 
                src="/assets/logo.svg" 
                alt="Neon Multipurpose Solution" 
                width={150}
                height={40}
              />
            </button>
            <div className="hidden lg:block border-l pl-6 border-gray-200 dark:border-gray-700">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-gray-900 via-gray-700 to-gray-900
                dark:from-gray-100 dark:via-gray-300 dark:to-gray-100
                tracking-tight">
                Neon Multipurpose Solution
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                Empowering Future Through Technology
              </p>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-2">
              {navigation.map((section) => (
                <button
                  key={section.name}
                  onClick={() => scrollToSection(section.href)}
                  className="px-5 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 
                    hover:text-blue-600 dark:hover:text-blue-400 
                    rounded-lg transition-all duration-200 
                    hover:bg-blue-50 dark:hover:bg-blue-900/30
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    capitalize mx-1"
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/assets/documents/NMS_Admission_Form_2024.pdf"
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 
                bg-blue-600 hover:bg-blue-700 
                text-white rounded-lg transition-all duration-200
                hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-blue-500
                group"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              <span>Admission Form</span>
            </a>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg 
                bg-gray-100 dark:bg-gray-800 
                text-gray-800 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                transition-all duration-200
                hover:shadow-lg hover:-translate-y-0.5
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? 
                <Sun size={20} className="transition-transform duration-500 hover:rotate-180" /> : 
                <Moon size={20} className="transition-transform duration-500 hover:-rotate-90" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 
                ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1.5 
                transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mt-1.5 
                transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((section) => (
              <button
                key={section.name}
                onClick={() => scrollToSection(section.href)}
                className="block w-full px-3 py-2 text-base font-medium 
                  text-gray-700 dark:text-gray-200 
                  hover:bg-gray-100 dark:hover:bg-gray-800 
                  rounded-lg transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  capitalize"
              >
                {section.name}
              </button>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <a
                href="/assets/documents/NMS_Admission_Form_2024.pdf"
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-2 
                  px-3 py-2 text-base font-medium 
                  text-white bg-blue-600 hover:bg-blue-700 
                  rounded-lg transition-all duration-200
                  hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  group"
              >
                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                <span>Admission Form</span>
              </a>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg 
                  bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle theme"
              >
                {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 