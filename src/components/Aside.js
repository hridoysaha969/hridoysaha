"use client";
import styles from "@/styles/aside.module.css";
import Image from "next/image";
import heroImg from "@/assets/hridoy-saha.jpg";
import Link from "next/link";
import {
  MdArrowDropDown,
  MdCalendarMonth,
  MdHome,
  MdMailOutline,
  MdOutlineFacebook,
  MdOutlineLocalPhone,
  MdOutlinePlace,
} from "react-icons/md";
import { useState } from "react";
function Aside() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <aside className={`sidebar ${styles.sidebar} ${showInfo && styles.active}`}>
      <div className={styles.sidebar__info}>
        <figure className={styles.avatar__box}>
          <Image src={heroImg} alt="Richard hanrick" width="80" priority />
        </figure>

        <div className={styles.info__content}>
          <h1 className={styles.name} title="Hridoy Saha">
            Hridoy Saha
          </h1>

          <p className={styles.title}>Full Stack developer</p>
        </div>

        <button
          className={styles.info__more_btn}
          onClick={() => setShowInfo(!showInfo)}
        >
          <span>Show Contacts</span>

          <MdArrowDropDown />
        </button>
      </div>

      <div className={styles.sidebar__info_more}>
        <div className="separator"></div>

        <ul className={styles.contacts__list}>
          <li className={styles.contact__item}>
            <div className="icon-box">
              <MdMailOutline />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Email</p>

              <Link
                href="mailto:hridoysaha969@gmail.com"
                className={styles.contact__link}
              >
                hridoysaha969@gmail.com
              </Link>
            </div>
          </li>

          <li className={styles.contact__item}>
            <div className="icon-box">
              <MdOutlineLocalPhone />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Phone</p>

              <Link href="tel:+8801828304973" className={styles.contact__link}>
                {`+880 18283 04973`}
              </Link>
            </div>
          </li>

          <li className={styles.contact__item}>
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
              <MdCalendarMonth />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Birthday</p>

              <span>June 23, 1982</span>
            </div>
          </li>

          <li className={styles.contact__item}>
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <MdOutlinePlace />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Location</p>

              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className={styles.social__list}>
          <li className={styles.social__item}>
            <Link href="#" className={styles.social__link}>
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
              <MdOutlineFacebook />
            </Link>
          </li>

          <li className={styles.social__item}>
            <Link href="#" className={styles.social__link}>
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
              <MdHome />
            </Link>
          </li>

          <li className={styles.social__item}>
            <Link href="#" className={styles.social__link}>
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
              <MdHome />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
