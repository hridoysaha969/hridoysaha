"use client";
import {
  MdEmail,
  MdHome,
  MdLogout,
  MdMenu,
  MdMessage,
  MdPerson,
  MdPostAdd,
} from "react-icons/md";
import Link from "next/link";
import styles from "@/styles/dashboard.module.css";
import { useRouter } from "next/navigation";

function DashboardNav({ showMenu, setShowMenu, activeMenu, setActiveMenu }) {
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
    <div className={`${styles.navigation} ${showMenu && styles.active}`}>
      <ul>
        <li>
          <button>
            <span className={styles.icon}>
              <MdEmail />
            </span>
            <span className={styles.title}>Brand Name</span>
          </button>
        </li>

        <li className={`${activeMenu === "dashboard" && styles.hovered}`}>
          <button
            onClick={() => {
              setShowMenu(!showMenu);
              setActiveMenu("dashboard");
            }}
          >
            <span className={styles.icon}>
              <MdHome />
            </span>
            <span className={styles.title}>Dashboard</span>
          </button>
        </li>

        <li className={`${activeMenu === "users" && styles.hovered}`}>
          <button onClick={() => setActiveMenu("users")}>
            <span className={styles.icon}>
              <MdPerson />
            </span>
            <span className={styles.title}>Users</span>
          </button>
        </li>

        <li className={`${activeMenu === "addBlog" && styles.hovered}`}>
          <button onClick={() => setActiveMenu("addBlog")}>
            <span className={styles.icon}>
              <MdPostAdd />
            </span>
            <span className={styles.title}>Add Blog</span>
          </button>
        </li>

        <li className={`${activeMenu === "message" && styles.hovered}`}>
          <button
            onClick={() => {
              setShowMenu(!showMenu);
              setActiveMenu("message");
            }}
          >
            <span className={styles.icon}>
              <MdMessage />
            </span>
            <span className={styles.title}>Messages</span>
          </button>
        </li>
        <li>
          <button onClick={handleLogout}>
            <span className={styles.icon}>
              <MdLogout />
            </span>
            <span className={styles.title}>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardNav;
