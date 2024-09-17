import styles from "@/styles/services.module.css";
function Blog({ activeMenu }) {
  return (
    <article className={`blog ${activeMenu === "services" && "active"}`}>
      <header>
        <h2 className="h2 article-title">Services</h2>
      </header>
    </article>
  );
}

export default Blog;
