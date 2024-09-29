import styles from "@/styles/dashboard.module.css";
import { MdMessage, MdRemoveRedEye } from "react-icons/md";

function DashHome() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.card}>
        <div>
          <div className={styles.numbers}>1,504</div>
          <div className={styles.cardName}>Daily Views</div>
        </div>

        <div className={styles.iconBx}>
          <MdRemoveRedEye />
        </div>
      </div>

      <div className={styles.card}>
        <div>
          <div className={styles.numbers}>284</div>
          <div className={styles.cardName}>Messages</div>
        </div>

        <div className={styles.iconBx}>
          <MdMessage />
        </div>
      </div>
    </div>
  );
}

export default DashHome;
