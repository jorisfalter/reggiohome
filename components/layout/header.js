import Link from "next/link";
import Menu from "./menu";

const Header = ({ addClass, openSearch }) => {
  return (
    <>
      <header className="main-header header-style-1 font-heading">
        <div className="header-top">
          <div className="container">
            <div className="row pt-10 pb-10">
              <div className="col-md-3 col-xs-6">
                <Link href="/">
                  <a>
                    <img
                      className="logo"
                      src="/assets/imgs/theme/ReggioHomeLogoBlackWhite.png"
                      alt=""
                      width="30px"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-md-9 col-xs-6 text-right header-top-right "></div>
            </div>
          </div>
        </div>
        <Menu addClass={addClass} />
      </header>
    </>
  );
};

export default Header;
