import { useEffect, useRef } from "react";

const ScrollToTop = ({ children, dependencies = [], className = "" }) => {
  const scrollContainerRef = useRef(null);
  // console.dir(scrollContainerRef.current);

  useEffect(() => {
    if (scrollContainerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [dependencies]);
  return (
    <div
      ref={scrollContainerRef}
      style={{ overflowY: "auto", height: "auto" }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollToTop;
