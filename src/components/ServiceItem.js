// import useAuth from "@/hooks/useAuth";
import styles from "@/styles/services.module.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
function ServiceItem({ service }) {
  // const [loading, setLoading] = useState(false);
  // const router = useRouter();
  // const isLoggedin = useAuth();

  // const handleOrder = () => {
  //   setLoading(true);
  //   if (!isLoggedin) {
  //     router.push("/login?order=true");
  //   } else {
  //     router.push(`/checkout/${service.package}`);
  //   }
  // };
  return (
    <li className={styles.service__item}>
      {/* <div className={styles.card__pricing}>
        <div className={styles.card__pricing__number}>
          <span className={styles.card__pricing__symbol}>$</span>
          {service.price}
        </div>
      </div> */}
      <div className={styles.pricing}>
        <span className={styles.price__tag}>
          Requires budget of {service.price} {service.currency}
        </span>
      </div>

      <div className={styles.service__content_box}>
        <h4 className={`h4 ${styles.service__item_title}`}>{service.title}</h4>

        <p className={styles.service__item_text}>{service.description}</p>

        <ol className={styles.timeline__list}>
          {service.servicesList.map((item, ind) => (
            <li key={ind} className={styles.timeline__item}>
              <h4 className={`h4 ${styles.timeline__item_title}`}>
                {item.data}
              </h4>
            </li>
          ))}
        </ol>

        <Link
          href={`mailto:hridoysaha969@gmail.com?subject=${service.title}`}
          className={styles.btn__order}
        >
          <span>Send a Proposal</span>
        </Link>
        <small className={styles.note}>{service.note}</small>
      </div>
    </li>
  );
}

export default ServiceItem;
