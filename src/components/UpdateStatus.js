import styles from "@/styles/dashMessage.module.css";
import { useEffect, useState } from "react";

const UpdateStatus = () => {
  const [select, setSelect] = useState("");
  const [statusId, setStatusId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await fetch("/api/status");
      response = await response.json();

      if (response.success) {
        setSelect(response.result.status);
        setStatusId(response.result._id);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    setSelect(e.target.value);

    const response = await fetch(`/api/status/${statusId}`, {
      method: "PUT",
      body: JSON.stringify({ status: e.target.value, id: statusId }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={`h2 ${styles.update__heading}`}>Update Service Status</h2>

      <section className={styles.status__section}>
        <p>Current Status : {loading ? "Loading..." : select}</p>

        <form className={styles.status__update}>
          <label>Update status to : </label>
          <select onChange={handleUpdate} disabled={loading}>
            <option value="">Select Status</option>
            <option value="Limited">Limited</option>
            <option value="Open">Open</option>
            <option value="Booked">Booked</option>
          </select>
        </form>
      </section>
    </div>
  );
};

export default UpdateStatus;
