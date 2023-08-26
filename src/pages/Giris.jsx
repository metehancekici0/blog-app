import React from "react";
import { Link } from "react-router-dom";

export default function Giris() {
  return (
    <>
      <div>
        <div className="login_screen_background"></div>
        <Link className="returnlink" to="/">
          Siteye Geri Dön
        </Link>
        <form action="" method="post" className="login_screen_form">
          <h1 className="form_header">Giriş Yap</h1>
          <p className="form_paragraph">
            Yazılımcı Platformu ayrıcalıklarından yararlanmak için hemen giriş
            yapın veya hesap oluşturun, üstelik tamamen ücretsiz!
          </p>
          <label className="label" htmlFor="">
            Kullanıcı adı ya da e-posta adresi
          </label>
          <br />
          <input type="text" name="usernameormail" required="" />
          <label className="label" htmlFor="">
            Parola
          </label>
          <br />
          <input type="password" name="pass" required="" />
          <input id="loginremember" name="rememberMe" type="checkbox" />
          <label className="rememberlabel" htmlFor="loginremember">
            Beni Hatırla
          </label>
          <button name="loginuserbtn" type="submit">
            Giriş Yap
          </button>
          <div className="form_outline">
            <span>VEYA</span>
          </div>
          <Link
            to="/kayit"
            style={{ marginRight: "10px", background: "#4caf50" }}
            className="link"
          >
            Kayıt Ol
          </Link>
          <Link
            to="/sifremi-unuttum"
            style={{ background: "#6C757D" }}
            className="link"
          >
            Şifremi Unuttum
          </Link>
        </form>
      </div>
    </>
  );
}
