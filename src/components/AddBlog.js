"use client";
import styles from "@/styles/addBlog.module.css";
import { useState } from "react";
function AddBlog() {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    category: "",
    // heading: "",
    // sub_content: "",
    image: null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
    setStatus("");
  };

  const handleImage = (e) => {
    setBlogData({
      ...blogData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading...");

    const data = new FormData();
    data.append("title", blogData.title);
    data.append("content", blogData.content);
    data.append("category", blogData.category);
    // data.append("heading", blogData.heading);
    // data.append("sub_content", blogData.sub_content);

    if (blogData.image) {
      const reader = new FileReader();
      reader.readAsDataURL(blogData.image);
      reader.onloadend = async () => {
        const base64Image = reader.result; // This is your base64 string
        data.append("image", base64Image);

        try {
          let response = await fetch(`/api/blog`, {
            method: "POST",
            body: data,
          });
          response = await response.json();

          if (response.success) {
            setStatus(response.message);
            setBlogData({
              title: "",
              content: "",
              category: "",
              // heading: "",
              // sub_content: "",
              image: null,
            });
          } else {
            setStatus(response.message);
          }
        } catch (err) {
          setStatus("An error occurred, please try again");
        }
      };
      reader.onerror = (error) => {
        // console.error("Error converting image to base64:", error);
        setStatus("Error converting image, please try again.");
      };
    } else {
      setStatus("Please select an image.");
    }
  };

  return (
    <div className={styles.container}>
      <h3>Add new Blog</h3>

      <form className={styles.add__blog_form} onSubmit={handleSubmit}>
        <div className={styles.left__inputs}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blogData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            rows={5}
            placeholder="Blog Content"
            value={blogData.content}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Add Category"
            value={blogData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.right__inputs}>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
            required
          />

          <div className={styles.form__action}>
            <h4>Publish</h4>
            <div className={styles.action__drift}>
              <button>Save Draft</button>
              <button>Preview</button>
            </div>
            <div className={styles.action__upload}>
              <button type="submit">Upload Blog</button>
              <p>Status : {status}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
