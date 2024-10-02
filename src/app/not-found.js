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
