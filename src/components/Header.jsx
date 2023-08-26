import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaRegSun, FaRegMoon, FaHouse, FaCircleInfo, FaEnvelope, FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ theme, setTheme, location, setLoginModal, searchModal, setSearchModal, searchQuery, setSearchQuery }) {
  useEffect(() => {
    setLoginModal(false);
  }, [location]);

  const switchButtons = useRef([]);
  const checkedIcons = useRef([]);
  const searchElements = useRef([]);

  const [checkedToggleIcon, setCheckedToggleIcon] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("dark_mode");
      switchButtons.current.forEach((btn) => {
        btn.classList.add("selected");
      });
      setCheckedToggleIcon(<FaRegMoon />);
    } else {
      document.body.classList.remove("dark_mode");
      switchButtons.current.forEach((btn) => {
        btn.classList.remove("selected");
      });
      setCheckedToggleIcon(<FaRegSun />);
    }
  }, [theme]);

  useEffect(() => {
    if (searchModal) {
      if ("block" != searchElements.current[0].style.display) {
        document.body.classList.add("search_mod");
      }
      searchElements.current[0].style.display = "block";
      searchElements.current[1].style.top = "50%";
      searchElements.current[2].focus();
    } else {
      searchElements.current[0].style.display = "none";
      searchElements.current[1].style.top = "-50%";
      document.body.classList.remove("search_mod");
    }
  }, [searchModal]);

  useEffect(() => {
    if (mobileMenu) {
      document.getElementById("mobil_overlay_menu").style.transform = "translateX(0)";
      document.getElementById("mobil_overlay_background").style.display = "block";
      document.body.style.overflow = "hidden";
    } else {
      document.getElementById("mobil_overlay_menu").style.transform = "translateX(250px)";
      document.getElementById("mobil_overlay_background").style.display = "none";
      document.body.style.overflow = "auto";
    }
  }, [mobileMenu]);

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          setSearchModal(false);
        }}
        ref={(el) => (searchElements.current[0] = el)}
        id="search_mod"
      ></div>
      <div className="search_box" ref={(el) => (searchElements.current[1] = el)}>
        <form
          action="arama"
          method="get"
          onSubmit={(e) => {
            e.preventDefault();

            const searchVal = decodeURIComponent(searchElements.current[2].value.toLowerCase().replace(/ /g, "+"));

            setSearchQuery(searchVal);

            navigate(`.././arama?q=${searchVal}`);
          }}
        >
          <input
            type="search"
            name="q"
            className="search_input"
            placeholder="Arama Yap..."
            required="required"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value.toLowerCase());
            }}
            ref={(el) => (searchElements.current[2] = el)}
          />
          <button type="submit" className="search_btn">
            <FaMagnifyingGlass />
          </button>
        </form>
      </div>
      <header>
        <div id="header_section1">
          <div id="header_section1_box">
            <div className="logo_container">
              <span className="logo_v1">
                <a href="/">
                  <img style={{ height: "60px" }} src=".././img/metalogo.webp" alt="Blog Sitesi Scripti Logo" />
                </a>
              </span>
            </div>
            <div id="header_components">
              <div
                style={{
                  display: "table-cell",
                  verticalAlign: "middle",
                  borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <span
                  onClick={() => {
                    setLoginModal(true);
                  }}
                  className="login_btn"
                >
                  <i style={{ fontSize: "12px", marginRight: "3px" }} className="fas fa-user"></i>
                  <FaUser style={{ fontSize: "12px", marginRight: "3px" }} />
                  Giriş Yap
                </span>

                <div id="dark_light_btn">
                  <div onClick={switchTheme} ref={(el) => (switchButtons.current[0] = el)} className="switch_btn">
                    <FaRegSun className="first-icon" style={{ marginRight: "10px" }} />
                    <FaRegMoon style={{ fill: "#d7d8e6" }} />
                    <div ref={(el) => (checkedIcons.current[0] = el)} className="checked_icon">
                      {checkedToggleIcon}
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setSearchModal(true);
                  }}
                  className="header_btn"
                >
                  <FaMagnifyingGlass style={{ fontSize: "14px" }} className="fab fa-sistrix" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header_section2">
          <div id="header_section2_box">
            <nav id="header_navbar">
              <div className="header_inner_logo">
                <a href="/">
                  <img
                    className="white_theme_logo"
                    style={{ height: "100%" }}
                    src=".././img/metalogo_dark.webp"
                    alt="Blog Sitesi Scripti Dark Logo"
                  />
                  <img className="dark_theme_logo" style={{ height: "100%" }} src=".././img/metalogo.webp" alt="Blog Sitesi Scripti Logo" />
                </a>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  position: "relative",
                  alignItems: "center",
                  height: "45px",
                }}
              >
                <li
                  onClick={() => {
                    setMobileMenu(true);
                  }}
                  className="hamburger_btn"
                >
                  <span>
                    <FaBars />
                  </span>
                </li>
                <li className="nav_link">
                  <Link to="/" className="navbar_item">
                    <FaHouse /> Anasayfa
                  </Link>
                </li>
                <li className="nav_link">
                  <Link to="/hakkimizda" className="navbar_item">
                    <FaCircleInfo /> Hakkımızda
                  </Link>
                </li>
                <li className="nav_link">
                  <Link to="/iletisim" className="navbar_item">
                    <FaEnvelope /> İletişim
                  </Link>
                </li>
              </div>
            </nav>
            <div
              onClick={() => {
                setMobileMenu(false);
              }}
              id="mobil_overlay_background"
            ></div>
            <div id="mobil_overlay_menu">
              <form action="">
                <input type="search" name="search" className="mobil_search_input" placeholder="Ara.." />
                <input type="submit" value="Ara" className="mobil_search_btn" />
              </form>
              <hr />
              <div className="mobil_menu_social">
                <a href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </div>
              <br />
              <br />
              <div style={{ overflow: "auto", height: "calc(100% - 170px)" }}>
                <a href="/" className="mobil_nav_link">
                  <i className="fa-solid fa-house"></i> Anasayfa
                </a>
                <a href="/" className="mobil_nav_link">
                  <i className="fa-solid fa-circle-info"></i> Hakkımızda
                </a>
                <a href="/" className="mobil_nav_link">
                  <i className="fa-solid fa-envelope"></i> İletişim
                </a>
              </div>
              <div className="mobil_menu_footer">
                <a href="/">Giriş Yap</a>
                <div style={{ float: "right" }}>
                  <div
                    style={{ backgroundColor: "gray" }}
                    className="switch_btn2"
                    ref={(el) => (switchButtons.current[1] = el)}
                    onClick={switchTheme}
                  >
                    <FaRegSun className="first-icon" style={{ marginRight: "10px" }} />
                    <FaRegMoon style={{ fill: "#d7d8e6" }} />
                    <div ref={(el) => (checkedIcons.current[1] = el)} className="checked_icon2">
                      {checkedToggleIcon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="login_box">
        <div className="login_box_header">
          <span className="apple_icon apple_icon1"></span>
          <span className="apple_icon apple_icon2"></span>
          <span className="apple_icon apple_icon3"></span>
          <span style={{ fontSize: "17px", marginLeft: "5px", fontWeight: "500" }}>Giriş Yap</span>
          <button
            onClick={() => {
              setLoginModal(false);
            }}
          >
            <FaXmark />
          </button>
        </div>
        <div className="login_box_main">
          <p>Blog Sitesi Scripti ayrıcalıklarından yararlanmak için hemen giriş yapın veya hesap oluşturun, üstelik tamamen ücretsiz!</p>
          <Link to="/giris" style={{ marginRight: "10px" }}>
            Giriş Yap
          </Link>
          <Link to="/kayit">Kayıt Ol</Link>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
      <div className="login_box_overlay"></div>
    </>
  );
}
