import React from "react";
import { FaArrowTrendUp, FaCircleArrowRight, FaRegClock, FaArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Posts from "./blog/Posts.json";
import Post from "../components/Post";

export default function Home() {
  const data = Posts.Posts;

  return (
    <>
      <div id="posts_container_v1">
        <div className="post_box_3">
          <Link to="/blog/nasil-hacker-olunur" className="post_v1_href"></Link>
          <img src="./img/blog/post1.webp" alt="Nasıl Hacker Olunur?" title="Nasıl Hacker Olunur?" loading="lazy" />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v1">
            <span style={{ background: "#80c878" }} className="badge">
              <i className="fa-solid fa-code"></i> Yazılım
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 19 Şubat 2022
            </span>
            <h2 className="post_v1_header">Nasıl Hacker Olunur?</h2>
            <div className="post_datas_height">
              <Link to="/blog/nasil-hacker-olunur" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_3">
          <Link to="/blog/bu-makarnanin-lezzeti-dunyada-1-numara" className="post_v1_href"></Link>
          <img
            src="./img/blog/post6.webp"
            alt="Bu Makarnanın Lezzeti Dünyada 1 Numara!"
            title="Bu Makarnanın Lezzeti Dünyada 1 Numara!"
            loading="lazy"
          />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v1">
            <span style={{ background: "#d1913c" }} className="badge">
              <i className="fa-solid fa-burger"></i> Yemek Tarifleri
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 11 Şubat 2022
            </span>
            <h2 className="post_v1_header">Bu Makarnanın Lezzeti Dünyada 1 Numara!</h2>
            <div className="post_datas_height">
              <Link to="/blog/bu-makarnanin-lezzeti-dunyada-1-numara" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_3">
          <Link to="/blog/seo-ne-demek-seo-neden-bu-kadar-onemli" className="post_v1_href"></Link>
          <img
            src="./img/blog/post7.webp"
            alt="SEO Ne Demek? SEO Neden Bu Kadar Önemli?"
            title="SEO Ne Demek? SEO Neden Bu Kadar Önemli?"
            loading="lazy"
          />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v1">
            <span style={{ background: "#cb2d3e" }} className="badge">
              <i className="fa-solid fa-car"></i> Otomobil
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 11 Şubat 2022
            </span>
            <h2 className="post_v1_header">SEO Ne Demek? SEO Neden Bu Kadar Önemli?</h2>
            <div className="post_datas_height">
              <Link to="/blog/seo-ne-demek-seo-neden-bu-kadar-onemli" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_4">
          <Link to="/blog/iyi-makale-nasil-yazilir-nelere-dikkat-etmeliyiz" className="post_v1_href"></Link>
          <img
            src="./img/blog/post3.webp"
            alt="İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?"
            title="İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?"
            loading="lazy"
          />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v2">
            <span style={{ background: "#80c878" }} className="badge">
              <i className="fa-solid fa-code"></i> Yazılım
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 10 Şubat 2022
            </span>
            <h2 className="post_v1_header">İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?</h2>
            <div className="post_datas_height">
              <Link to="/blog/iyi-makale-nasil-yazilir-nelere-dikkat-etmeliyiz" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_4">
          <Link to="/blog/blog-scripti-son-deneme-yazilari" className="post_v1_href"></Link>
          <img src="./img/blog/post5.webp" alt="Blog Scripti Son Deneme Yazıları" title="Blog Scripti Son Deneme Yazıları" loading="lazy" />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v2">
            <span style={{ background: "#d1913c" }} className="badge">
              <i className="fa-solid fa-burger"></i> Yemek Tarifleri
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 25 Şubat 2022
            </span>
            <h2 className="post_v1_header">Blog Scripti Son Deneme Yazıları </h2>
            <div className="post_datas_height">
              <Link to="/blog/blog-scripti-son-deneme-yazilari" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_4">
          <Link to="/blog/blog-scripti-son-yazi" className="post_v1_href"></Link>
          <img src="./img/blog/post2.webp" alt="Blog Scripti Son Yazı" title="Blog Scripti Son Yazı" loading="lazy" />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v2">
            <span style={{ background: "#80c878" }} className="badge">
              <i className="fa-solid fa-code"></i> Yazılım
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 26 Şubat 2022
            </span>
            <h2 className="post_v1_header">Blog Scripti Son Yazı </h2>
            <div className="post_datas_height">
              <Link to="/blog/blog-scripti-son-yazi" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
        <div className="post_box_4">
          <Link to="/blog/kategori-deneme-basligi" className="post_v1_href"></Link>
          <img src="./img/blog/post4.webp" alt="Kategori Deneme Başlığı" title="Kategori Deneme Başlığı" loading="lazy" />
          <span className="tooltipspan">
            <Link to="#" tooltip="Çok Okunanlar" className="most_popular_articles">
              <FaArrowTrendUp />
            </Link>
          </span>
          <div className="post_box_background"></div>
          <div className="post_datas_v2">
            <span style={{ background: "#cb2d3e" }} className="badge">
              <i className="fa-solid fa-car"></i> Otomobil
            </span>
            <span className="post_v1_date">
              <FaRegClock /> 21 Şubat 2022
            </span>
            <h2 className="post_v1_header">Kategori Deneme Başlığı </h2>
            <div className="post_datas_height">
              <Link to="/blog/kategori-deneme-basligi" className="post_v1_link">
                <FaCircleArrowRight /> Devamını Oku
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <div className="authorteam">
        <h2>Yayın Gönderimi</h2>
        <p>Yayın Kriterleri Sayfasından Ayrıntılara Göz Atın Ve Bloğumuzda Yerinizi Alın.</p>
        <Link to="#" title="Hemen Başla!">
          Oluşturun
        </Link>
      </div>
      <div className="posts_container_v2">
        <h2 className="index_header">Son Yazılar</h2>

        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "20px auto",
          }}
          className="pagination"
        >
          <ul>
            <li>
              <Link to="?sayfa=1" className="current">
                1
              </Link>
            </li>
            <li>
              <Link to="?sayfa=2">2</Link>
            </li>

            <li>
              <Link to="?sayfa=2" rel="next">
                <FaArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
}
