import styles from "@/styles/contact.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
function SignupForm({ activeMenu }) {
  const [signupObj, setSignupObj] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
    aggrement: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setSignupObj({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
    setError("");
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { fullName, email, password, aggrement } = signupObj;
    if ((!fullName || !email, !password, !aggrement)) {
      setError("All the fields are required.");
      return false;
    }

    let res = await fetch("/api/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupObj),
    });

    res = await res.json();
    if (res.success) {
      console.log(res);
      setSignupObj({
        fullName: "",
        email: "",
        password: "",
        role: "user",
        aggrement: true,
      });
      router.push("/");
      setLoading(false);
    } else {
      setError(res.message);
      setLoading(false);
    }
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
          {error && <span className={styles.invalid__feedback}>{error}</span>}

          <div className={styles.btn__wrapper}>
            <button
              className={styles.form__btn}
              type="submit"
              disabled={loading}
            >
              <span>Signup</span>
            </button>
          </div>
        </form>
      </section>
    </article>
  );
}

export default SignupForm;
