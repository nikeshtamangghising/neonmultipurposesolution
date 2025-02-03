# Neon Multipurpose Solution - Static Web Application

## Overview

Neon Multipurpose Solution is an IT training institute located in Srijananagar, Bhaktapur, Nepal. This document outlines the structure and features of our static web application built with React.js.

## Tech Stack

| Category | Technology |
| Important | App should be static so that i can deploy in github pages for free |
|----------|------------|
| Create Project With | npm create vite@latest neonmultipurposesolution |
| Frontend | React.js with javascript |
| Styling | CSS |
| AI Processing | DeepSeek |
| UI Framework | React Native Paper (react-native-paper) |
| Deployment | GitHub Pages|
| Project Name | neonmultipurposesolution |





## Core Features

### 1. Navigation Bar
- 🏢 Institute logo (blue-colored)
- 📌 Sticky navigation with links:
  - Home
  - Courses
  - Download Form
  - Reviews
  - Contact
  - About Us

### 2. Hero Section
- 🎯 Full-width banner showcasing IT education
- ✨ Institute name display
- 🔵 "Apply Now" CTA button

### 3. Course Offerings

We offer comprehensive training in:

| Course | Description |
|--------|-------------|
| MERN Stack Development | Full-stack web development with MongoDB, Express, React, and Node.js |
| Python with Django | Backend development using Python's popular framework |
| Web Design | HTML, CSS, and modern design principles |
| React.js | Frontend development with React |
| Graphics Design | Digital design and visual content creation |
| App Development with Flutter | Cross-platform mobile app development |
| AI/ML (Python) | Artificial Intelligence and Machine Learning fundamentals |

Each course card includes:
- 📚 Course title
- 📝 Short description
- 🎨 Relevant icon/image

### 4. Form Download
- 📄 Downloadable PDF application form
- 🔗 Clear CTA for form access

### 5. Testimonials
Student reviews showcase:
- 👤 Student name
- 📚 Enrolled course
- ⭐ Rating system
- 💬 Student feedback

### 6. Footer Information

#### Contact Details
- 📍 **Location:** Srijananagar, Bhaktapur, Nepal
- 📧 **Email:** nmsmultipurpose@gmail.com
- 📱 **Phone:** +977 9808811777
- 📱 **TelePhone:** +977 015924949

#### Quick Links
- 🏠 Home
- 📚 Courses
- 📞 Contact
- ℹ️ About Us

#### Social Media
- [Platform links to be added]

## Responsive Design

📱 Mobile-first approach featuring:
- Responsive navigation with hamburger menu
- Adaptive layouts for all screen sizes
- Optimized images and content

## Future Enhancements

- [ ] Dark/Light Mode Toggle
- [ ] Comprehensive FAQ Section
- [ ] Newsletter Subscription System
- [ ] Course Registration Portal
- [ ] Student Dashboard

## Development Guidelines

This documentation serves as a comprehensive guide for developers implementing the web application. All features should prioritize:
- User experience
- Performance optimization
- Accessibility standards
- Responsive design principles

## Project Structure

```bash
neonmultipurposesolution/
├── public/
│   └── assets/
│       ├── images/
│       └── documents/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── courses/
│   │   │   ├── CourseCard.jsx
│   │   │   └── CourseList.jsx
│   │   ├── forms/
│   │   │   └── DownloadForm.jsx
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Icons.jsx
│   │   └── about/
│   │       └── About.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Download.jsx
│   │   ├── Reviews.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── hooks/
│   │   └── useScrollPosition.js
│   ├── context/
│   │   └── ThemeContext.js
│   ├── data/
│   │   ├── courses.js
│   │   └── testimonials.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── docs/
    └── CONTEXT.md
```

Key changes from default Vite React setup:

1. `index.js` is now `main.jsx` (Vite's default)
2. `index.html` moved to root directory (Vite requirement)
3. Added `vite.config.js` instead of other config files
4. Simplified `public` directory structure
5. CSS file renamed to `index.css` (Vite convention)

Initial setup steps:
1. Create project: `npm create vite@latest neonmultipurposesolution -- --template react`
2. Navigate to project: `cd neonmultipurposesolution`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`

This folder structure follows React.js best practices and provides:
1. Clear separation of concerns
2. Modular component organization
3. Easy scalability
4. Intuitive navigation for developers
5. Efficient code reusability

The structure is optimized for a medium-sized static web application while maintaining flexibility for future growth and feature additions.

### Directory Structure Explanation

- **/public**: Static assets and HTML template
  - **/assets**: Images, icons, and downloadable documents
  
- **/src**: Main source code directory
  - **/components**: Reusable UI components organized by feature
  - **/pages**: Top-level page components
  - **/styles**: Global styles and Tailwind configuration
  - **/utils**: Helper functions and constants
  - **/hooks**: Custom React hooks
  - **/context**: React context providers
  - **/data**: Static data and content
