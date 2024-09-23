import styles from "@/app/page.module.css";
import Aside from "@/components/Aside";
import CheckoutContent from "@/components/CheckoutContent";
function page({ params }) {
  console.log(params.id);

  return (
    <main className={styles.main}>
      <Aside />
      <CheckoutContent pId={params.id} />
    </main>
  );
}

export default page;

export function generateMetadata() {
  return {
    title: "Checkout | Hridoy Saha's Web Development Services",
    description: "Checkout your orders and other necessaries",
  };
}
