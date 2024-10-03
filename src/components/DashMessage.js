"use client";
import styles from "@/styles/dashMessage.module.css";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function DashMessage() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    message: "",
    error: false,
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchMessage();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  }, [showPopup]);

  const fetchMessage = async () => {
    setLoading(true);
    let response = await fetch("/api/message/", {
      cache: "no-cache",
    });
    response = await response.json();

    if (response.success) {
      setMessage(response.result);
      setLoading(false);
    }
  };

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

  const handleDelete = async (id) => {
    let response = await fetch(`/api/message/${id}`, {
      method: "DELETE",
    });
    response = await response.json();

    if (response.success) {
      setStatus({
        ...status,
        message: response.message,
      });
      fetchMessage();
      setShowPopup(true);
    } else {
      setStatus({
        message: response.message,
        error: true,
      });
      setShowPopup(true);
    }
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

                  <button
                    className={`${styles.delete__message} ${styles.error}`}
                    onClick={() => handleDelete(item._id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              ))
            : null}
        </div>
      )}

      {showPopup && (
        <div className={styles.popup__message}>
          <span>{status.message}</span>
        </div>
      )}
    </div>
  );
}

export default DashMessage;
