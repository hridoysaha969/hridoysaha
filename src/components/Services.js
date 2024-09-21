import styles from "@/styles/services.module.css";
import ServiceItem from "./ServiceItem";
import { servicesArray } from "@/lib/constant";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import img from "@/assets/projectImg/project-1.jpg";
import gig1 from "@/assets/gig-1.jpg";
import Link from "next/link";

function Blog({ activeMenu }) {
  const services = servicesArray;
  return (
    <article className={`blog ${activeMenu === "services" && "active"}`}>
      <header>
        <h2 className="h2 article-title">Services</h2>
      </header>

      <section className={styles.service}>
        <ul className={styles.service__list}>
          {services.map((service, ind) => (
            <ServiceItem key={ind} service={service} />
          ))}
        </ul>
      </section>

      <section className={styles.service}>
        <h3 className={`h3 ${styles.service__title}`}>
          Other platform services
        </h3>

        <ul className={styles.project__list}>
          <li className={`${styles.project__item} ${styles.active}`}>
            <Link href="https://www.fiverr.com/s/yvwVlAq">
              <figure className={styles.project__img}>
                <div className={styles.project__item_icon_box}>
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                  <MdOutlineRemoveRedEye />
                </div>

                <Image
                  src={gig1}
                  alt="Product upload - Hridoy Saha"
                  loading="lazy"
                />
              </figure>

              <h3 className={styles.project__title}>
                upload 100 products in woocommerce store
              </h3>

              <p className={styles.project__category}>Product Upload</p>
            </Link>
          </li>

          <li className={`${styles.project__item} ${styles.active}`}>
            <Link href="https://www.fiverr.com/s/42l6Zp1">
              <figure className={styles.project__img}>
                <div className={styles.project__item_icon_box}>
                  {/* <ion-icon name="eye-outline"></ion-icon> */}
                  <MdOutlineRemoveRedEye />
                </div>

                <Image src={img} alt="finance" loading="lazy" />
              </figure>

              <h3 className={styles.project__title}>
                create modern web applications with react.js or next.js
              </h3>

              <p className={styles.project__category}>Custom Websites</p>
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Blog;
