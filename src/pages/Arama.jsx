import React, { useEffect, useState } from "react";
import Data from "./blog/Posts.json";

import { useLocation } from "react-router-dom";
import Post from "../components/Post";

export default function Arama({ searchQuery, setSearchQuery, setSearchModal }) {
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [processing, setProcessing] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setSearchModal(false);
    setSearchQuery(searchQuery.replace(/\+/g, " "));

    const filteredPosts = Data.Posts.filter((post) => {
      return post.title.toLowerCase().includes(searchQuery);
    });

    setSearchedPosts(filteredPosts);
    setProcessing(true);
  }, []);

  useEffect(() => {
    setSearchQuery(searchQuery.replace(/\+/g, " "));

    const filteredPosts = Data.Posts.filter((post) => {
      return post.title.toLowerCase().includes(searchQuery);
    });

    setSearchedPosts(filteredPosts);
  }, [searchQuery, location, processing]);

  return (
    <>
      <div className="posts_container_v2">
        <h1 className="index_header">Arama Sonuçları: {searchQuery} </h1>

        {searchedPosts.length > 0 ? (
          searchedPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))
        ) : (
          <div style={{ padding: "10px 15px 20px" }}>
            Aramanızla İlgili Bir Sonuç Bulunamadı!
          </div>
        )}
      </div>
    </>
  );
}
