import React from "react";

export default function SifremiUnuttum() {
  return (
    <>
      <div>
        <div className="login_screen_background"></div>
        <a className="returnlink" href="/">
          Siteye Geri Dön
        </a>
        <form action="" className="login_screen_form">
          <h1 className="form_header">Şifremi Unuttum</h1>
          <p className="form_paragraph">
            Şifrenizi unuttuysanız hemen e-posta adresinizi aşağıdaki alana
            yazın ve şifrenizi sıfırlayın.
          </p>
          <p></p>Şifreni biliyor musun? O zaman hemen
          <a href="/giris"> giriş yapın</a>
          <p></p>
          <br />
          <input
            type="text"
            name="usernameormail"
            placeholder="Kullanıcı Adı Veya E-posta Adresi"
            required=""
          />
          <button type="submit">Şifreni Sıfırla</button>
        </form>
      </div>
    </>
  );
}
