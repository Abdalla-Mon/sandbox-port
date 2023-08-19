import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import CloseBtn from "../fixedComponent/CloseBtn";

let navList = ["home", "pages", "about", "contact"];
let pages = ["services", "shop", "career", "pricing"];

function scrollFnc() {
  window.scrollTo({ top: 0, behavior: "instant" });
}
export default function Navbar() {
  const [header, showHeader] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      showHeader(true);
    } else {
      showHeader(false);
    }
  });
  let variants = {
    showNav: {
      y: 0,
      display: "block",

      transition: {
        ease: "easeIn",
        duration: 0.3,
        y: { delay: 0.1 },
        display: {
          duration: 0,
        },
      },
    },
    hideNav: {
      y: -100,
      display: "none",
      transition: {},
    },
  };
  return (
    <>
      <Header logo={"./sandbox-home/logo/logo-light.png"} />
      <motion.div
        variants={variants}
        initial={{
          y: -100,
        }}
        animate={header ? "showNav" : "hideNav"}
        className="header-animation"
      >
        <Header
          logo={"./sandbox-home/logo/logo-dark.png"}
          bg={{ backgroundColor: "#3f78e0", color: "#ffffff" }}
        />
      </motion.div>
    </>
  );
}
function Header({ logo, classN, bg = { backgroundColor: "#ffffff" } }) {
  const [closed, setClosed] = useState(true);

  return (
    <header className={classN}>
      <div className="container mx-auto">
        <nav className="flex justify-between w-full items-center">
          <div className="nav-brand">
            <Link to="" onClick={scrollFnc}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Ul className={"pc-nav hidden lap:flex "} />
          <div className="right flex gap-3 items-center">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="cart-icon"
            />
            <Link to="login" className="login" style={bg} onClick={scrollFnc}>
              Login
            </Link>
            <FontAwesomeIcon
              icon="fa-solid fa-bars"
              className="lap:hidden menu-icon"
              onClick={() => setClosed(false)}
            />
          </div>
        </nav>
      </div>
      <MobUl closed={closed} setClosed={setClosed} />
    </header>
  );
}

function MobUl({ closed, setClosed }) {
  const variants = {
    hidden: {
      display: "none",
      transition: {
        delay: 0.3,
      },
    },
    show: {
      display: "flex",
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial={{ display: "none" }}
      animate={closed ? "hidden" : "show"}
      className={"drawer  lap:hidden absolute flex"}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={closed ? { x: "-100%" } : { x: "0%" }}
        transition={{
          ease: "easeIn",
          duration: 0.3,
        }}
        className="drawer-content h-full flex-col flex justify-between"
      >
        <div className="top-drawer">
          <div className="drawer-heading flex justify-between items-center">
            <h3>Sandbox</h3>

            <CloseBtn className="close-icon" setClose={setClosed} />
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={closed ? { opacity: "0" } : { opacity: "0.6" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="drawer-closer"
        onClick={() => setClosed(true)}
      ></motion.div>
    </motion.div>
  );
}
function Ul({ className }) {
  const [page, setPage] = useState(null);

  return (
    <ul className={className}>
      {navList.map((e) => {
        return (
          <>
            {e === "pages" ? (
              <>
                <li className="pages relative">
                  <a
                    onClick={() => setPage(!page)}
                    className="flex justify-between"
                  >
                    {e} <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  </a>
                  <motion.ul
                    initial={{ height: 0 }}
                    animate={page ? { height: 160 } : { height: 0 }}
                    className={"pages-nav lap:hidden"}
                  >
                    {pages.map((el) => {
                      return (
                        <li key={el} onClick={scrollFnc}>
                          <Link className="page-links" to={el}>
                            {el}
                          </Link>
                        </li>
                      );
                    })}
                  </motion.ul>
                  <ul className={"pages-nav page-nav-box hidden lap:block"}>
                    {pages.map((el) => {
                      return (
                        <li key={el} onClick={scrollFnc}>
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
              <li key={e} onClick={scrollFnc}>
                <Link to={e === "home" ? "" : e}>{e}</Link>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
}
