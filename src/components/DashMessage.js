"use client";
import styles from "@/styles/dashMessage.module.css";
import { useEffect, useState } from "react";

function DashMessage() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchMessage = async () => {
      let response = await fetch("/api/message/");
      response = await response.json();

      if (response.success) {
        setMessage(response.result);
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  const handleFormateDate = (dynamicDate) => {
    // Convert the MongoDB date string to a Date object
    const createdAt = new Date(dynamicDate);

    const formattedDate = createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  };

  return (
    <div className={styles.container}>
      <h3>Messages</h3>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className={styles.message__wrapper}>
          {message.length > 0
            ? message.map((item, ind) => (
                <div key={ind} className={styles.message__card}>
                  <div className={styles.message__header}>
                    <h2>{item.fullName.charAt(0)}</h2>
                    <div className={styles.header__info}>
                      <h4>{item.fullName}</h4>
                      <span>{handleFormateDate(item.date)}</span>
                    </div>
                  </div>
                  <div className={styles.message__body}>
                    <p>{item.message}</p>

                    <span>Sent by {item.email}</span>
                  </div>
                </div>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default DashMessage;
