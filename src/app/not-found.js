import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="not__found">
      <div className="not__found_wrapper">
        <h2>404</h2>
        <p>Page not found</p>
        <Link href="/">Go to home</Link>
      </div>
    </section>
  );
}

export default NotFound;

export async function generateMetadata() {
  return {
    title: "Not Found! | Hridoy Saha Portfolio",
    description:
      "Sorry! The page ypu are looking for is not cooked yet. Have a look at my other pages.",
  };
}
