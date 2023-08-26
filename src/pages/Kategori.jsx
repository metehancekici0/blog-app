import React, { useEffect, useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";
import Posts from "./blog/Posts.json";
import Post from "../components/Post";

export default function Kategori() {
  const data = Posts.Posts;
  const location = useLocation();

  const [incomingCatPosts, setIncomingCatPosts] = useState([]);
  const [catName, setCatName] = useState("");

  useEffect(() => {
    const categoryName = location.pathname.split("/")[2];

    setIncomingCatPosts(data.filter((item) => item.kategori_url === categoryName));

    setCatName(data.find((item) => item.kategori_url === categoryName).kategori);
  }, [location.pathname, data]);

  return (
    <>
      <div className="posts_container_v2">
        <h2 className="index_header">{catName} Kategorisi</h2>

        {incomingCatPosts.map((post) => (
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
