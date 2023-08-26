import React, { useEffect, useState } from "react";
import { FaCircleCheck, FaRegClock, FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DataUsers from "../pages/Users.json";

export default function Post({ post }) {
  const [postOwner, setPostOwner] = useState("");
  useEffect(() => {
    const userData = DataUsers.Users.find((item) => item.nickname === post.author_name);
    setPostOwner(userData);
  }, [post.author_name]);
  return (
    <>
      <div className="post_box" key={post.id}>
        <Link className="post_link" to={`/blog/${post.url}`}>
          <div className="post_thumb_container">
            <FaEye />
            <img className="post_thumb" src={`.././img/blog/${post.image}`} alt={post.title} title={post.title} loading="lazy" />
          </div>
          <div className="post_main">
            <span style={{ background: post.kategori_renk }} className="badge">
              {post.kategori}
            </span>
            <br />
            <div style={{ padding: "0 7.5px", marginBottom: "5px" }}>
              <h3 className="left">{post.title}</h3>
            </div>
            <div className="makale_icerik_section">{post.description}</div>
          </div>
        </Link>
        <div style={{ padding: "0", position: "static" }} className="post_footer">
          <div style={{ display: "block" }} className="user">
            <a
              title={post.author_name}
              style={{
                padding: "5px 15px 7.5px 10px",
                position: "absolute",
                bottom: "0",
              }}
              href={`../yazar/${postOwner.username}`}
            >
              <img style={{ float: "left", marginRight: "10px" }} src={`.././img/${post.author_img}`} alt="Admin" className="user_image" />
              <div
                style={{
                  float: "left",
                  position: "relative",
                  top: "-2px",
                }}
                className="user_info"
              >
                <span className="authordata">
                  {post.author_name} <FaCircleCheck />
                  <span className="black_box">Onaylanmış Hesap</span>
                </span>
                <br />
                <small>
                  <FaRegClock /> {post.tarih}
                </small>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
