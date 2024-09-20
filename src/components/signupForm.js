import styles from "@/styles/contact.module.css";
function SignupForm({ activeMenu }) {
  return (
    <article className={`contact ${activeMenu === "signup" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Signup</h2>
      </header>
    </article>
  );
}

export default SignupForm;
