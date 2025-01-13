import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hridoy Saha | Full-Stack Web Developer",
  description:
    "Full-stack web developer offering frontend, backend, and database solutions. Expert in creating responsive websites, robust APIs, and efficient databases.",
  keywords: [
    "Hridoy Saha",
    "Hridoy Saha Portfolio",
    "Web Developer in Bangladesh",
    "freelancer",
    "freelancer hridoy",
    "Web Developer in Chittagong",
    "Web Designer Chandpur",
    "Bangladeshi Web Developer",
    "Hridoy Saha Web Developer",
    "Frontend Developer Bangladesh",
    "Portfolio of Hridoy Saha",
    "Modern Web Development",
    "Frontend Developer Bangladesh",
    "Frontend Developer",
    "MERN Stack Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
