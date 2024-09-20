import styles from "@/styles/contact.module.css";
function LoginForm({ activeMenu }) {
  return (
    <article className={`contact ${activeMenu === "login" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>Login</h2>
      </header>
    </article>
  );
}

export default LoginForm;
