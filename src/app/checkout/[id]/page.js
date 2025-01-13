import styles from "@/app/page.module.css";
import Aside from "@/components/Aside";
import CheckoutContent from "@/components/CheckoutContent";
import { servicesArray } from "@/lib/constant";
function page({ params }) {
  return (
    <main className={styles.main}>
      <Aside />
      <CheckoutContent pId={params.id} />
    </main>
  );
}

export default page;

export async function generateMetadata({ params }) {
  const service = await servicesArray.filter(
    (item) => item.package === params.id
  );
  return {
    title: `${service[0].title} - Checkout | Hridoy Saha's Web Development Services`,
    description: `${service[0].description}`,
  };
}
