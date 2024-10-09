import p1 from "@/assets/projectImg/project-1.jpg";
import p2 from "@/assets/projectImg/project-2.png";
export const servicesArray = [
  {
    id: 1,
    package: "hsbasic01",
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
    package: "hsstandard02",
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
    package: "hspremium03",
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
    title: "CryptoByte",
    sub_title: "Real-Time Crypto Market Updates & Insights.",
    category: "web-design",
    overview:
      "CryptoByte is a cutting-edge cryptocurrency tracking web application that provides users with real-time updates on market trands, including 24-hour highs, lows and market cap on various coins. CryptoByte allows visitors to monitor the fast-moving world of cryptocurrency with ease.",
    technologies: "Vite + React, API Integration, Firebase",
    challanges: [
      {
        title: "Real-Time Data Management",
        description:
          "Fetching and displaying constantly updating data without compromising performance was a key challenge. Implementing efficient API fetching strategies was critical.",
      },
      {
        title: "Authentication Security",
        description:
          "Ensuring a smooth, secure login experience using Firebase while protecting user data was an important priority.",
      },
      {
        title: "UI/UX Optimization",
        description:
          "Balancing large amounts of crypto data and providing a clean, user-friendly interface for visitors to quickly access essential information.",
      },
    ],
    solutions: [
      {
        title: "Fast Load Times with Vite",
        description:
          "Leveraging Vite's lightning-fast build tool ensured that CryotoByte loads quickly even with real-time updates.",
      },
      {
        title: "Efficient API Fetching",
        description:
          "By using API data caching and error handling, the application maintains up-to-date crypto information while reducing API calls to improve performance.",
      },
      {
        title: "User Authentication with Firebase",
        description:
          "Implementing Firebase allowed for easy integration of secure login and user management features, offering users a personalized experience.",
      },
    ],
    image: p1,
    liveLink: "https://bytecrypto.netlify.app/",
    githubLink: "https://github.com/hridoysaha969/cryptobyte",
  },
  {
    _id: 2,
    title: "Go Task",
    category: "web-development",
    description:
      "Developed a full-stack Trainee Management web application using Next.js and Firebase. The app features a user-friendly interface for browsing and searching result, dynamic profile page, and dashboard management. Integrated a responsive design and optimized the backend for efficient data handling and seamless performance.",
    technologies: "React.js, React hooks, Material UI Icons",
    image: p2,
    liveLink: "https://gotask-b2c.netlify.app/",
  },
];
