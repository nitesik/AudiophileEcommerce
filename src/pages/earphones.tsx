import Head from "next/head";
import styles from "./EarphonesStyle.module.css";
import Image from "next/image";
import Link from "next/link";
import headphones_image from "../images/shared/desktop/image-category-thumbnail-headphones.png"
import speakers_image from "../images/shared/desktop/image-category-thumbnail-speakers.png"
import earphones_image from "../images/shared/desktop/image-category-thumbnail-earphones.png";

function Earphones() {

  return (
    <>
      <Head>
        <title>Earphones | Categories</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.innerIntro}>SPEAKERS</div>
        </div>
        <div className={`${styles.component} ${styles.first}`}>
          <div className={styles.innerComponent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.subHeader}>NEW PRODUCT</div>
              <div className={styles.header}>YX1 WIRELESS EARPHONES</div>
              <div className={styles.text}>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</div>
              <Link href={"/products/yx1-earphones"}><button className={styles.button}>SEE PRODUCT</button></Link>

            </div>
          </div>
        </div>
        
        <div className={styles.fourth}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={headphones_image} width={163} height={160} alt="headphones" />
              <div className={styles.header}>HEADPHONES</div>
              <Link className={styles.link} href="/headphones">SHOP</Link>
            </div>
            <div className={styles.card}>
              <Image src={speakers_image} width={163} height={160} alt="headphones" />
              <div className={styles.header}>SPEAKERS</div>
              <Link className={styles.link} href="/speakers">SHOP</Link>
            </div>
            <div className={styles.card}>
              <Image src={earphones_image} width={163} height={160} alt="headphones" />
              <div className={styles.header}>EARPHONES</div>
              <Link className={styles.link} href="/earphones">SHOP</Link>
            </div>
          </div>
        </div>

        <div className={styles.fifth}>
          <div className={styles.innerFifth}>
            <div className={styles.left}>
              <div className={styles.header}>Bringing you the <span>best</span> audio gear</div>
              <div className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</div>
            </div>
            <div className={styles.right}></div>
          </div>
        </div>
        
      </main>
    </>
  )
}

export default Earphones;