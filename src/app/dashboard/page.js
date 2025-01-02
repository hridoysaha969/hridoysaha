"use client";
import styles from "@/styles/dashboard.module.css";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import img from "@/assets/my-avatar.png";
import DashboardNav from "@/components/DashboardNav";
import { useState } from "react";
import DashHome from "@/components/DashHome";
import DashMessage from "@/components/DashMessage";
import AddBlog from "@/components/AddBlog";
import UpdateStatus from "@/components/UpdateStatus";

function Dashboard() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className={styles.container}>
      <DashboardNav
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div className={`${styles.main} ${showMenu && styles.active}`}>
        <div className={styles.topbar}>
          <div className={styles.toggle} onClick={() => setShowMenu(!showMenu)}>
            <MdMenu />
          </div>

          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              {/* <MdSearch /> */}
            </label>
          </div>

          <div className={styles.user}>
            <Image src={img} alt="Hridoy Saha Dev" />
          </div>
        </div>

        {activeMenu === "dashboard" && <DashHome />}
        {activeMenu === "message" && <DashMessage />}
        {activeMenu === "addBlog" && <AddBlog />}
        {activeMenu === "status" && <UpdateStatus />}
      </div>
    </div>
  );
}

export default Dashboard;

// export async function generateMetadata() {
//   return {
//     title: "Admin Dashboard | Hridoy Saha Dev",
//     description:
//       "This page is for admins only. You can manage your website from here.",
//   };
// }
