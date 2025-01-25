import BlogShare from "@/components/BlogShare";
import styles from "@/styles/blogArticle.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

async function getBlog(id) {
  try {
    const url =
      process.env.NODE_ENV !== "development"
        ? `https://hridoysaha.vercel.app/api/blog/${id}`
        : `http://localhost:3000/api/blog/${id}`;
    let res = await fetch(url, {
      cache: "no-cache",
    });

    // Check if the response is valid
    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (!data.success) {
      // Show nothing or handle error rendering here
      return null; // Or show a custom message like "Blog not found"
    }

    // Check if the blogs property exists in the response
    if (!data || !data.blogs) {
      throw new Error("Invalid data structure: blogs not found");
    }

    return data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return null; // Return an empty array if an error occurs
  }
}

async function page({ params }) {
  const blog = await getBlog(params.blogID);

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

  return (
    <main className={styles.blog__container}>
      {blog ? (
        <article className={`${styles.blog__article} active`}>
          <div className={styles.nav__back_links}>
            <p>
              <Link href="/">Home</Link>
              {" > "}
              <Link href="/blog">Blog</Link>
              {" > "}
              <Link href={`/blog/${params.blogID}`}>Post</Link>
            </p>
          </div>
          <header>
            <h2 className={`h2`}>{blog?.title}</h2>
          </header>

          <figure className={styles.article__img}>
            <Image
              src={blog?.image}
              alt="Hridoy Saha Blog"
              height={400}
              width={600}
            />
          </figure>

          <div className={styles.blog__meta}>
            <p className={styles.blog__category}>{blog?.category}</p>

            <span className={styles.dot}></span>

            <time>{handleFormateDate(blog?.publishDate)}</time>

            <BlogShare
              blogTitle={blog.title}
              blogUrl={`https://hridoysaha.vercel.app/blog/${params.blogID}`}
            />
          </div>

          <div className={`${styles.blog__article_content} markdown`}>
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className={styles.heading} {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className={styles.paragraph} {...props} />
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  return !inline ? (
                    <pre className={styles.codeBlock}>
                      <code {...props}>{children}</code>
                    </pre>
                  ) : (
                    <code className={styles.inlineCode} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </article>
      ) : null}
    </main>
  );
}

export default page;

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.blogID);

  if (!blog) {
    return notFound();
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "";
    }
    return text;
  };

  const keyWords = (string) => {
    const defaultKeyWord = [
      "html",
      "css",
      "javascript",
      "web development",
      "front end development",
      "hridoy saha blog",
      "about hridoy saha",
      "next js",
      "react js",
    ];
    if (string) {
      const splitArr = string.split(" ");
      splitArr.push(...defaultKeyWord);
      return splitArr;
    }
    return defaultKeyWord;
  };

  return {
    title: blog?.title,
    description: truncateText(blog?.content, 160),
    keywords: keyWords(blog.title),
    openGraph: {
      type: "article",
      title: blog?.title,
      description: truncateText(blog?.content, 100),
      url: `https://hridoysaha.vercel.app/blog/${params.blogID}`,
      images: [
        {
          url: blog?.image, // Make sure blog.imageUrl contains the path to the image
          width: 1200,
          height: 900,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: truncateText(blog?.content, 160),
      images: [blog?.image],
    },
  };
}
