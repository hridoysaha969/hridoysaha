import styles from "@/styles/dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  MdEmail,
  MdHome,
  MdMenu,
  MdMessage,
  MdPerson,
  MdPostAdd,
} from "react-icons/md";
import img from "@/assets/my-avatar.png";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link href="#">
              <span className={styles.icon}>
                <MdEmail />
              </span>
              <span className={styles.title}>Brand Name</span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className={styles.icon}>
                <MdHome />
              </span>
              <span className={styles.title}>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className={styles.icon}>
                <MdPerson />
              </span>
              <span className={styles.title}>Users</span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className={styles.icon}>
                <MdPostAdd />
              </span>
              <span className={styles.title}>Add Blog</span>
            </Link>
          </li>

          <li>
            <Link href="#">
              <span className={styles.icon}>
                <MdMessage />
              </span>
              <span className={styles.title}>Messages</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.toggle}>
            <MdMenu />
          </div>

          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              {/* <MdSearch /> */}
            </label>
          </div>

          <div className={styles.user}>
            <Image src={img} alt="Hridoy Saha Dev" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Dashboard | Hridoy Saha's Web Developer",
    description: "Dashboard for Admins Only",
  };
}
