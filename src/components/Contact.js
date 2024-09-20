// "use client"
import styles from "@/styles/contact.module.css";
import { useState } from "react";
import { MdOutlineSend } from "react-icons/md";
function Contact({ activeMenu }) {
  const [messageData, setMessageData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setMessageData({
      ...messageData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageData);
    setMessageData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <article className={`contact ${activeMenu === "contact" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Contact</h2>
      </header>

      <section className={styles.mapbox}>
        <figure>
          <iframe
            src="https://maps.google.com/maps?q=balakhal&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className={styles.contact__form}>
        <h3 className={`h3 ${styles.form__title}`}>Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className={styles.input__wrapper}>
            <input
              type="text"
              name="fullName"
              value={messageData.fullName}
              className={styles.form__input}
              placeholder="Full name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={messageData.email}
              className={styles.form__input}
              placeholder="Email address"
              required
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            value={messageData.message}
            className={styles.form__input}
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>

          <button className={styles.form__btn} type="submit" data-form-btn>
            {/* <ion-icon name="paper-plane"></ion-icon> */}
            <MdOutlineSend />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
