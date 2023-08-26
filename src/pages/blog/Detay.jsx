import { useState, useEffect } from "react";
import { FaWhatsapp, FaTwitter, FaFacebookF, FaCircleCheck, FaRegClock, FaHouse, FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import DataPosts from "./Posts.json";
import DataComments from "../Comments.json";
import DataUsers from "../Users.json";

export default function Detay({ setLoginModal }) {
  const location = useLocation();

  const [incomingPost, setIncomingPost] = useState(false);
  const [postComments, setPostComments] = useState([]);
  const [postAuthor, setPostAuthor] = useState(false);

  useEffect(() => {
    var url = location.pathname.split("/")[2];
    const posts = DataPosts.Posts;
    const selectedItem = posts.find((item) => item.url === url);
    setIncomingPost(selectedItem);
  }, [location]);

  useEffect(() => {
    const userWithPost = DataUsers.Users.find((user) => user.posts_id.includes(incomingPost.id));
    setPostAuthor(userWithPost);

    const incomingComments = DataComments.Comments.filter((item) => item.post_id === incomingPost.id);
    setPostComments(incomingComments);
  }, [incomingPost]);

  useEffect(() => {
    console.log(postAuthor);
  }, [postComments, postAuthor]);

  return (
    <>
      <div id="post_detail_container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <FaHouse />
            </Link>
          </li>
          <li>
            <Link to={`/kategori/${incomingPost.kategori_url}`}>{incomingPost.kategori}</Link>
          </li>
          <li>{incomingPost.title}</li>
        </ul>
        <h1>{incomingPost.title}</h1>
        {postAuthor && (
          <div className="user">
            <img src={`.././img/${postAuthor.image}`} alt={`profile by ${postAuthor.nickname}`} className="user_image" />
            <div className="user_info">
              <Link to={`../../yazar/${postAuthor.username}`}>
                <span className="authordata">
                  {incomingPost.author_name} <FaCircleCheck />
                  <span className="black_box">Onaylanmış Hesap</span>
                </span>
              </Link>
              <br />
              <small>
                <FaRegClock /> {incomingPost.tarih}
              </small>
            </div>
          </div>
        )}
        <img
          style={{ width: "100%", marginBottom: "20px" }}
          src={`.././img/blog/${incomingPost.image}`}
          alt={incomingPost.title}
          title={incomingPost.title}
          loading="lazy"
        />
        <section className="makale_icerik">
          <p>{incomingPost.icerik}</p>
        </section>
        <div style={{ marginTop: "35px" }}>
          <span
            style={{
              paddingTop: "7.5px",
              display: "inline-block",
              marginBottom: "12px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Yazıyı Paylaş:
          </span>
          <br />
          <div className="social_share_links">
            <Link to="#" tooltip="Facebook'ta Paylaş" className="facebook_btn share_links">
              <FaFacebookF /> Facebook
            </Link>
            <Link to="#" tooltip="Twitter'da Paylaş" className="twitter_btn share_links">
              <FaTwitter /> Twitter
            </Link>
            <Link to="#" tooltip="WhatsApp'da Paylaş" className="whatsapp_btn share_links">
              <FaWhatsapp /> WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <section id="similar_post">
        <div className="similar_post_header">
          <h6>Benzer Yazılar</h6>
        </div>
        <div className="similar_posts">
          <div className="similar_post">
            <Link to="../../blog/iyi-makale-nasil-yazilir-nelere-dikkat-etmeliyiz" className="similar_post_link">
              <div className="similar_img_box">
                <img
                  src=".././img/blog/post3.webp"
                  alt="İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?"
                  title="İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?"
                  loading="lazy"
                />
              </div>
              <h6>İyi Makale Nasıl Yazılır? Nelere Dikkat Etmeliyiz?</h6>
              <p>Bootstrap, HTML, CSS ve JavaScript ile yazılmış kullanışlı, yeniden kullanılabilir kod parçalarından...</p>
            </Link>
            <Link to="../../blog/iyi-makale-nasil-yazilir-nelere-dikkat-etmeliyiz" className="continuebtn">
              <FaArrowRight /> Devamını Oku
            </Link>
          </div>

          <div className="similar_post">
            <Link to="../../blog/blog-scripti-son-yazi" className="similar_post_link">
              <div className="similar_img_box">
                <img src=".././img/blog/post2.webp" alt="Blog Scripti Son Yazı" title="Blog Scripti Son Yazı" loading="lazy" />
              </div>
              <h6>Blog Scripti Son Yazı</h6>
              <p>Bootstrap, HTML, CSS ve JavaScript ile yazılmış kullanışlı, yeniden kullanılabilir kod parçalarından...</p>
            </Link>
            <Link to="../../blog/blog-scripti-son-yazi" className="continuebtn">
              <FaArrowRight /> Devamını Oku
            </Link>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </section>
      <section id="author_box">
        <div className="author_box_header">
          <h6>Yazar Hakkında</h6>
        </div>
        {postAuthor && (
          <div className="autbor_box_main">
            <div id="author_picture">
              <img src={`../../img/${postAuthor.image}`} alt={`profile by ${postAuthor.nickname}`} />
            </div>
            <div className="author_datas">
              <div className="user_info">
                <Link to={`../../yazar/${postAuthor.username}`} style={{ display: "inline-flex", alignItems: "center" }} className="author_name">
                  {postAuthor.nickname}
                  {postAuthor.approval && (
                    <>
                      <FaCircleCheck style={{ marginLeft: "3px" }} />
                      <span className="black_box">Onaylanmış Hesap</span>
                    </>
                  )}
                </Link>
              </div>
              <p className="author_text"></p>
              <div style={{ marginTop: "5px" }}></div>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        )}
      </section>
      <section id="comment_box">
        <div className="comment_box_header">
          <h6>Yorumlar</h6>
        </div>
        {postComments.length === 0 ? (
          <p style={{ padding: "10px" }}>Bu yazıya henüz yorum yapılmamış.</p>
        ) : (
          postComments.map((comment, index) => {
            const commentOwner = DataUsers.Users.find((item) => item.id === comment.author_id);
            return (
              <div key={index} className="comment_box_main">
                <div id="author_picture2">
                  <img src={`.././img/${commentOwner.image}`} style={{ border: "1px solid lightgray" }} alt="default_profile_picture" />
                </div>
                <div style={{ display: "flex", alignItems: "center", height: "35px" }} className="author_datas">
                  <div className="user_info" style={{ display: "inline-flex", flexDirection: "column" }}>
                    <Link
                      to={`../../yazar/${commentOwner.username}`}
                      className="author_name"
                      style={{ margin: "0", display: "inline-flex", alignItems: "center" }}
                    >
                      {commentOwner.nickname}
                      {commentOwner.approval && (
                        <>
                          <FaCircleCheck style={{ marginLeft: "3px", width: "14px", height: "14px" }} />
                          <span className="black_box">Onaylanmış Hesap</span>
                        </>
                      )}
                    </Link>
                    <small style={{ marginTop: "2px", fontSize: "12px" }}>{comment.date}</small>
                  </div>
                </div>
                <div style={{ clear: "both" }}></div>
                <p style={{ fontSize: "14px", marginTop: "5px" }}>{comment.text} </p>
              </div>
            );
          })
        )}
      </section>
      <section id="leave_comment_box">
        <div className="leave_comment_box_header">
          <h6>Yorum Yap</h6>
        </div>
        <div style={{ padding: "10px" }}>
          Yorum yapmak için giriş yapmanız gerekmektedir.
          <span
            onClick={() => {
              setLoginModal(true);
            }}
            style={{ fontWeight: "600" }}
            className="alternate_login"
          >
            Hemen Giriş Yapın
          </span>
        </div>
      </section>
    </>
  );
}
