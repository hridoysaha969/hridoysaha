import p1 from "@/assets/projectImg/project-1.jpg";
import p2 from "@/assets/projectImg/project-2.jpg";
import p3 from "@/assets/projectImg/project-3.jpg";
import p5 from "@/assets/projectImg/project-5.jpg";
import p6 from "@/assets/projectImg/project-6.png";
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
    _id: 5,
    title: "Insight Metrics",
    sub_title:
      "Track, Analyze, and Optimize Your Website Performance with Ease.",
    category: "web-development",
    keywords: `Insight Metrics, hridoy saha project, web analytics, projects, web design project, next js project, react js project, website design template, next js project ${new Date().getFullYear()}`,
    overview:
      "This web application provides a seamless solution for tracking website analytics. Users can easily add their websites, generate a unique script tag, and integrate it into their site's code to monitor real-time metrics like visits and page views. The platform is built with a modern tech stack to deliver an efficient analytics experience.",
    technologies:
      "Next.js, Tailwind, Shadcn, Supabase, React Syntax Highlighter",
    feature: [
      {
        title: "Website Integration",
        description:
          "Add multiple websites and generate unique script tags for each one.",
      },
      {
        title: "Real-Time Tracking",
        description: "Monitor visits and page views with live updates.",
      },
      {
        title: "User-Friendly Dashboard",
        description:
          "A visually appealing interface to view analytics data at a glance.",
      },
      {
        title: "Integration Guide",
        description:
          "Step-by-step instructions to help users seamlessly integrate the script into their websites.",
      },
      {
        title: "Scalable Design",
        description:
          "Built with modern tools to ensure performance and scalability.",
      },
    ],
    image: p6,
    liveLink: "https://insite-metrics.vercel.app/",
    githubLink: "https://github.com/hridoysaha969/insite-website",
  },
  {
    _id: 1,
    title: "CaseMate",
    sub_title:
      "A Custom Phone Case Creation Platform with Cutting-Edge Web Technologies",
    category: "web-development",
    keywords: `casemate, custom phone case design, phone case website, hridoy saha project, projects, web design project, next js project, react js project, website design template, next js project ${new Date().getFullYear()}`,
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
    keywords: `bg remove, background remove, image bg remove, image background remove, hridoy saha project, projects, web design project, next js project, react js project, website design template, next js project ${new Date().getFullYear()}`,
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
    keywords: `crypto market, crypto currency website design, stock market website, crypto website, hridoy saha project, projects, web design project, next js project, react js project, website design template, next js project ${new Date().getFullYear()}`,
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
  {
    _id: 4,
    title: "Horizon",
    sub_title: "Bank Account Management Web App",
    category: "web-development",
    keywords: `Horizon, bank website, bank website design, admin dashboard design, hridoy saha project, web analytics, projects, web design project, next js project, react js project, website design template, next js project ${new Date().getFullYear()}`,
    overview:
      "Horizon is a dynamic bank account management application designed to simplify financial organization. This web app enables users to securely link multiple bank accounts, monitor transactions, and transfer funds between accounts with ease. ([Demo] email: johndoe@test.com, password: pass_123)",
    technologies:
      "Next.js, TypeScript, Shadcn, Tailwind CSS, Appwrite, Plaid API, Chart.js",
    feature: [
      {
        title: "Multi-Bank Account Integration",
        description:
          "Link and manage multiple bank accounts within a single platform for centralized control.",
      },
      {
        title: "Fund Transfers",
        description:
          "Effortlessly transfer funds from one account to another with real-time balance updates.",
      },
      {
        title: "Transaction Visualization",
        description:
          "View spending patterns and account balances through interactive charts.",
      },
    ],
    image: p5,
    liveLink: "https://real-banking.vercel.app/",
    githubLink: "https://github.com/hridoysaha969/real-banking",
  },
];
