import React from "react";

const Whatsapp = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="CamKandil" content="Aksesuar Dekor Ev Süs" />
  <meta name="EvDekoru" content="Cam Süs Cam Kandil Hediyelik Ev Eşyasi" />
  <meta
    name="Cam"
    content="hediyelik EVSÜS ev dekoru cam kokulu süs ev cam kandil"
  />
  <meta name="Kandil" content="Cam kandil süs eşya" />
  {/* Font Awesome CSS */}
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
  />
  {/* External CSS */}
  <link rel="stylesheet" href="./assets/css/whatsapp.css" />
  {/* WhatsApp Button */}
  <a
    href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
    className="float"
    target="_blank"
  >
    <i className="fa fa-whatsapp my-float" />
  </a>
  {/* Alt Metin */}
  <div className="info-text">
    Detaylı Bilgi Ve <br /> Sipariş Vermek İçin Tıklayınız
  </div>
</>

  );
};

export default Whatsapp;

