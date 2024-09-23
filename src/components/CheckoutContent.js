"use client";
import styles from "@/app/page.module.css";
import styles2 from "@/styles/navbar.module.css";
import { useRouter } from "next/navigation";
import Checkout from "./Checkout";
function CheckoutContent({ pId }) {
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
        </ul>
      </nav>

      <Checkout pId={pId} />
    </div>
  );
}

export default CheckoutContent;
