"use client";
import styles from "@/app/page.module.css";
import Navbar from "./Navbar";
import About from "./About";
import { useEffect, useState } from "react";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import { useSearchParams } from "next/navigation";
function MainContent() {
  const [activeMenu, setActiveMenu] = useState("about");
  const searchParams = useSearchParams();
  const query = searchParams.get("order");

  useEffect(() => {
    if (query) {
      setActiveMenu("services");
    }
  }, [query]);

  return (
    <div className={styles.main__content}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {activeMenu === "about" && <About activeMenu={activeMenu} />}
      {activeMenu === "resume" && <Resume activeMenu={activeMenu} />}
      {activeMenu === "portfolio" && <Portfolio activeMenu={activeMenu} />}
      {activeMenu === "services" && <Services activeMenu={activeMenu} />}
      {activeMenu === "contact" && <Contact activeMenu={activeMenu} />}
    </div>
  );
}

export default MainContent;
