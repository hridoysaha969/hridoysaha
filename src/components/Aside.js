"use client";
import styles from "@/styles/aside.module.css";
import Image from "next/image";
import heroImg from "@/assets/hridoy-saha.jpg";
import fb from "@/assets/fb.png";
import insta from "@/assets/instagram.png";
import x from "@/assets/x.png";
import yt from "@/assets/youtube.png";
import gmail from "@/assets/gmail.png";
import phone from "@/assets/phone.png";
import calendar from "@/assets/calender.png";
import location from "@/assets/location.png";
import Link from "next/link";
import { MdArrowDropDown, MdDownload } from "react-icons/md";
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

          <div className={styles.title_wrap}>
            <p className={styles.title}>Web developer</p>
            <Link
              href="https://drive.google.com/file/d/1AXv_lhgORsovLuxZ9rCRaVR21qoASsxc/view?usp=drive_link"
              className={styles.resume_download}
              aria-label="Resume Download"
              download
            >
              <MdDownload />{" "}
            </Link>
          </div>
        </div>

        <button
          className={styles.info__more_btn}
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Show Contact"
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
              <Image src={gmail} width={30} alt="Gmail" />
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
              <Image src={phone} width={20} alt="Phone" />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Phone</p>

              <Link href="tel:+8801828304973" className={styles.contact__link}>
                {`+880 18283 04973`}
              </Link>
            </div>
          </li>

          {/* <li className={styles.contact__item}>
            <div className="icon-box">
              <Image src={calendar} width={20} alt="Phone" />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Birthday</p>

              <span>August 10, 2000</span>
            </div>
          </li> */}

          <li className={styles.contact__item}>
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
              <Image src={location} width={40} alt="Phone" />
            </div>

            <div className={styles.contact__info}>
              <p className={styles.contact__title}>Location</p>

              <address>Balakhal-3611, Hajiganj, Chandpur</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className={styles.social__list}>
          <li className={styles.social__item}>
            <Link
              href="https://www.facebook.com/hridoysaha.official"
              className={styles.social__link}
            >
              <Image src={fb} width={30} alt="facebook" />
            </Link>
          </li>

          <li className={styles.social__item}>
            <Link
              href="https://www.instagram.com/b2c.org.bd/"
              className={styles.social__link}
            >
              <Image src={insta} width={30} alt="instagram" />
            </Link>
          </li>

          <li className={styles.social__item}>
            <Link
              href="https://x.com/b2c_org_bd"
              className={styles.social__link}
            >
              <Image src={x} width={30} alt="x.com" />
            </Link>
          </li>
          <li className={styles.social__item}>
            <Link
              href="https://www.youtube.com/@b2c_org_bd"
              className={styles.social__link}
            >
              <Image src={yt} width={30} alt="x.com" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
