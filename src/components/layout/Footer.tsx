"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

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
        { name: "Digital Marketing", href: "digital-marketing" },
        { name: "Graphic Design", href: "graphic-design" },
      ],
    },
  ],
};

const socialLinks = [
  { icon: Mail, href: "mailto:nmsmultipurpose@gmail.com", label: "Email" },
  { icon: Facebook, href: "https://www.facebook.com/NeonMultipurposeSolution", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/neonmultipurpose", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@neonmultipurpose", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/company/neonmultipurpose", label: "LinkedIn" }
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
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/30 bg-center [mask-image:linear-gradient(0deg,transparent,black)]" />
      
      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-600 via-purple-600 to-blue-600
              dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
              Neon Multipurpose Solution
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Empowering students with practical IT skills and industry-ready training in Bhaktapur.
              Join us to shape your future in technology.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 
                    dark:hover:text-blue-400 transition-colors duration-200
                    transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {navigation.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {section.name}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(item.href);
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 
                        dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 
                      dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Neon Multipurpose Solution. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 