"use client";

import { TestimonialCarousel } from "@/components/ui/testimonial";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Sabin Shrestha",
    avatar: "/assets/images/testimonials/student1.jpg",
    description: "The web development course at Neon was transformative. The hands-on approach and industry-relevant curriculum helped me land my dream job as a full-stack developer.",
    course: "Web Development"
  },
  {
    id: 2,
    name: "Manish Hengaju",
    avatar: "/assets/images/testimonials/student2.jpg",
    description: "Learning Flutter here was an amazing experience. The instructors are highly knowledgeable and always ready to help. I've already published two apps on the Play Store!",
    course: "Flutter App Development"
  },
  {
    id: 3,
    name: "Kaushal Bhuju",
    avatar: "/assets/images/testimonials/student3.jpg",
    description: "The practical exposure to real-world projects and Python with Django was invaluable. The course structure is well-planned and industry-focused.",
    course: "Python with Django"
  },
  {
    id: 4,
    name: "Rabin Karki",
    avatar: "/assets/images/testimonials/student4.png",
    description: "The MERN Stack course gave me the skills to build robust web applications. The supportive community and expert guidance were key to my success.",
    course: "MERN Stack"
  },
  {
    id: 5,
    name: "Nikesh Tamang",
    avatar: "/assets/images/testimonials/student5.jpg",
    description: "I mastered Web Development at Neon, and the real-world projects prepared me for my current role as a front-end developer.",
    course: "Web Development"
  },
  {
    id: 6,
    name: "Shree Krishna Karki",
    avatar: "/assets/images/testimonials/student6.png",
    description: "The Flutter App Development course was a game-changer. I built and deployed my first app within months, thanks to the practical training.",
    course: "Flutter App Development"
  },
  {
    id: 7,
    name: "Bipin Shaiju",
    avatar: "/assets/images/testimonials/student7.jpg",
    description: "Learning Python with Django here opened doors to backend development for me. The instructors made complex concepts easy to grasp.",
    course: "Python with Django"
  },
  {
    id: 8,
    name: "Ravi Basnet",
    avatar: "/assets/images/testimonials/student8.jpg",
    description: "The MERN Stack training was top-notch. I now work as a full-stack developer, and I owe it to the comprehensive curriculum and mentorship.",
    course: "MERN Stack"
  },
  {
    id: 9,
    name: "Ankur Raya",
    avatar: "/assets/images/testimonials/student9.png",
    description: "The Web Development course exceeded my expectations. I gained hands-on experience that helped me secure a job right after completion.",
    course: "Web Development"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 
            bg-clip-text text-transparent bg-gradient-to-b 
            from-gray-900 to-gray-600 
            dark:from-neutral-50 dark:to-neutral-400">
            Student Testimonials
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 
            text-gray-900 dark:text-gray-100">
            What Our Students Say
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 
            max-w-2xl mx-auto leading-relaxed">
            Hear from our successful students about their learning journey and 
            experiences at Neon Multipurpose Solution.
          </p>
        </div>

        <TestimonialCarousel 
          testimonials={TESTIMONIAL_DATA}
          className="max-w-5xl mx-auto h-[400px]"
        />
      </div>
    </section>
  );
} 