import React from "react";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaLocationDot,
  FaWhatsapp,
  FaArrowRotateRight,
} from "react-icons/fa6";

export default function Iletisim() {
  return (
    <>
      <div id="post_detail_container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <FaHouse />
            </Link>
          </li>
          <li>İletişim</li>
        </ul>
        <h1 style={{ marginBottom: "20px" }}>İletişim</h1>
        <section id="contact_section">
          <div id="contact_section_first">
            <form action="">
              <small>
                Aşağıdaki form aracılığıyla bize her türlü görüş, öneri, istek
                ve şikayetlerinizi iletebilirsiniz.
              </small>
              <div className="input_col_6">
                <label htmlFor="">Ad Soyad</label>
                <input
                  type="text"
                  name="cname"
                  placeholder="Ad Soyad*"
                  required=""
                />
                <FaUser />
              </div>
              <div className="input_col_6">
                <label htmlFor="">E-Posta</label>
                <input
                  type="email"
                  name="cmail"
                  placeholder="E-Posta Adresiniz*"
                  required=""
                />
                <FaEnvelope />
              </div>
              <div className="input_col_6">
                <label htmlFor="">Telefon</label>
                <input type="tel" name="ctel" placeholder="Telefon Numaranız" />
                <FaPhone />
              </div>
              <div className="input_col_6">
                <label htmlFor="">Mesaj Konusu</label>
                <input
                  type="text"
                  name="csubject"
                  placeholder="Mesaj Konusu*"
                  required=""
                />
                <FaComment />
              </div>
              <div style={{ clear: "both" }}></div>
              <div className="input_col_12">
                <textarea
                  style={{ resize: "none" }}
                  name="cmessage"
                  rows="5"
                  placeholder="İletmek istediğiniz mesaj*"
                  required=""
                ></textarea>
              </div>
              <div className="input_col_6">
                <input
                  type="text"
                  name="entered-captcha"
                  required=""
                  placeholder="Güvenlik Kodunu Giriniz*"
                />
              </div>
              <div className="input_col_6">
                <input
                  type="text"
                  name="generated-captcha"
                  id="generated-captcha"
                  className="captcha_input"
                  defaultValue3="o93QbN14AS"
                />
                <button type="button" className="form_again_btn">
                  <FaArrowRotateRight />
                </button>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  marginBottom: "7.5px",
                }}
              >
                *Formu göndererek verilerinizin işlenmesini kabul etmiş
                olursunuz.
              </p>
              <button type="submit" name="fcontact" className="form_submit_btn">
                Mesajı Gönder
              </button>
            </form>
          </div>
          <div id="contact_section_second">
            <h2>İletişim Bilgileri</h2>
            <div className="form_data_section">
              <div className="form_data_icon">
                <FaLocationDot />
              </div>
              <div className="form_data_text">
                Alaçatı Mah. Ümraniye Sokak No:12 ÇEKİCİ APT.
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="form_data_section">
              <div className="form_data_icon">
                <FaEnvelope />
              </div>
              <div className="form_data_text">email412@gmail.com</div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="form_data_section">
              <div className="form_data_icon">
                <FaPhone />
              </div>
              <div className="form_data_text">0312 682 9510</div>
              <div style={{ clear: "both" }}></div>
            </div>
            <div className="form_data_section">
              <div className="form_data_icon">
                <FaWhatsapp />
              </div>
              <div className="form_data_text">0 515 241 0951</div>
              <div style={{ clear: "both" }}></div>
            </div>

            <div style={{ clear: "both" }}></div>
          </div>
          <div style={{ clear: "both" }}></div>
        </section>
      </div>
    </>
  );
}
