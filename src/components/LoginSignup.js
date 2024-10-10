"use client";
import styles from "@/app/page.module.css";
import styles2 from "@/styles/navbar.module.css";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SignupForm from "./signupForm";
function LoginSignup({ searchParams }) {
  const [activeMenu, setActiveMenu] = useState("login");
  const router = useRouter();
  return (
    <div className={styles.main__content}>
      <nav className={styles2.navbar}>
        <ul className={styles2.navbar__list}>
          <li className={styles2.navbar__item}>
            <button
              className={`${styles2.navbar__link}`}
              onClick={() => router.push("/")}
            >
              Home
            </button>
          </li>
          <li className={styles2.navbar__item}>
            <button
              className={`${styles2.navbar__link} ${
                activeMenu === "login" && styles2.active
              }`}
              onClick={() => setActiveMenu("login")}
            >
              Login
            </button>
          </li>
          <li className={styles2.navbar__item}>
            <button
              className={`${styles2.navbar__link} ${
                activeMenu === "signup" && styles2.active
              }`}
              onClick={() => setActiveMenu("signup")}
            >
              Signup
            </button>
          </li>
        </ul>
      </nav>

      {activeMenu === "login" && (
        <LoginForm activeMenu={activeMenu} searchParams={searchParams} />
      )}
      {activeMenu === "signup" && (
        <SignupForm activeMenu={activeMenu} searchParams={searchParams} />
      )}
    </div>
  );
}

export default LoginSignup;
