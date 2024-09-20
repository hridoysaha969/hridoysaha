import foodDeliver from "@/assets/projectImg/project-1.jpg";
export const servicesArray = [
  {
    id: 1,
    price: 29,
    title: "Basic",
    description: "Ideal for small projects or personal websites.",
    servicesList: [
      {
        data: "Responsive design",
      },
      {
        data: "Basic functionality(React.js/Next.js)",
      },
      {
        data: "Basic UI/UX design",
      },
      {
        data: "Basic contact form",
      },
      {
        data: "Cross-browser compatibility",
      },
    ],
  },
  {
    id: 2,
    price: 199,
    title: "Standard",
    description:
      "Perfect for businesses or growing projects that need both frontend and backend development with enhanced functionality.",
    servicesList: [
      {
        data: "Frontend with React.js or Next.js",
      },
      {
        data: "Backend with Node.js/Express",
      },
      {
        data: "API integration",
      },
      {
        data: "Database setup (MongoDB or Firebase)",
      },
      {
        data: "Up to 5 pages",
      },
      {
        data: "User authentication",
      },
      {
        data: "Basic SEO optimization",
      },
    ],
  },
  {
    id: 3,
    price: 699,
    title: "Premium",
    description:
      "A comprehensive solution for complex, high-performance web applications with advanced features.",
    servicesList: [
      {
        data: "Everything in the Standard Plan",
      },
      {
        data: "Custom API creation",
      },
      {
        data: "Advanced database management",
      },
      {
        data: "E-commerce functionality (if required)",
      },
      {
        data: "Advanced UI/UX design",
      },
      {
        data: "Admin dashboard",
      },
      {
        data: "Up to 10+ pages",
      },
      {
        data: "Full SEO optimization",
      },
    ],
  },
];

export const projectArray = [
  {
    _id: 1,
    title: "Food Delivery",
    category: "web-development",
    description:
      "Developed a full-stack Food Delivery web application using Next.js and MongoDB. The app features a user-friendly interface for browsing and ordering meals, secure user authentication, dynamic product listings, and a real-time order management system. Integrated a responsive design and optimized the backend for efficient data handling and seamless performance.",
    technologies: "Next.js, MongoDB, Mongoose, APIs, JWT",
    image: foodDeliver,
    liveLink: "https://hsfoodstore.netlify.app/",
  },
  {
    _id: 1,
    title: "Go Task",
    category: "web-design",
    description:
      "Developed a full-stack Trainee Management web application using Next.js and Firebase. The app features a user-friendly interface for browsing and searching result, dynamic profile page, and dashboard management. Integrated a responsive design and optimized the backend for efficient data handling and seamless performance.",
    technologies: "React.js, React hooks, Material UI Icons",
    image: foodDeliver,
    liveLink: "https://gotask-b2c.netlify.app/",
  },
];
