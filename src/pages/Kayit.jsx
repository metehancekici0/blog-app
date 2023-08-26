import React from "react";
import { Link } from 'react-router-dom';

export default function Kayit() {
  return (
    <>
      <div>
        <div className="login_screen_background"></div>
        <Link className="returnlink" to="/">
          Siteye Geri Dön
        </Link>
        <form action="" method="post" className="login_screen_form">
          <h1 className="form_header">Kayıt Ol</h1>
          <p className="form_paragraph">
            Yazılımcı Platformu ayrıcalıklarından yararlanmak
            için hemen giriş yapın veya hesap oluşturun, üstelik tamamen
            ücretsiz!
          </p>
          <p style={{ marginBottom: "15px" }}>
            Zaten üyemizseniz
            <Link to="/giris" style={{ color: "#3C3C3C", margin: "0 3px" }}>
              <b>giriş yapın</b>
            </Link>
            veya
            <Link to="/sifremi-unuttum" style={{ color: "#3C3C3C", margin: "0 3px" }}>
              <b>şifrenizi sıfırlayın.</b>
            </Link>
          </p>
          <input type="text" name="name" placeholder="Adınız*" required="" />
          <input
            type="text"
            name="surname"
            placeholder="Soyadınız*"
            required=""
          />
          <input
            type="email"
            name="email"
            placeholder="E-Posta Adresiniz*"
            required=""
          />
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı Adı*"
            required=""
          />
          <input
            type="password"
            name="pass"
            placeholder="Şifreniz*"
            required=""
          />
          <input
            type="password"
            name="passagain"
            placeholder="Şifreniz Tekrar*"
            required=""
          />
          <input
            id="loginremember"
            name="acceptcontrol"
            type="checkbox"
            required=""
          />
          <label className="rememberlabel" htmlFor="loginremember">
            <Link
              style={{ color: "#000", textDecoration: "underline" }}
              to="/kullanim-sartlari"
              target="_blank"
            >
              Kullanım Şartları
            </Link>
            'nı okudum ve onaylıyorum.
          </label>
          <button name="kayitbtn" type="submit">
            Hesabımı Oluştur
          </button>
        </form>
      </div>
    </>
  );
}
