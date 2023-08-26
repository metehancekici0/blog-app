import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrophy, FaEye, FaArrowUp } from "react-icons/fa6";
import DataPosts from "../pages/blog/Posts.json";
import DataUsers from "../pages/Users.json";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [mostReadPosts, setMostReadPosts] = useState([]);
  const [topRatedUsers, setTopRatedUsers] = useState([]);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Sırala ve en çok okunan ilk 4 postu al
    const sortedPosts = [...DataPosts.Posts].sort(
      (a, b) => b.okunma_sayisi - a.okunma_sayisi
    );
    const topPosts = sortedPosts.slice(0, 4);
    setMostReadPosts(topPosts);

    // Sırala ve en çok puanlı ilk 5 kullanıcıyı al
    const sortedUsers = [...DataUsers.Users].sort((a, b) => b.puan - a.puan);
    const topUsers = sortedUsers.slice(0, 5);
    setTopRatedUsers(topUsers);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <footer>
        <section id="footer_main">
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">
                <span className="">●</span> Yazar Puanları İlk 5 | 2022
              </h4>
            </li>
            <div>
              <ul className="top5users">
                {topRatedUsers.map((user, index) => (
                  <div key={index}>
                    <a href={`.././yazar/${user.username}`}>
                      <li
                        style={
                          index === 0 ? { backgroundColor: "#847AD1" } : {}
                        }
                      >
                        <div className="author_datas_div">
                          <img
                            src={`.././img/${user.image}`}
                            alt={`Profile by ${user.nickname}`}
                          />
                          <div>
                            <span
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              {user.nickname}
                            </span>
                            <br />
                            <span style={{ fontSize: "13px" }}>
                              {user.puan} puan
                            </span>
                          </div>
                        </div>
                        <div className="author_trophy_div">
                          <span className="clip_border">
                            <span className="clip_color">
                              <FaTrophy />
                            </span>
                          </span>
                        </div>
                        <div style={{ clear: "both" }}></div>
                      </li>
                    </a>
                    <div style={{ clear: "both" }}></div>
                  </div>
                ))}
              </ul>
            </div>
          </ul>
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">
                <span className="">●</span> Çok Okunanlar
              </h4>
            </li>

            {mostReadPosts.map((post, index) => (
              <div key={index}>
                <li
                  style={{
                    marginBottom: "5px",
                    padding: "0",
                    overflow: "auto",
                  }}
                >
                  <Link
                    to={`.././blog/${post.url}`}
                    style={{
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      display: "inline-block",
                      width: "100%",
                    }}
                    className="generic-anchor footer-list-anchor mostrelatedposts"
                  >
                    <div className="footer_most_reads_img">
                      <img
                        style={{
                          objectFit: "cover",
                          objectPosition: "center center",
                          width: "100%",
                          height: "100%",
                        }}
                        src={`.././img/blog/${post.image}`}
                        loading="lazy"
                        alt={post.title}
                      />
                    </div>
                    <div className="footer_most_reads_datas">
                      {post.title}
                      <span
                        style={{ display: "inline-block", marginLeft: "5px" }}
                      >
                        (
                        <FaEye />
                        <span style={{ fontSize: "14.5px" }}>
                          {post.okunma_sayisi}
                        </span>
                        )
                      </span>
                    </div>
                  </Link>
                </li>
                <div style={{ clear: "both" }}></div>
              </div>
            ))}
          </ul>
          <ul className="footer-list-top">
            <li>
              <h4 className="footer-list-header">
                <span className="">●</span> Sponsorlar
              </h4>
            </li>
            <ul>
              <li className="sponsore_link">
                <a
                  href="https://www.havelsan.com.tr/"
                  rel="noreferrer"
                  target="_blank"
                  className="generic-anchor footer-list-anchor"
                >
                  <img
                    style={{ width: "100%" }}
                    src=".././img/sponsor/sponsor4.jpg"
                    loading="lazy"
                    alt="https://www.havelsan.com.tr/"
                  />
                </a>
              </li>
              <li className="sponsore_link">
                <a
                  href="https://vizyonergenc.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="generic-anchor footer-list-anchor"
                >
                  <img
                    style={{ width: "100%" }}
                    src=".././img/sponsor/sponsor3.jpg"
                    loading="lazy"
                    alt="https://vizyonergenc.com/"
                  />
                </a>
              </li>
              <li className="sponsore_link">
                <a
                  href="https://www.kariyer.net/profil"
                  rel="noreferrer"
                  target="_blank"
                  className="generic-anchor footer-list-anchor"
                >
                  <img
                    style={{ width: "100%" }}
                    src=".././img/sponsor/sponsor2.jpg"
                    loading="lazy"
                    alt="https://www.kariyer.net/profil"
                  />
                </a>
              </li>
              <li className="sponsore_link">
                <a
                  href="https://www.r10.net/"
                  rel="noreferrer"
                  target="_blank"
                  className="generic-anchor footer-list-anchor"
                >
                  <img
                    style={{ width: "100%" }}
                    src=".././img/sponsor/sponsor1.jpg"
                    loading="lazy"
                    alt="https://www.r10.net/"
                  />
                </a>
              </li>
            </ul>
          </ul>
          <div style={{ clear: "both" }}></div>
          <section className="footer-bottom-section flex-rw">
            <div className="footer-bottom-wrapper">
              Created by Metehan Çekici © 2023
            </div>
            <div className="footer-bottom-wrapper">
              <a
                href="../kategori/yazilim"
                className="generic-anchor footer_nav_links"
              >
                <i className="fa-solid fa-code"></i> Yazılım
              </a>
              <a
                href="../kategori/yemek-tarifleri"
                className="generic-anchor footer_nav_links"
              >
                <i className="fa-solid fa-burger"></i> Yemek Tarifleri
              </a>
              <a
                href="../kategori/otomobil"
                className="generic-anchor footer_nav_links"
              >
                <i className="fa-solid fa-car"></i> Otomobil
              </a>
            </div>
            <div style={{ clear: "both" }}></div>
          </section>
        </section>
      </footer>
      <button
        className={`back-to-top-button ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </>
  );
}
