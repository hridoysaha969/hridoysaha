import styles from "@/styles/blog.module.css";

import Image from "next/image";
import img1 from "@/assets/blog-1.jpg";
import img2 from "@/assets/blog-2.jpg";
import Link from "next/link";
import BlogNav from "./BlogNav";

function BlogContent() {
  return (
    <div className={styles.main__content}>
      <BlogNav />

      <article className={`${styles.blog} active`}>
        <header>
          <h2 className={`h2 article-title ${styles.article__title}`}>Blog</h2>
        </header>

        <section className={styles.blog__posts}>
          <ul className={styles.blog__posts_list}>
            <li className={styles.blog__post_item}>
              <Link href="#">
                <figure className={styles.blog__banner_box}>
                  <Image
                    src={img1}
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className={styles.blog__content}>
                  <div className={styles.blog__meta}>
                    <p className={styles.blog__category}>Design</p>

                    <span className={styles.dot}></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className={`h3 ${styles.blog__item_title}`}>
                    Design conferences in 2022
                  </h3>

                  <p className={styles.blog__text}>
                    Veritatis et quasi architecto beatae vitae dicta sunt,
                    explicabo.
                  </p>
                </div>
              </Link>
            </li>
            <li className={styles.blog__post_item}>
              <Link href="#">
                <figure className={styles.blog__banner_box}>
                  <Image
                    src={img2}
                    alt="Design conferences in 2022"
                    loading="lazy"
                  />
                </figure>

                <div className={styles.blog__content}>
                  <div className={styles.blog__meta}>
                    <p className={styles.blog__category}>Design</p>

                    <span className={styles.dot}></span>

                    <time dateTime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className={`h3 ${styles.blog__item_title}`}>
                    Design conferences in 2022
                  </h3>

                  <p className={styles.blog__text}>
                    Veritatis et quasi architecto beatae vitae dicta sunt,
                    explicabo.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default BlogContent;
