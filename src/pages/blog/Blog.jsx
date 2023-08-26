import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Post from "../../components/Post";
import DataPosts from "./Posts.json";

export default function Blog() {
  return (
    <>
      <div className="posts_container_v2">
        <h2 className="index_header">Son Yazılar</h2>

        {DataPosts.Posts.map((post) => (
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
    </>
  );
}
