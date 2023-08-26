import React, { useEffect, useState } from "react";
import { FaCircleCheck, FaRegClock, FaInstagram } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import DataUsers from "../pages/Users.json";
import DataComments from "../pages/Comments.json";
import DataPosts from "../pages/blog/Posts.json";

export default function Yazar() {
  const location = useLocation();
  const [author, setAuthor] = useState("");
  const [authorComments, setAuthorComments] = useState([]);
  const [authorPosts, setAuthorPosts] = useState([]);

  const [locationSearch, setLocationSearch] = useState("");

  useEffect(() => {
    const authorUrl = location.pathname.split("/")[2];
    const authors = DataUsers.Users;
    const selectedAuthor = authors.find((item) => item.username === authorUrl);
    setAuthor(selectedAuthor);

    if (author !== "") {
      const postIds = author.posts_id;

      // Post ID'lerine göre ilgili postları bulma
      const userPosts = DataPosts.Posts.filter((post) => postIds.includes(post.id));
      setAuthorPosts(userPosts);

      const authorId = author.id;
      const comments = DataComments.Comments;
      const authorComments = comments.filter((item) => item.author_id === authorId);
      setAuthorComments(authorComments);
    }
  }, [author, location.pathname]);
  useEffect(() => {
    if (location.search === "") {
      const type = "posts";
      console.log("type: ", type);
      setLocationSearch(type);
    }

    if (location.search !== "") {
      const type = location.search.split("=")[1];
      console.log("type: ", type);
      setLocationSearch(type);
    }
    // console.log("locationSearch: ", locationSearch);
  }, [location.search, author]);
  return (
    <>
      <section id="profile_settings">
        <div id="profile_datas_box">
          <div id="profile_box">
            <div>
              <div style={{ width: "85px", height: "85px", float: "left", marginRight: "10px" }}>
                <img src={`.././img/${author.image}`} alt="sinembulut_profile_picture" />
              </div>
              <div style={{ width: "calc(100% - 95px)", padding: "0 0 2px 0px", float: "left" }}>
                <span style={{ position: "relative" }}>
                  <b>{author.nickname}</b>
                  {author.approval && (
                    <>
                      <FaCircleCheck style={{ marginLeft: "5px" }} />
                      <span style={{ right: "-43px" }} className="black_box">
                        Onaylanmış Hesap
                      </span>
                    </>
                  )}
                </span>
                <br />
                <span className={`badge2 ${author.authorization === "Admin" ? "badge_admin" : "badge_member"}`}>{author.authorization}</span>
                {author.verification === false && <span className="badge2 badge_unconfirmed">Doğrulanmamış</span>}
              </div>
            </div>
            <div>
              <div style={{ marginTop: "7.5px" }}>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/metehanncekici" className="social_links social_instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div className="profile_scores_box">
              <b>Yazılar</b> <br /> {authorPosts.length}
            </div>
            <div className="profile_scores_box">
              <b>Yorumlar</b> <br /> {authorComments.length}
            </div>
            <div className="profile_scores_box">
              <b>Puan</b> <br /> {author.puan}
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
        <div id="profile_datas_form">
          <div className="toogleheader">
            <Link
              to="?show=posts"
              className={`tooglebuttons ${location.search.includes("show=posts") || !location.search.includes("show=comments") ? "active" : ""}`}
            >
              Yazılar
            </Link>
            <Link to="?show=comments" className={`tooglebuttons ${location.search.includes("show=comments") ? "active" : ""}`}>
              Yorumlar
            </Link>
          </div>
          <div style={{ clear: "both" }}></div>
          {(locationSearch === "posts" &&
            (authorPosts.length === 0 ? (
              <p className="alert-message">Bu yazar henüz gönderi paylaşmamış.</p>
            ) : (
              authorPosts.map((post, index) => (
                <div key={index} className="author_article_section">
                  <div style={{ margin: "20px 20px 0 20px" }}>
                    <a style={{ color: "#000" }} href={`../../blog/${post.url}`}>
                      <div className="authorarticlepic">
                        <img src={`.././img/blog/${post.image}`} alt={post.title} title={post.title} loading="lazy" />
                      </div>
                      <div className="authorarticledatas">
                        <small>
                          <FaRegClock /> {post.tarih}
                        </small>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <span className="authorpicbox">
                          <img src={`.././img/${post.author_img}`} alt={`profile by ${post.author_name}`} />
                          <span style={{ position: "relative", bottom: "1px" }}>{post.author_name}</span>
                        </span>
                        <button>Devamını Oku</button>
                      </div>
                      <div style={{ clear: "both" }}></div>
                    </a>
                  </div>
                </div>
              ))
            ))) ||
            (authorComments.length === 0 ? (
              <p className="alert-message">Bu yazar henüz yorum yapmamış.</p>
            ) : (
              authorComments.map((comment, index) => {
                const commentOwner = DataUsers.Users.find((item) => item.id === comment.author_id);
                return (
                  <Link to={`.././blog/${comment.post_url}`} key={index} className="comment_big_link" style={{ color: "#000" }}>
                    <div className="author_comments_section">
                      <div className="author_comments_box">
                        <img src={`.././img/${commentOwner.image}`} alt="sinembulut_profile_picture" />
                        <div className="author_comments_datas">
                          <h2 style={{ display: "flex", alignItems: "center" }}>
                            {author.nickname}

                            <small
                              style={{
                                marginLeft: "10px",
                                color: "gray",
                                fontWeight: "normal",
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            >
                              <FaRegClock style={{ marginRight: "3px" }} /> {comment.date}
                            </small>
                          </h2>
                          <p>{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            ))}

          {/* <div style={{ padding: "10px" }}>Listelenecek herhangi bir yazı bulunamadı.</div> */}
        </div>
      </section>
    </>
  );
}
