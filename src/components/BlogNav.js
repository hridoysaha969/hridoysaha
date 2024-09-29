"use client";
import Link from "next/link";
import styles2 from "@/styles/navbar.module.css";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

function BlogNav() {
  const isLoggedin = useAuth();

  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        // Redirect to login page after successful logout
        router.push("/login");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className={styles2.navbar}>
      <ul className={styles2.navbar__list}>
        <li className={styles2.navbar__item}>
          <button className={`${styles2.navbar__link}`}>
            <Link href="/">Home</Link>
          </button>
        </li>
        <li className={styles2.navbar__item}>
          <button className={`${styles2.navbar__link} ${styles2.active}`}>
            <Link href="/blog">Blog</Link>
          </button>
        </li>

        {isLoggedin ? (
          <li className={styles2.navbar__item}>
            <button
              className={`${styles2.navbar__link}`}
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className={styles2.navbar__item}>
            <button className={`${styles2.navbar__link}`}>
              <Link href="/login">Login</Link>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default BlogNav;
