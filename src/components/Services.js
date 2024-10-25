// "use client";
import styles from "@/styles/services.module.css";
import ServiceItem from "./ServiceItem";
import { servicesArray } from "@/lib/constant";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Image from "next/image";
import gig1 from "@/assets/fiverr_gig_1.jpg";
import gig2 from "@/assets/fiverr_gig_2.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";

function Services({ activeMenu }) {
  const [status, setStatus] = useState("Limited");
  const [loading, setLoading] = useState(false);
  const services = servicesArray;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await fetch("/api/status", {
        cache: "no-cache",
      });
      response = await response.json();

      if (response.success) {
        setStatus(response.result.status);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return styles.success;
      case "Limited":
        return styles.warning;
      case "Booked":
        return styles.danger;
      default:
        return "";
    }
  };

  return (
    <article className={`blog ${activeMenu === "services" && "active"}`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>
          Services
        </h2>
      </header>

      <section className={styles.status}>
        <p>
          Availability :{" "}
          {loading ? (
            <span className={styles.loader}></span>
          ) : (
            <span className={`${getStatusClass(status)} ${styles.status_bar}`}>
              {status}
            </span>
          )}
        </p>
      </section>

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

                <Image src={gig2} alt="finance" loading="lazy" />
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

export default Services;
