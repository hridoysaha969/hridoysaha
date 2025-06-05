"use client";

import styles from "@/styles/blog.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BlogPagination = ({ pagination }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handlePrev = async () => {
    if (currentPage <= 1) {
      console.log("No previous page");
      return;
    }
    router.push(`/blog?page=${currentPage - 1}`);
    setCurrentPage(currentPage - 1);
  };
  const handleNext = async () => {
    if (currentPage >= pagination.totalPages) {
      console.log("No Next pages");
      return;
    }

    router.push(`/blog?page=${currentPage + 1}`);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.pagination__wrapper}>
      <button
        className={styles.form__btn}
        onClick={handlePrev}
        disabled={currentPage <= 1}
      >
        Prev
      </button>
      <button
        className={styles.form__btn}
        onClick={handleNext}
        disabled={currentPage >= pagination.totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BlogPagination;
