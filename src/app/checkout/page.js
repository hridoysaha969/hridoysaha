import styles from "@/app/page.module.css";
import Aside from "@/components/Aside";
import CheckoutContent from "@/components/CheckoutContent";
function page() {
  return (
    <main className={styles.main}>
      <Aside />
      <CheckoutContent />
    </main>
  );
}

export default page;
