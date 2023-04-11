import MetisMenu from "metismenujs";
import Link from "next/link";
import { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const NavMenu = ({ isToggled }) => {
  useEffect(() => {
    new MetisMenu("#metismenu");
  }, []);

  return (
    <>
      <div className={isToggled ? "mobilemenu active" : "mobilemenu hide"}>
        <PerfectScrollbar>
          <ul className="metismenu text-muted" id="metismenu">
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
          </ul>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default NavMenu;
