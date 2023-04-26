import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const Menu = ({ addClass }) => {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const [size, setSize] = useState(0);

  const toggleTrueFalse = () => setToggled(!isToggled);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
        <div className="container align-self-center position-relative">
          <div className="main-nav float-left ">
            <nav>
              {/* this is the browser menu  */}
              <ul className="main-menu d-none d-lg-inline font-small">
                <Link href="/">
                  <a>
                    <img
                      className="logo"
                      src="/assets/imgs/theme/ReggioHomeLogoBlackWhite.png"
                      alt=""
                      width="40px"
                    />
                    {/* <span className="logoName">Reggio Home</span> */}
                  </a>
                </Link>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a>Search</a>
                  </Link>
                </li>

                <li>
                  <Link href="/category/hotels">
                    <i className="elegant-icon icon_search mr-5"></i>
                  </Link>
                </li>
              </ul>

              {/* this is the mobile menu */}
              <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                <button onClick={toggleTrueFalse}>
                  <span className="menu-icon mr-10">
                    <span className="menu-icon-inner"></span>
                  </span>
                  Main Menu
                </button>
                <NavMenu isToggled={isToggled} />
              </div>
            </nav>
          </div>
          {/* <div className="float-right header-tools text-muted font-small">
            <ul className="header-social-network d-inline-block list-inline mr-15">
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon fb text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_facebook"></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon tw text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_twitter "></i>
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/#">
                  <a
                    className="social-icon pt text-xs-center"
                    target="_blank"
                    href="#"
                  >
                    <i className="elegant-icon social_pinterest "></i>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="off-canvas-toggle-cover d-inline-block">
              <div
                className="off-canvas-toggle hidden d-inline-block"
                id="off-canvas-toggle"
                onClick={addClass}
              >
                <span></span>
              </div>
            </div>
          </div> */}
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default Menu;
