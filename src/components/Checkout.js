import { servicesArray } from "@/lib/constant";
import styles from "@/styles/checkout.module.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
function Checkout() {
  const [selectedPackage, setSelectedPackage] = useState();
  const [method, setMethod] = useState("");
  const searchParams = useSearchParams();
  const packageId = searchParams.get("package");
  useEffect(() => {
    const services = servicesArray.filter((item) => item.package === packageId);
    setSelectedPackage(services[0]);
  }, [packageId]);

  return (
    <article className={`contact active`}>
      <header>
        <h2 className={`h2 article-title ${styles.article__title}`}>
          Checkout
        </h2>
      </header>

      <section className={styles.timeline}>
        <div className={styles.title__wrapper}>
          <div className="icon-box">
            <MdShoppingCart />
          </div>

          <h3 className="h3">Order Summery</h3>
        </div>

        <ol className={styles.timeline__list}>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              {selectedPackage?.title}
            </h4>

            <span>
              {"$"}
              {selectedPackage?.price}
            </span>

            <p className={styles.timeline__text}>
              {selectedPackage?.description}
            </p>
          </li>
          <li className={styles.timeline__item}>
            <h4 className={`h4 ${styles.timeline__item_title}`}>
              Payment Method
            </h4>

            <div className={styles.payment__wrapper}>
              <div className={styles.method__options}>
                <label className={styles.input__lable}>
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => setMethod("bkash")}
                  />
                  <span>bKash</span>
                </label>
                <label className={styles.input__lable}>
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => setMethod("payoneer")}
                  />
                  <span>Payoneer</span>
                </label>
              </div>

              {method === "bkash" ? (
                <ul className={styles.service__list}>
                  <li className={styles.service__item}>
                    <div className={styles.service__content_box}>
                      <p className={styles.service__item_text}>
                        Please complete your bKash payment at first, then fill
                        up the form below.
                      </p>
                      <p className={styles.service__item_text}>
                        bKash Personal Number : {"+8801828304973"}
                      </p>
                      <div className={styles.transaction}>
                        <span>bKash Number</span>
                        <input
                          type="number"
                          className={styles.form__input}
                          placeholder="017XXXXXXXX"
                        />
                      </div>
                      <div>
                        <span>Transaction ID</span>
                        <input
                          type="text"
                          className={styles.form__input}
                          placeholder="TrnxID"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              ) : method === "payoneer" ? (
                <ul className={styles.service__list}>
                  <li className={styles.service__item}>
                    <div className={styles.service__content_box}>
                      <p className={styles.service__item_text}>
                        Please provide us your email to get Payment request in
                        your mail directly
                      </p>
                      <div className={styles.transaction}>
                        <span>Your email</span>
                        <input
                          type="email"
                          className={styles.form__input}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              ) : null}
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
}

export default Checkout;
