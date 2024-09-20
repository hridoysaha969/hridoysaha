import Aside from "@/components/Aside";
import styles from "@/app/page.module.css";
import LoginSignup from "@/components/LoginSignup";
function page() {
  return (
    <main className={styles.main}>
      <Aside />
      <LoginSignup />
    </main>
  );
}

export default page;
