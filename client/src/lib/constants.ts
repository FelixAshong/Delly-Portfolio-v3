export const FRONTEND_SKILLS = [
  { name: "HTML5 & CSS3", percentage: 98 },
  { name: "JavaScript (ES6+)", percentage: 90 },
  { name: "React.js", percentage: 92 },
  { name: "Tailwind CSS", percentage: 88 },
  { name: "Next.js", percentage: 85 }
];

export const BACKEND_SKILLS = [
  { name: "Node.js", percentage: 90 },
  { name: "Express.js", percentage: 70 },
  { name: "MongoDB", percentage: 50 },
  { name: "SQL Databases", percentage: 50 },
  { name: "GraphQL", percentage: 45 }
];

export const TOOLS = [
  { 
    name: "Git & GitHub", 
    percentage: 98,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  { 
    name: "React", 
    percentage: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Photoshop", 
    percentage: 60,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"
  },
  { 
    name: "Figma", 
    percentage: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  },
  { 
    name: "Node.js", 
    percentage: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  { 
    name: "VS Code", 
    percentage: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
  }
];

export const PROJECTS = [
  {
    title: "cemar-counselling",
    description: "A comprehensive counselling platform with real-time chat, appointment scheduling, and resource management.",
    image: "/projects/counseling-app.png",
    category: "Web Development",
    categoryColor: "red",
    technologies: ["React", "Node.js", "Tailwind CSS"],
    link: "https://cemar-counselling.vercel.app",
    github: "https://github.com/FelixAshong/cemar-counselling"
  },
  {
    title: "UG visitor-check-in",
    description: "The University of Ghana Visitor Management System is a comprehensive solution for managing visitors on campus. This modern web application provides a streamlined check-in/check-out process, visitor tracking, and advanced security features.",
    image: "/projects/visitor-check-in.png",
    category: "Web Development",
    categoryColor: "blue",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://v0-animated-react-ui.vercel.app/",
    github: "https://github.com/FelixAshong/visitor-check-in"
  },
  {
    title: "kthtelemedicine (Korle-Bu)",
    description: "This project aims to develop a web-based telemedicine platform for the Korle-Bu Teaching Hospital (KBTH) to enable remote patient monitoring, virtual consultations, and efficient healthcare delivery.",
    image: "/projects/hospital-management.jpg",
    category: "Web Development",
    categoryColor: "green",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "https://v0-telemedicine-platform.vercel.app/",
    github: "https://github.com/FelixAshong/kthtelemedicine"
  },
  {
    title: "Bentilzone Online Restaurant App",
    description: "A full-featured Bentilzone Online Restaurant App platform with shopping cart and payment integration.",
    image: "/projects/Restaurant.png",
    category: "Web Development",
    categoryColor: "purple",
    technologies: ["ReactJS (Typescript)", "Redux", "TailwindCSS", "Firebase"],
    link: "https://zone-restaurant.vercel.app/",
    github: "https://github.com/FelixAshong/Restaurant-responsive"
  },
  {
    title: "movie-house-booking",
    description: "A movie house booking platform with real-time booking and payment integration.",
    image: "/projects/HOME PAGE.png",
    category: "UI/UX Design",
    categoryColor: "yellow",
    technologies: ["MongoDB", "Express", "Tailwind CSS","ReactJS","NodeJS"],
    link: "https://www.figma.com/design/c1uAMPfyDyezd7SZExXWJD/MLC?node-id=38-3298&t=4BqV1fwHfOJtlOYA-1",
    github: "https://github.com/FelixAshong/movie-house-booking"
  },
  {
    title: "Foodie - Food Delivery App",
    description: "A food delivery app with real-time order tracking and payment integration.",
    image: "/projects/mobile.jpg",
    category: "Mobile Apps",
    categoryColor: "orange",
    technologies: ["React Native", "Expo"],
    link: "https://github.com/FelixAshong/foodie",
    github: "https://github.com/FelixAshong/foodie"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Working with Mr.Felix Ashong was a game-changer for our business. He delivered our e-commerce platform ahead of schedule and with more features than we initially requested. His technical expertise and communication skills made the development process smooth and stress-free.",
    name: "Jacob Antwi",
    title: "CEO, StyleHub",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    quote: "Mr. Felix transformed our outdated site into a modern, responsive platform that's increased our conversion rate by 40%. His attention to detail and commitment to quality are exceptional. We've already hired him for two additional projects.",
    name: "Addae Jeffery",
    title: "Client",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&h=120&q=80"
  }
];

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: "ri-github-fill", url: "https://github.com/FelixAshong", hoverColor: "red" },
  { name: "LinkedIn", icon: "ri-linkedin-fill", url: "https://www.linkedin.com/in/felix-ashong/", hoverColor: "yellow" },
  { name: "Twitter", icon: "ri-twitter-fill", url: "https://x.com/phleodelly", hoverColor: "green" },
  { name: "Instagram", icon: "ri-instagram-fill", url: "https://www.instagram.com/phleodelly/", hoverColor: "red" }
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and user-friendly web applications using the latest technologies.",
    features: [
      "React & Next.js Development",
      "TypeScript Implementation",
      "Responsive Design",
      "Performance Optimization"
    ]
  },
  {
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with a focus on user experience.",
    features: [
      "Wireframing & Prototyping",
      "User Interface Design",
      "User Experience Design",
      "Design Systems"
    ]
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications that work seamlessly on all devices.",
    features: [
      "React Native Development",
      "Cross-platform Solutions",
      "Native Performance",
      "App Store Deployment"
    ]
  }
];
