// import "/public/sandbox-home/logo/logo-dark.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "/public/sandbox-home/logo/logo-light.png";
let navList = ["home", "pages", "about", "contact"];
let pages = ["services", "shop", "career", "pricing"];
export default function Navbar() {
  return <Header logo={"./sandbox-home/logo/logo-light.png"} />;
}
function Header({ logo, classN }) {
  const [closed, setClosed] = useState(null);

  return (
    <header className={classN}>
      <div className="container mx-auto">
        <nav className="flex justify-between w-full items-center">
          <div className="nav-brand">
            <img src={logo} alt="logo" />
          </div>
          <Ul className={"pc-nav hidden lap:flex "} />
          <div className="right flex gap-3 items-center">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="cart-icon"
            />
            <Link to="login" className="login">
              Login
            </Link>
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="lap:hidden menu-icon"
              onClick={() => setClosed(true)}
            />
          </div>
        </nav>
      </div>
      <MobUl closed={closed} setClosed={setClosed} />
    </header>
  );
}

function MobUl({ closed, setClosed }) {
  function drawerClass() {
    if (closed) {
      return "drawer-animeted w-full lap:hidden absolute flex";
    }
    if (closed === false) {
      return "drawer-closed  lap:hidden absolute drawer";
    } else {
      return "opacity-0";
    }
  }
  return (
    <div
      className={
        drawerClass()
        // (closed
        //   ? "drawer-animeted w-full lap:hidden absolute flex"
        //   : "drawer-closed  lap:hidden absolute ") + "drawer"
      }
    >
      <div className="drawer-content h-full flex-col flex justify-between">
        <div className="top-drawer">
          <div className="drawer-heading flex justify-between items-center">
            <h3>Sandbox</h3>
            <FontAwesomeIcon
              icon="fa-solid fa-circle-xmark"
              className="close-icon"
              onClick={() => setClosed(false)}
            />
          </div>
          <Ul className={"mob-nav lap:hidden"} />
        </div>
        <div className="bottom-drawer">
          <div className="c-links flex flex-col">
            <a>info@email.com</a>
            <a>00 (123) 456 78 90</a>
          </div>
          <div className="drawer-icons flex">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
          </div>
        </div>
      </div>
      <div className="drawer-closer" onClick={() => setClosed(false)}></div>
    </div>
  );
}
function Ul({ className }) {
  const [page, setPage] = useState(null);
  function pageClass() {
    if (page) {
      return "page-nav-show pages-nav";
    }
    if (page === false) {
      return "pages-nav pages-nav-closed";
    } else {
      return "pages-nav";
    }
  }
  return (
    <ul className={className}>
      {navList.map((e) => {
        return (
          <>
            {e === "pages" ? (
              <>
                <li className="pages relative">
                  <a onClick={() => setPage(!page)}>{e}</a>
                  <ul className={pageClass()}>
                    {pages.map((el) => {
                      return (
                        <li key={el}>
                          <Link className="page-links" to={el}>
                            {el}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </>
            ) : (
              <li key={e}>
                <Link to={e}>{e}</Link>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
}
function MobNavBar({ logo }) {}
