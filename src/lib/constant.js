import p1 from "@/assets/projectImg/project-1.jpg";
import p2 from "@/assets/projectImg/project-2.jpg";
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
    technologies: "Vite + React, React Chart, API Integration, Firebase",
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
    title: "CaseMate",
    sub_title:
      "A Custom Phone Case Creation Platform with Cutting-Edge Web Technologies",
    category: "web-development",
    overview:
      "CaseMate is an innovative web application designed to offer users a seamless and personalized experience in creating custom phone cases. The project provides users with the ability to upload their own images, tailor the case design according to their phone model, and order the customized phone case with integrated online payment.",
    technologies:
      "Next.js, Tailwind, TypeScript, Shadcn, Framer Motion, Prisma, Uploadthing, Kinde, Stripe, React Dropzone, React RND, Zod",
    challanges: [
      {
        title: "Creating an Engaging User Experience for Customization",
        description:
          "Users needed an intuitive interface to design custom phone cases using their own images and fit them precisely according to their phone model. The user experience had to be seamless and interactive",
      },
      {
        title: "Managing Authentication Securely",
        description:
          "The platform required a secure authentication system for users to log in, create accounts, and place orders.",
      },
      {
        title: "Handling Image Uploads Efficiently",
        description:
          "Uploading user images for custom cases required efficient storage management and a secure, scalable solution to handle the uploaded content.",
      },
      {
        title: "Secure and Smooth Payment Processing",
        description:
          "Enabling online payments with reliability and security was a critical aspect of the platform.",
      },
      {
        title: "Backend and Database Management",
        description:
          "The platform needed a reliable and efficient way to manage data, including user accounts, orders, and case customization details.",
      },
    ],
    solutions: [
      {
        title: "Creating an Engaging User Experience",
        description:
          "To solve this, I implemented React Dropzone to allow users to drag and drop their images and used React RND for resizing and positioning the images. Framer Motion was used to introduce smooth animations, making the design experience dynamic and engaging.",
      },
      {
        title: "Authentication Management",
        description:
          "For this, I integrated Kinde as the authentication provider, allowing for secure sign-up and login functionalities. The platform ensured privacy and protection of user data while maintaining smooth authentication flow.",
      },
      {
        title: "Image Uploads management",
        description:
          "I used Uploadthing for secure image uploads. This service allowed efficient handling of user-generated content and seamless integration into the website, without compromising speed or security.",
      },
      {
        title: "Payment and Security",
        description:
          "I integrated Stripe to handle payments securely. This allowed users to place orders and complete transactions with ease while benefiting from Stripe’s robust fraud prevention and secure payment gateway features.",
      },
      {
        title: "Handling Database Securely",
        description:
          "I used Prisma for database management, providing a seamless connection to the backend. This allowed smooth storage of user data and order information.",
      },
    ],
    image: p2,
    liveLink: "https://casemate-alpha.vercel.app/",
    githubLink: "https://github.com/hridoysaha969/casemate",
  },
];
