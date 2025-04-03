import styles from "@/styles/blog.module.css";

import Image from "next/image";
import Link from "next/link";
import BlogNav from "./BlogNav";
import GoogleAd from "./GoogleAd";

async function BlogContent({ blogs }) {
  const handleFormateDate = (dynamicDate) => {
    // Convert the MongoDB date string to a Date object
    const createdAt = new Date(dynamicDate);

    const formattedDate = createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " View more...";
    }
    return text;
  };
  console.log(process.env.GOOGLE_AD_SLOT);

  return (
    <div className={styles.main__content}>
      <BlogNav />

      <article className={`${styles.blog} active`}>
        <header>
          <h2 className={`h2 article-title ${styles.article__title}`}>Blog</h2>
        </header>

        <section className={styles.blog__posts}>
          <ul className={styles.blog__posts_list}>
            {blogs &&
              blogs.map((item, ind) => (
                <li key={ind} className={styles.blog__post_item}>
                  <Link href={`/blog/${item.slug}`}>
                    <figure className={styles.blog__banner_box}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={230}
                      />
                    </figure>

                    <div className={styles.blog__content}>
                      <div className={styles.blog__meta}>
                        <p className={styles.blog__category}>{item.category}</p>

                        <span className={styles.dot}></span>

                        <time>{handleFormateDate(item.publishDate)}</time>
                      </div>

                      <h3 className={`h3 ${styles.blog__item_title}`}>
                        {/* {Design conferences in 2022} */}
                        {item.title}
                      </h3>

                      <p className={styles.blog__text}>
                        {truncateText(item.content, 35)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            {/* <li className={styles.blog__post_item}>
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
            </li> */}
          </ul>
          <GoogleAd adSlot={process.env.GOOGLE_AD_SLOT} />
        </section>
      </article>
    </div>
  );
}

export default BlogContent;
