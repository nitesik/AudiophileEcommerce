import { NextPage } from "next";
import Head from "next/head";
import styles from "./CheckoutStyles.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { CartItems } from "./_app";
import Image from "next/image";
import checkMark from "../images/checkout/icon-order-confirmation.svg";

const Checkout: NextPage<{ cartItems: CartItems[], totalPrice: number }> = ({ cartItems, totalPrice }) => {

  const router = useRouter();

  const [payment, setPayment] = useState<boolean>(true);
  const [paymentDone, setPaymentDone] = useState(false);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.innerMain}>
          <div className={styles.back} onClick={() => router.back()}>Go Back</div>
          <form onSubmit={(event) => {event.preventDefault(); setPaymentDone(true)}}>
            <div className={styles.leftForm}>
              <div className={styles.title}>CHECKOUT</div>
              <div className={styles.first}>
                <div className={styles.highlight}>BILLING DETAILS</div>
                <div className={styles.firstForms}>
                  <div>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Email Address</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={styles.first}>
                <div className={styles.highlight}>SHIPPING INFO</div>
                <div className={styles.firstForms}>
                  <div className={styles.addressInput}>
                    <label htmlFor="">Address</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">ZIP Code</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">City</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Country</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={styles.first}>
                <div className={styles.highlight}>PAYMENT DETAILS</div>
                <div className={styles.firstForms}>
                  <label>Payment Method</label>
                  <label htmlFor="emoney" className={styles.radio}><input id="emoney" onChange={e => setPayment(true)} type="radio" name="payment" defaultChecked /> <label>e-Money</label></label>
                  <label htmlFor="cod" className={styles.radio} style={{gridColumn: 2, marginBottom: 10}}><input id="cod" onChange={e => setPayment(false)} type="radio" name="payment" /> <label>Cash on Delivery</label></label>
                  {payment && <>
                    <div>
                    <label htmlFor="">City</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label htmlFor="">Country</label>
                    <input type="text" />
                  </div></>}
                </div>
              </div>


              <div className={styles.second}></div>
              <div className={styles.third}></div>
            </div>
            <div className={styles.rightForm}>
              <div className={styles.title}>SUMMARY</div>
              <div className={styles.mid}>
                { cartItems.map(item => <div>
                  <div className={styles.left}>
                    <Image src={item.image} width={64} height={64} alt="image"></Image>
                    <div>
                      <div className={styles.header}>{item.name.split(" ")[0]}</div>
                      <div className={styles.text}>$ {item.price}</div>
                    </div>
                  </div>
                  <div className={styles.text}>x{item.quantity}</div>
                </div>) }
              </div>
              <div className={styles.lower}>
                <div>
                  <div className={styles.text}>TOTAL</div>
                  <div className={styles.header}>$ {totalPrice}</div>
                </div>
                <div>
                  <div className={styles.text}>SHIPPING</div>
                  <div className={styles.header}>$ {Math.floor(totalPrice * (0.5/100))}</div>
                </div>
                <div>
                  <div className={styles.text}>VAT (INCLUDED)</div>
                  <div className={styles.header}>$ {(totalPrice * (20/100)).toFixed(2)}</div>
                </div>
                <div className={styles.grandTotal}>
                  <div className={styles.text}>GRAND TOTAL</div>
                  <div className={styles.header}>$ {(totalPrice * (20/100) + totalPrice * (0.5/100) + totalPrice).toFixed()}</div>
                </div>
              </div>
              <button type="submit" disabled={cartItems.length < 1}>CONTINUE AND PAY</button>
            </div>
          </form>
        </div>
        { paymentDone && <div className={styles.paymentDone}>
            <div className={styles.paymentDoneBackground}></div>
            <div className={styles.paymentDonePopup}>
              <Image src={checkMark} width={64} height={64} alt="check"></Image>
              <div className={styles.title}>THANK YOU FOR YOUR ORDER</div>
              <div className={styles.text}>You will receive an email confirmation shortly.</div>
              <div className={styles.box}>
                <div className={styles.left}>
                  <div className={styles.upperBox}>
                    <div>
                      <Image src={cartItems[0]!.image} height={50} width={50} alt="image"></Image>
                      <div>
                        <div className={styles.header}>{cartItems[0]?.name.split(" ")[0]}</div>
                        <div className={styles.text}>$ {cartItems[0]?.price}</div>
                      </div>
                    </div>
                    <div className={styles.text}>x{cartItems[0]?.quantity}</div>
                  </div>
                  { cartItems.length > 1 && <hr />}
                  { cartItems.length > 1 && <div className={styles.lowerBox}>
                    <div className={styles.text}>and {cartItems.length - 1} other item(s).</div>
                  </div>}
                </div>
                <div className={styles.right}>
                  <div className={styles.header}>GRAND TOTAL</div>
                  <div className={styles.price}>$ {totalPrice * (20/100) + totalPrice * (0.5/100) + totalPrice}</div>
                </div>
              </div>
              <button onClick={() => router.push("/")}>BACK TO HOME</button>
            </div>
          </div>}
      </main>
    </>
  )
}

export default Checkout;