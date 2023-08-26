import React from "react";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

export default function Hakkimizda() {
  return (
    <>
      <div id="post_detail_container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <FaHouse />
            </Link>
          </li>
          <li> Hakkımızda</li>
        </ul>
        <h1> Hakkımızda</h1>
        <div className="makale_icerik">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            leo arcu. Vivamus posuere justo quis turpis consectetur, vulputate
            euismod eros dapibus. Proin elementum, justo vel posuere iaculis,
            odio nisi consequat felis, finibus aliquet velit metus ut libero.
            Nunc sed sem est. Aliquam sollicitudin ut nisi id ultrices. Morbi
            quam eros, porta sit amet elit at, pulvinar accumsan risus.&nbsp;
          </p>
          <h2>Biz Kimiz?</h2>
          <figure className="table">
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Misyonumuz</strong>
                  </td>
                  <td>
                    <strong>Vizyonumuz</strong>
                  </td>
                  <td>
                    <strong>Hedefimiz</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                      <li>
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini
                        dağıttığı bilinen bir gerçektir.
                      </li>
                      <li>
                        Yinelenen bir sayfa içeriğinin okuyucunun dikkatini
                        dağıttığı bilinen bir gerçektir.
                      </li>
                    </ul>
                  </td>
                  <td>
                    Şu anda birçok masaüstü yayıncılık paketi ve web sayfa
                    düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum
                    kullanmaktadır.
                  </td>
                  <td>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz.
                  </td>
                </tr>
              </tbody>
            </table>
          </figure>
          <p>&nbsp;</p>
          <p>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır.
          </p>
        </div>
      </div>
    </>
  );
}
