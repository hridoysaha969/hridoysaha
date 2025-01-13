import styles from "@/styles/dashboard.module.css";
import { useEffect, useState } from "react";
import { MdMessage, MdOutlineTextSnippet } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function DashHome() {
  const [countData, setCountData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/count");
      const data = await res.json();

      if (!data.success) return console.log(data.message);

      setCountData(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardBox}>
      <div className={styles.card}>
        <div>
          <div className={styles.numbers}>{countData?.users}</div>
          <div className={styles.cardName}>Total Users</div>
        </div>

        <div className={styles.iconBx}>
          <FaUser />
        </div>
      </div>

      <div className={styles.card}>
        <div>
          <div className={styles.numbers}>{countData?.messages}</div>
          <div className={styles.cardName}>Messages</div>
        </div>

        <div className={styles.iconBx}>
          <MdMessage />
        </div>
      </div>

      <div className={styles.card}>
        <div>
          <div className={styles.numbers}>{countData?.blogs}</div>
          <div className={styles.cardName}>Blogs</div>
        </div>

        <div className={styles.iconBx}>
          <MdOutlineTextSnippet />
        </div>
      </div>
    </div>
  );
}

export default DashHome;
