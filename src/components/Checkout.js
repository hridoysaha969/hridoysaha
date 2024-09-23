import { servicesArray } from "@/lib/constant";
import styles from "@/styles/checkout.module.css";
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
function Checkout({ pId }) {
  const [paymentObj, setPaymentObj] = useState({
    number: "",
    trxId: "",
    email: "",
  });
  const [selectedPackage, setSelectedPackage] = useState();
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const services = servicesArray.filter((item) => item.package === pId);
    setSelectedPackage(services[0]);
    setLoading(false);
  }, [pId]);

  const handlePlaceOrder = () => {
    if (method === "bkash") {
      if (!paymentObj.number || !paymentObj.trxId) {
        setError("Provide Number & TrxId");
        return false;
      }
      console.log("Order complete with bkash", paymentObj);
      setPaymentObj({
        number: "",
        trxId: "",
        email: "",
      });
    } else if (method === "payoneer") {
      if (!paymentObj.email) {
        setError("Provide valid email");
        return false;
      }
      console.log("Order complete with Payoneer", paymentObj);
      setPaymentObj({
        number: "",
        trxId: "",
        email: "",
      });
    }
  };

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

        {!loading && (
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
                          up the form below.{" "}
                          {`[NOTE]: 1.85% "SEND MONEY" cost will be added with net price.`}{" "}
                          bKash Personal Number : {"+8801828304973"}
                        </p>
                        <div className={styles.transaction}>
                          <span>bKash Number</span>
                          <input
                            type="number"
                            name="number"
                            value={paymentObj.number}
                            className={styles.form__input}
                            placeholder="017XXXXXXXX"
                            onChange={(e) => {
                              setPaymentObj({
                                ...paymentObj,
                                number: e.target.value,
                              });
                              setError("");
                            }}
                            required
                          />
                        </div>
                        <div>
                          <span>Transaction ID</span>
                          <input
                            type="text"
                            name="trxId"
                            value={paymentObj.trxId}
                            className={styles.form__input}
                            placeholder="TrnxID"
                            onChange={(e) => {
                              setPaymentObj({
                                ...paymentObj,
                                trxId: e.target.value,
                              });
                              setError("");
                            }}
                            required
                          />
                          {error &&
                            (!paymentObj.number || !paymentObj.trxId) && (
                              <span className={styles.invalid__feedback}>
                                {error}
                              </span>
                            )}
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
                            name="email"
                            value={paymentObj.email}
                            className={styles.form__input}
                            placeholder="Email"
                            required
                            onChange={(e) =>
                              setPaymentObj({
                                ...paymentObj,
                                email: e.target.value,
                              })
                            }
                          />
                          {error && !paymentObj.email && (
                            <span className={styles.invalid__feedback}>
                              {error}
                            </span>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>
                ) : null}
              </div>
            </li>
            <li className={styles.timeline__item}>
              <h4 className={`h4 ${styles.timeline__item_title}`}>
                Complete your order
              </h4>
              <button
                className={styles.btn__order}
                disabled={!method ? true : false}
                onClick={handlePlaceOrder}
              >
                <span>Place Order</span>
              </button>
            </li>
          </ol>
        )}
      </section>
    </article>
  );
}

export default Checkout;
