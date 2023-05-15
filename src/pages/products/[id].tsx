import styles from "./ProductStyles.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import data from "../../data.json";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CartItems } from "../_app";

import headphones_image from "../../images/shared/desktop/image-category-thumbnail-headphones.png"
import speakers_image from "../../images/shared/desktop/image-category-thumbnail-speakers.png"
import earphones_image from "../../images/shared/desktop/image-category-thumbnail-earphones.png";


function Product({ cartItems, setCartItems } : { cartItems: CartItems[], setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>> }) {

  const router = useRouter();

  const { id } = router.query;

  const productTest = data.find(datum => datum.slug === id);  

  const [productQuantity, setProductQuantity] = useState<number>(0);
  const [width, setWidth] = useState<number>();
  const [device, setDevice] = useState<string>("desktop");

  function getWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", getWidth);
    if (width! >= 1025) setDevice("desktop");
    else if (width! < 1025 && width! >= 800) setDevice("tablet");
    else if (width! < 800) setDevice("mobile");
  });
  
  return (
    <>
      <Head>
        <title>{productTest?.name} | Products</title>
      </Head>
      {productTest && <main className={styles.main}>
        <div className={styles.innerMain}>
          <div className={styles.back} onClick={() => router.back()}>Go Back</div>
          <div className={styles.first}>
            <div className={styles.left}>
              <Image src={productTest?.image[device as keyof typeof productTest.image]!} alt="img" width={540} height={560} />
            </div>
            <div className={styles.right}>
              <div className={styles.header}>{productTest?.name.toUpperCase()}</div>
              <div className={styles.text}>{productTest?.description}</div>
              <div className={styles.price}>${productTest?.price}</div>
              <div className={styles.cartButtons}>
                <div className={styles.leftButtons}>
                  <button onClick={() => productQuantity !== 0 && setProductQuantity(productQuantity - 1)}>-</button>
                  <div className={styles.price}>{productQuantity}</div>
                  <button onClick={() => setProductQuantity(productQuantity + 1)}>+</button>
                </div>
                <div className={styles.rightButtons}>
                  <button onClick={() => {
                    
                    if (productQuantity > 0) {
                      if (cartItems.length === 0) {
                        setCartItems([...cartItems, { name: productTest.name, quantity: productQuantity, image: productTest.image.desktop, price: productTest.price}]);
                      } else {
                        cartItems.map((item: any) => {
                          if (item.name.includes(productTest.name)) {
                            let newObj = cartItems;
                            newObj[cartItems.findIndex((itemFound) => itemFound.name === productTest.name)]!.quantity += productQuantity;
                            setCartItems(newObj);
                          } else {
                            setCartItems([...cartItems, { name: productTest.name, quantity: productQuantity, image: productTest.image.desktop, price: productTest.price}])
                          }
                        });
                      }
                    }
                    
                    
                  }}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.second}>
            <div className={styles.left}>
              <div className={styles.header}>FEATURES</div>
              <div className={styles.description}>{productTest?.features}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.header}>IN THE BOX</div>
              <div className={styles.included}>
                {productTest?.includes.map((item, index) => <div key={index} className={styles.description}>
                  <span>{item.quantity}x</span>
                  <div>{item.item}</div>
                </div>)}
              </div>
            </div>
          </div>

          <div className={styles.gallery}>
            <div>
              <Image src={productTest?.gallery.first.desktop!} width={445} height={280} alt="gallery" />
              <Image src={productTest?.gallery.second.desktop!} width={445} height={280} alt="gallery" />
            </div>
            <Image src={productTest?.gallery.third.desktop!} width={600} height={592} alt="gallery" />

          </div>

          <div className={styles.fourth}>
            <div className={styles.title}>YOU MAY ALSO LIKE</div>
            <div className={styles.cards}>
              {productTest?.others.map((other, index) => <div key={index} className={styles.card}>
                <Image src={other.image[device as keyof typeof other.image]!} width={350} height={318} alt="img" />
                <div className={styles.header}>{other.name}</div>
                <Link href={`/products/${other.slug}`}><button>SEE PRODUCT</button></Link>
              </div>)}
            </div>
          </div>

          <div className={styles.fifth}>
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

        <div className={styles.sixth}>
          <div className={styles.innerSixth}>
            <div className={styles.left}>
              <div className={styles.header}>Bringing you the <span>best</span> audio gear</div>
              <div className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</div>
            </div>
            <div className={styles.right}>
              
            </div>
          </div>
        </div>
                  
        </div>
      </main>}
    </>
  )
}

export default Product;