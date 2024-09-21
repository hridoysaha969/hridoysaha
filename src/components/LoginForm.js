import styles from "@/styles/contact.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
function LoginForm({ activeMenu }) {
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
    setError("");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!loginObj.email || !loginObj.password) {
      setError("Email & Password are required.");
      return false;
    }

    let response = await fetch("https://hridoysaha.netlify.app/api/login/", {
      method: "POST",
      body: JSON.stringify(loginObj),
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();

    if (response.success) {
      console.log(response);
      setLoginObj({
        email: "",
        password: "",
      });
      router.push(`/`);
      setLoading(false);
    } else {
      setError(response.message);
      setLoading(false);
    }
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
          {error && <span className={styles.invalid__feedback}>{error}</span>}

          <div className={styles.btn__wrapper}>
            <button
              className={styles.form__btn}
              type="submit"
              disabled={loading}
            >
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
