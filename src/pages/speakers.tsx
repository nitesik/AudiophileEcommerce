import Head from "next/head";
import styles from "./SpeakersStyles.module.css";
import Image from "next/image";
import Link from "next/link";

import headphones_image from "../images/shared/desktop/image-category-thumbnail-headphones.png"
import speakers_image from "../images/shared/desktop/image-category-thumbnail-speakers.png"
import earphones_image from "../images/shared/desktop/image-category-thumbnail-earphones.png";

function Speakers() {

  return (
    <>
      <Head>
        <title>Speakers | Categories</title>
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
              <div className={styles.header}>ZX9 SPEAKER</div>
              <div className={styles.text}>Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</div>
              <Link href={"/products/zx9-speaker"}><button className={styles.button}>SEE PRODUCT</button></Link>
            </div>
          </div>
        </div>

        <div className={`${styles.component} ${styles.second}`}>
          <div className={styles.innerComponent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.header}>ZX7 SPEAKERs</div>
              <div className={styles.text}>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</div>
              <Link href={"/products/zx7-speaker"}><button className={styles.button}>SEE PRODUCT</button></Link>
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
              <Image src={speakers_image} width={163} height={160} alt="speakers" />
              <div className={styles.header}>SPEAKERS</div>
              <Link className={styles.link} href="/speakers">SHOP</Link>
            </div>
            <div className={styles.card}>
              <Image src={earphones_image} width={163} height={160} alt="earphones" />
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

export default Speakers;