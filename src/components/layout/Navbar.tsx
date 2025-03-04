"use client";

import { useState, useEffect, useCallback, memo } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Download, Menu, X, ChevronDown } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Courses", href: "courses" },
  { name: "Why Choose Us", href: "why-choose-us" },
  { name: "Testimonials", href: "testimonials" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
] as const;

const NavLink = memo(function NavLink({ 
  item, 
  isActive, 
  onClick 
}: { 
  item: typeof navigation[number],
  isActive: boolean,
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`relative group px-3 py-2 xl:px-6 xl:py-3 text-sm xl:text-base font-medium overflow-hidden
        hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg
        ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
    >
      <span className="relative z-10 text-gray-700 dark:text-gray-300 
        group-hover:text-blue-600 dark:group-hover:text-blue-400 
        transition-colors duration-200 whitespace-nowrap">
        {item.name}
        {isActive && (
          <ChevronDown className="w-4 h-4 inline-block ml-1 animate-bounce" />
        )}
      </span>
      <div className={`absolute bottom-0 left-0 h-0.5 w-full transform 
        ${isActive ? 'scale-x-100' : 'scale-x-0'} 
        group-hover:scale-x-100 transition-transform duration-300 
        bg-gradient-to-r from-blue-600 to-purple-600`} />
    </button>
  );
});

const MobileNavLink = memo(function MobileNavLink({
  item,
  isActive,
  onClick
}: {
  item: typeof navigation[number],
  isActive: boolean,
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-2.5 rounded-lg text-base font-medium 
        transition duration-200 ${
          isActive
            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
    >
      {item.name}
      {isActive && (
        <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
      )}
    </button>
  );
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Update active section based on scroll position
    const sections = navigation.map(item => document.getElementById(item.href));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      }
    });
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-xl dark:bg-gray-900/90 shadow-lg shadow-gray-200/20 dark:shadow-gray-800/20' 
          : 'bg-white dark:bg-gray-900'
        } border-b border-gray-200/50 dark:border-gray-800/50`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center h-20 lg:h-24">
          {/* Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center gap-4 sm:gap-6">
            <Link href="/">
              <button 
                type="button"
                onClick={() => scrollToSection('home')}
                className="relative group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                aria-label="Home"
                data-testid="home-button"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                  opacity-0 group-hover:opacity-20 transition duration-300" />
                <Image 
                  src="/assets/images/logo.png"
                  alt="Neon Multipurpose Solution"
                  width={50}
                  height={50}
                  className="dark:invert transform group-hover:scale-105 transition duration-300
                    w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
                  loading="eager"
                  priority={true}
                />
              </button>
            </Link>
            <div className="border-l pl-3 sm:pl-4 lg:pl-6 border-gray-200 dark:border-gray-700">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                from-blue-600 via-purple-600 to-blue-600
                dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 line-clamp-1">
                Neon Multipurpose Solution
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 hidden xs:block">
                Empowering Future Through Technology
              </p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3 mr-6 xl:mr-16">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  item={item}
                  isActive={activeSection === item.href}
                  onClick={() => scrollToSection(item.href)}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="relative group p-2 sm:p-2.5 lg:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500
                    hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle theme"
                >
                  <div className="relative z-10 text-gray-700 dark:text-gray-300 transform group-hover:rotate-12 transition-transform duration-300">
                    {theme === 'dark' ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </button>
              )}

              {/* Download Button - Hidden on mobile */}
              <a
                href="/assets/documents/NMS_Admission_Form_2024.pdf"
                className="hidden sm:inline-flex relative group items-center px-4 py-2 lg:px-6 lg:py-3 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden
                  bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 
                  bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                <Download className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-white" />
                <span className="relative z-10 text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                  Admission Form
                </span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg text-gray-700 dark:text-gray-300 
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? 
                  <X className="w-5 h-5 sm:w-6 sm:h-6" /> : 
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden transform transition-all duration-300 ease-in-out
          fixed top-[80px] left-0 right-0 bg-white dark:bg-gray-900 
          shadow-lg dark:shadow-gray-800/50 max-h-[calc(100vh-80px)] overflow-y-auto
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="grid gap-1 py-2">
            {navigation.map((item) => (
              <MobileNavLink
                key={item.name}
                item={item}
                isActive={activeSection === item.href}
                onClick={() => scrollToSection(item.href)}
              />
            ))}
            {/* Download Button in mobile menu */}
            <a
              href="/assets/documents/NMS_Admission_Form_2024.pdf"
              className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-base font-medium 
                text-white bg-gradient-to-r from-blue-600 to-purple-600 
                hover:opacity-90 transition duration-200 mt-1
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Download className="w-4 h-4 mr-2" />
              Admission Form
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default memo(Navbar); 