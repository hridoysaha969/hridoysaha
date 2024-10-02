"use client";

import { useEffect, useState } from "react";
import { MdOutlineShare, MdShare } from "react-icons/md";
import styles from "@/styles/blogArticle.module.css";

function BlogShare({ blogTitle, blogUrl }) {
  const [isShareSupported, setIsShareSupported] = useState(false);

  useEffect(() => {
    if (navigator.share) {
      setIsShareSupported(true);
    }
  }, []);

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
    <div>
      {isShareSupported ? (
        <button onClick={handleShare} className={styles.form__btn}>
          {" "}
          Share <MdShare />
        </button>
      ) : (
        <p>Sharing is not supported in your browser!</p>
      )}
    </div>
  );
}

export default BlogShare;
