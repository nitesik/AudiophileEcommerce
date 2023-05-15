import Head from "next/head";
import styles from "./HeadphonesStyles.module.css";
import Image from "next/image";
import Link from "next/link";
import headphones_image from "../images/shared/desktop/image-category-thumbnail-headphones.png"
import speakers_image from "../images/shared/desktop/image-category-thumbnail-speakers.png"
import earphones_image from "../images/shared/desktop/image-category-thumbnail-earphones.png";


function Headphones() {

  return (
    <>
      <Head>
        <title>Headphones | Categories</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.innerIntro}>HEADPHONES</div>

        </div>
        <div className={`${styles.component} ${styles.first}`}>
          <div className={styles.innerComponent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.subHeader}>NEW PRODUCT</div>
              <div className={styles.header}>XX99 Mark II Headphones</div>
              <div className={styles.text}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</div>
              <Link href={"/products/xx99-mark-two-headphones"}><button className={styles.button}>SEE PRODUCT</button></Link>
            </div>
          </div>
        </div>

        <div className={`${styles.component} ${styles.second}`}>
          <div className={styles.innerComponent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.header}>XX99 Mark I Headphones</div>
              <div className={styles.text}>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</div>
              <Link href={"/products/xx99-mark-one-headphones"}><button className={styles.button}>SEE PRODUCT</button></Link>
            </div>
          </div>
        </div>

        <div className={`${styles.component} ${styles.third}`}>
          <div className={styles.innerComponent}>
            <div className={styles.left}></div>
            <div className={styles.right}>
              <div className={styles.header}>XX59 Headphones</div>
              <div className={styles.text}>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</div>
              <Link href={"/products/xx59-headphones"}><button className={styles.button}>SEE PRODUCT</button></Link>
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

export default Headphones;