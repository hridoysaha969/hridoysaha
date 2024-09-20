import styles from "@/styles/contact.module.css";
import { useState } from "react";
function LoginForm({ activeMenu }) {
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginObj);
    setLoginObj({
      email: "",
      password: "",
    });
  };
  return (
    <article className={`contact ${activeMenu === "login" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Login</h2>
      </header>

      <section className={styles.contact__form}>
        <form className="form" onSubmit={handleLogin}>
          <label className={styles.input__label}>Email</label>
          <input
            type="email"
            name="email"
            value={loginObj.email}
            className={styles.form__input}
            placeholder="eg. john123@gmail.com"
            required
            onChange={handleChange}
          />
          <label className={styles.input__label}>Password</label>
          <input
            type="password"
            name="password"
            value={loginObj.password}
            className={styles.form__input}
            placeholder="Pass****"
            required
            onChange={handleChange}
          />

          <div className={styles.btn__wrapper}>
            <button className={styles.form__btn} type="submit">
              {/* <MdOutlineSend /> */}
              <span>Login</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}

export default LoginForm;
