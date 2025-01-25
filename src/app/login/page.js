import Aside from "@/components/Aside";
import styles from "@/app/page.module.css";
import LoginSignup from "@/components/LoginSignup";
function page({ searchParams }) {
  return (
    <main className={styles.main}>
      <Aside />
      <LoginSignup searchParams={searchParams} />
    </main>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Login | Hridoy Saha's Web Development Services",
    description:
      "Login to Hridoy Saha's web development platform to access personalized services, project management, and more. Secure and seamless login experience.",
    keywords: [
      "hridoy saha",
      "hridoy saha portfolio",
      "developer portfolio",
      "login to portfolio",
      "sign up page design",
      "Login page design",
      "developer portfolio",
      "Frontend Developer Bangladesh",
      "Frontend Developer",
      "full stack developer",
      "MERN Stack Developer",
    ],
    openGraph: {
      title: "Login | Hridoy Saha's Web Development Services",
      description:
        "Login to Hridoy Saha's web development platform to access personalized services, project management, and more. Secure and seamless login experience.",
      url: "https://hridoysaha.vercel.app/login",
      type: "website",
    },
  };
}
