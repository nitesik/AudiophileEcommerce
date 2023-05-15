import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import cart_icon from "../images/shared/desktop/icon-cart.svg";
import logo from "../images/shared/desktop/logo.svg";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

import "~/styles/globals.css";
import Image from "next/image";
import Link from "next/link";

import fb_logo from "../images/shared/desktop/icon-facebook.svg";
import tt_logo from "../images/shared/desktop/icon-twitter.svg";
import ig_logo from "../images/shared/desktop/icon-instagram.svg";
import hamburger from "../images/shared/tablet/icon-hamburger.svg";
import headphones_image from "../images/shared/desktop/image-category-thumbnail-headphones.png"
import speakers_image from "../images/shared/desktop/image-category-thumbnail-speakers.png"
import earphones_image from "../images/shared/desktop/image-category-thumbnail-earphones.png";


import { useEffect, useState } from "react";

export interface CartItems {
  name: string,
  quantity: number,
  image: string,
  price: number
}

function MobileNav({ mobileMenu, setMobileMenu, router, cartOpen, cartItems, setCartItems, buttonHandler, totalPrice, setCartOpen } : any) {

  return (
    <>
    <nav>
      <div className="innerNav mobile">
        <div> 
          <Image src={hamburger} width={16} height={16} alt="hambuger" onClick={() => setMobileMenu((prev: boolean) => !prev)} />
          
          <Image src={logo} width={143} height={25} alt="logo" onClick={() => router.push("/")} />
        </div>
        <Image src={cart_icon} width={23} height={20} alt="cart" onClick={() => setCartOpen(true)} />
      </div>
    </nav>
    {mobileMenu && <div className="mobileMenu">
            <div className="mobileMenuBackground" onClick={() => setMobileMenu(false)}></div>  
            <div className={`mobileMenuPopup ${!mobileMenu && "close"}`}>
              <div className={"cards"}>
                <div className={"card"}>
                  <Image src={headphones_image} width={163} height={160} alt="headphones" />
                  <div className={"header"}>HEADPHONES</div>
                  <Link className={"link"} href="/headphones">SHOP</Link>
                </div>
                <div className={"card"}>
                  <Image src={speakers_image} width={163} height={160} alt="headphones" />
                  <div className={"header"}>SPEAKERS</div>
                  <Link className={"link"} href="/speakers">SHOP</Link>
                </div>
                <div className={"card"}>
                  <Image src={earphones_image} width={163} height={160} alt="headphones" />
                  <div className={"header"}>EARPHONES</div>
                  <Link className={"link"} href="/earphones">SHOP</Link>
                </div>
              </div>
            </div>
          </div>}

          <div className={cartOpen ? `cartPopup` : "cartDisabled"}>
                  <div className="cardTop">
                    <div className="header">CART ({cartItems.length})</div>
                    <div className="remove" onClick={() => setCartItems([])} >Remove all</div>
                  </div>
                  <div className="cardMid">
                    {cartItems.map((item: CartItems) => 
                    <div key={item.name}>
                      <div className="left">
                        <Image src={item.image} width={64} height={64} alt="image" />
                        <div>
                          <div className="title">{item.name.split(" ")[0]}</div>
                          <div className="price">$ {item.price}</div>
                        </div>
                      </div>
                      <div className="right">
                        <div className={"leftButtons"}>
                          <button onClick={() => buttonHandler("-", item.name)}>-</button>
                          <div className={"quantity"}>{item.quantity}</div>
                          <button onClick={() => buttonHandler("+", item.name)}>+</button>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <div className="cartBottom">
                    <div className="total">
                      <div className="title">TOTAL</div>
                      <div className="money">$ {totalPrice}</div>
                    </div>
                    <button onClick={() => {router.push("/checkout"); setCartOpen(false)}}>CHECKOUT</button>
                  </div>
                </div>

                { cartOpen && <div className="cartMenu">
                <div className="cartBackground" onClick={() => setCartOpen(false)}></div>
              </div>}
    </>
  )
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [mobileMenu, setMobileMenu] = useState<boolean>(true);


  const router = useRouter();

  useEffect(() => {
    let totalPrice = 0;
    cartItems.map(item => {
      totalPrice += item.quantity * item.price;
    });

    setTotalPrice(totalPrice);
    
  }, [cartItems]);

  function buttonHandler(character: string, name: string) {
    let newArr = cartItems;
    if (character === "+") {
      newArr[newArr.findIndex(item => item.name === name)]!.quantity += 1
    }

    if (character === "-") {
      newArr[newArr.findIndex(item => item.name === name)]!.quantity -= 1
    }

    newArr = newArr.filter(item => item.quantity !== 0);

    setCartItems(newArr);
  }
  
  function DesktopNav() {
    
    return (
      <nav>
        <div className={"innerNav desktop"}>
            <Link href={"/"}><Image src={logo} width={143} height={25} alt="logo" /></Link>
            <div className={"navComponents"}>
              <Link href="/" className={"text"}>HOME</Link>
              <Link href="/headphones" className={"text"}>HEADPHONES</Link>
              <Link href="/speakers" className={"text"}>SPEAKERS</Link>
              <Link href="/earphones" className={"text"}>EARPHONES</Link>
            </div>
            <div>
              <Image src={cart_icon} width={23} height={20} alt="cart" onClick={() => setCartOpen(true)} />
              <div className={cartOpen ? `cartPopup` : "cartDisabled"}>
                  <div className="cardTop">
                    <div className="header">CART ({cartItems.length})</div>
                    <div className="remove" onClick={() => setCartItems([])} >Remove all</div>
                  </div>
                  <div className="cardMid">
                    {cartItems.map(item => 
                    <div key={item.name}>
                      <div className="left">
                        <Image src={item.image} width={64} height={64} alt="image" />
                        <div>
                          <div className="title">{item.name.split(" ")[0]}</div>
                          <div className="price">$ {item.price}</div>
                        </div>
                      </div>
                      <div className="right">
                        <div className={"leftButtons"}>
                          <button onClick={() => buttonHandler("-", item.name)}>-</button>
                          <div className={"quantity"}>{item.quantity}</div>
                          <button onClick={() => buttonHandler("+", item.name)}>+</button>
                        </div>
                      </div>
                    </div>)}
                  </div>
                  <div className="cartBottom">
                    <div className="total">
                      <div className="title">TOTAL</div>
                      <div className="money">$ {totalPrice}</div>
                    </div>
                    <button onClick={() => {router.push("/checkout"); setCartOpen(false)}}>CHECKOUT</button>
                  </div>
                </div>
            </div>
            { cartOpen && <div className="cartMenu">
                <div className="cartBackground" onClick={() => setCartOpen(false)}></div>
              </div>}
          </div>
      </nav>
    )
  }

  

  function DesktopFooter() {

    return (
      <footer className="desktop">
          <div className="innerFooter">
            <div className="left">
              <Link href={"/"}><Image src={logo} width={143} height={25} alt="logo" /></Link>
              <div className="text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</div>
              <div className="copyright">Copyright 2021. All Rights Reserved</div>
            </div>
            <div className="right">
              <div className="components">
                <Link href="/">HOME</Link >
                <Link href="/headphones">HEADPHONES</Link >
                <Link href="/speakers">SPEAKERS</Link >
                <Link href="/earphones">EARPHONES</Link >
              </div>
              <div className="logos">
                <Image src={fb_logo} height={24} width={24} alt="logos" />
                <Image src={tt_logo} height={24} width={24} alt="logos" />
                <Image src={ig_logo} height={24} width={24} alt="logos" />
              </div>
            </div>
          </div>
        </footer>
    )
  }

  function MobileFooter() {

    return (
      <footer className="mobile">
          <div className="innerFooter">
              <Link href={"/"}><Image src={logo} width={143} height={25} alt="logo" /></Link>
                <div className="components">
                  <Link href="/">HOME</Link >
                  <Link href="/headphones">HEADPHONES</Link >
                  <Link href="/speakers">SPEAKERS</Link >
                  <Link href="/earphones">EARPHONES</Link >
                </div>
              <div className="text">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</div>
              <div className="bottom">
                <div className="copyright">Copyright 2021. All Rights Reserved</div>
                <div className="logos">
                  <Image src={fb_logo} height={24} width={24} alt="logos" />
                  <Image src={tt_logo} height={24} width={24} alt="logos" />
                  <Image src={ig_logo} height={24} width={24} alt="logos" />
                </div>
            </div>
          </div>

        </footer>
    )
  }

  return (
    <SessionProvider session={session}>
      <DesktopNav />
      <MobileNav mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} router={router} cartOpen={cartOpen} cartItems={cartItems} buttonHandler={buttonHandler} totalPrice={totalPrice} setCartOpen={setCartOpen} setCartItems={setCartItems} />

      <Component {...pageProps} cartItems={cartItems} setCartItems={setCartItems} totalPrice={totalPrice} />
      <DesktopFooter />
      <MobileFooter />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
