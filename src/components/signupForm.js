import styles from "@/styles/contact.module.css";
import { useState } from "react";
function SignupForm({ activeMenu }) {
  const [signupObj, setSignupObj] = useState({
    fullName: "",
    email: "",
    password: "",
    aggrement: true,
  });
  const handleChange = (e) => {
    setSignupObj({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupObj);
    setSignupObj({
      fullName: "",
      email: "",
      password: "",
      aggrement: true,
    });
  };
  return (
    <article className={`contact ${activeMenu === "signup" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Signup</h2>
      </header>

      <section className={styles.contact__form}>
        <form className="form" onSubmit={handleSignup}>
          <label className={styles.input__label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={signupObj.fullName}
            className={styles.form__input}
            placeholder="eg. John Doe"
            required
            onChange={handleChange}
          />
          <label className={styles.input__label}>Email</label>
          <input
            type="email"
            name="email"
            value={signupObj.email}
            className={styles.form__input}
            placeholder="eg. john123@gmail.com"
            required
            onChange={handleChange}
          />
          <label className={styles.input__label}>Password</label>
          <input
            type="password"
            name="password"
            value={signupObj.password}
            className={styles.form__input}
            placeholder="Pass****"
            required
            onChange={handleChange}
          />

          <div className={styles.btn__wrapper}>
            <button className={styles.form__btn} type="submit">
              {/* <MdOutlineSend /> */}
              <span>Signup</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}

export default SignupForm;
