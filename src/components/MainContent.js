"use client";
import styles from "@/app/page.module.css";
import Navbar from "./Navbar";
import About from "./About";
import { useState, useEffect } from "react";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
function MainContent({ searchParams }) {
  const [activeMenu, setActiveMenu] = useState("about");

  useEffect(() => {
    if (searchParams?.service) {
      setActiveMenu("services");
    } else if (searchParams?.portfolio) {
      setActiveMenu("portfolio");
    }
  }, [searchParams]);

  return (
    <div className={styles.main__content}>
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {activeMenu === "about" && (
        <About activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      )}
      {activeMenu === "resume" && <Resume activeMenu={activeMenu} />}
      {activeMenu === "portfolio" && <Portfolio activeMenu={activeMenu} />}
      {activeMenu === "services" && <Services activeMenu={activeMenu} />}
      {activeMenu === "contact" && <Contact activeMenu={activeMenu} />}
    </div>
  );
}

export default MainContent;
