import p1 from "@/assets/projectImg/project-1.jpg";
import p2 from "@/assets/projectImg/project-2.jpg";
import p3 from "@/assets/projectImg/project-3.jpg";
export const servicesArray = [
  {
    id: 1,
    package: "hsbasic01",
    price: 12000,
    currency: "BDT",
    title: "Exclusive Service",
    description:
      "Suitable for existing application. Requires granting access to your current code base.",
    servicesList: [
      {
        data: "Advanced feature implementation",
      },
      {
        data: "Comprehensive performance audits",
      },
      {
        data: "Modern technology integration",
      },
      {
        data: "Complete redesigns",
      },
      {
        data: "Bug fixing and maintenance",
      },
    ],
    note: "Modify or cancel at any time",
  },
  {
    id: 2,
    package: "hsstandard02",
    price: 30000,
    currency: "BDT",
    title: "Turn your vision into reality",
    description:
      "Create a new application from scratch including deployment and domain configuration.",
    servicesList: [
      {
        data: "Minimalistic design",
      },
      {
        data: "Scalable tech stack for future growth",
      },
      {
        data: "Domain configuration",
      },
      {
        data: "Seamless deployment",
      },
    ],
    note: "Delivery time depends on the scope",
  },
];

export const projectArray = [
  {
    _id: 1,
    title: "CaseMate",
    sub_title:
      "A Custom Phone Case Creation Platform with Cutting-Edge Web Technologies",
    category: "web-development",
    overview:
      "CaseMate is an innovative web application designed to offer users a seamless and personalized experience in creating custom phone cases. The project provides users with the ability to upload their own images, tailor the case design according to their phone model, and order the customized phone case with integrated online payment.",
    technologies:
      "Next.js, Tailwind, TypeScript, Shadcn, Framer Motion, Prisma, Uploadthing, Kinde, Stripe, React Dropzone, React RND, Zod",
    feature: [
      {
        title: "Custom Phone Case Builder",
        description:
          "Users can upload images, customize the layout, and create their own phone case design.",
      },
      {
        title: "Secure User Authentication",
        description:
          "Users can sign up, log in, and place orders securely and seamlessly",
      },
      {
        title: "Seamless Image Uploads",
        description:
          "Allows drag-and-drop image uploading with resizing capabilities.",
      },
      {
        title: "Secure Payment Gateway",
        description:
          "Integrated online payment system for easy order processing.",
      },
    ],
    image: p2,
    liveLink: "https://casemate-alpha.vercel.app/",
    githubLink: "https://github.com/hridoysaha969/casemate",
  },
  {
    _id: 2,
    title: "BG Removal",
    sub_title: "Effortless Background Removal for Your Images",
    category: "web-development",
    overview:
      "This project is a user-friendly image background removal web application, allowing users to easily upload images and remove backgrounds with just a few clicks. The app provides a seamless experience, backed by robust authentication and efficient image processing.",
    technologies:
      "Vite + React, Express.js, MongoDB, Mongoose, Clerk, Clickdrop API, Multer, JWT, CORS, Stripe",
    feature: [
      {
        title: "Background Removal",
        description:
          "Efficiently remove the background from uploaded images using Clickdrop API.",
      },
      {
        title: "User Authentication",
        description:
          "Secure user sign-up and login using Clerk for authentication.",
      },
      {
        title: "Image Uploading",
        description:
          "Users can upload their images via an intuitive interface, with the background removed in seconds.",
      },
      {
        title: "Secure Storage",
        description:
          "User-uploaded images and processed outputs are handled safely using Express.js and MongoDB.",
      },
    ],
    image: p3,
    liveLink: "https://bg-removal-bay.vercel.app/",
    githubLink: "https://github.com/hridoysaha969/bg-removal",
  },
  {
    _id: 3,
    title: "CryptoByte",
    sub_title: "Real-Time Crypto Market Updates & Insights.",
    category: "web-design",
    overview:
      "CryptoByte is a cutting-edge cryptocurrency tracking web application that provides users with real-time updates on market trands, including 24-hour highs, lows and market cap on various coins. CryptoByte allows visitors to monitor the fast-moving world of cryptocurrency with ease.",
    technologies:
      "Vite + React, React Chart, React Router, API Integration, Firebase",
    feature: [
      {
        title: "Real-Time Cryptocurrency Data",
        description:
          "Live updates on the prices, market cap, and 24-hour performance of various coins.",
      },
      {
        title: "Detailed Coin Pages",
        description:
          "Visitors can check in-depth data and statistics for each cryptocurrency.",
      },
      {
        title: "User Authentication",
        description:
          "Secure sign-in and authentication to personalize user experience and access advanced features.",
      },
    ],
    image: p1,
    liveLink: "https://bytecrypto.netlify.app/",
    githubLink: "https://github.com/hridoysaha969/cryptobyte",
  },
];
