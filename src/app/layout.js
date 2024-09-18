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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
