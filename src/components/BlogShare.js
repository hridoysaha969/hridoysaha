"use client";

import { useEffect, useState } from "react";
import { MdRemoveRedEye, MdShare } from "react-icons/md";
import styles from "@/styles/blogArticle.module.css";

function BlogShare({ blogTitle, blogUrl, blogID, views }) {
  const [isShareSupported, setIsShareSupported] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.share) {
      setIsShareSupported(true);
    }
  }, []);

  useEffect(() => {
    fetch(`/api/blog/${blogID}/view`, { method: "POST" });
  }, [blogID]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogTitle,
          text: `Check out this blog: ${blogTitle}`,
          url: blogUrl,
        });
      } catch (error) {
        console.error("Error sharing the blog:", error.message);
      }
    }
  };

  return (
    <div className={styles.form__btn_wrapper}>
      <span className={styles.flex__box}>
        <MdRemoveRedEye /> {views}
      </span>
      {isShareSupported ? (
        <button onClick={handleShare} className={styles.form__btn}>
          <MdShare />
        </button>
      ) : null}
    </div>
  );
}

export default BlogShare;
