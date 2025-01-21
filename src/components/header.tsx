"use client";

import React from "react";
import Script from "next/script";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Huzur Oto Yedek Parça</title>
      {/*== Favicon ==*/}
      <link
        rel="shortcut icon"
        href="assets/img/favicon.ico"
        type="image/x-icon"
      />
      {/*== Google Fonts ==*/}
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:400,500,600,700%7CPoppins:400,400i,500,600&display=swap"
        rel="stylesheet"
      />
      {/* build:css assets/css/app.min.css */}
      {/*== Leaflet Min CSS ==*/}
      <link href="assets/css/leaflet.min.css" rel="stylesheet" />
      {/*== Nice Select Min CSS ==*/}
      <link href="assets/css/nice-select.min.css" rel="stylesheet" />
      {/*== Slick Slider Min CSS ==*/}
      <link href="assets/css/slick.min.css" rel="stylesheet" />
      {/*== Magnific Popup Min CSS ==*/}
      <link href="assets/css/magnific-popup.min.css" rel="stylesheet" />
      {/*== Slicknav Min CSS ==*/}
      <link href="assets/css/slicknav.min.css" rel="stylesheet" />
      {/*== Animate Min CSS ==*/}
      <link href="assets/css/animate.min.css" rel="stylesheet" />
      {/*== Ionicons Min CSS ==*/}
      <link href="assets/css/ionicons.min.css" rel="stylesheet" />
      {/*== Font-Awesome Min CSS ==*/}
      <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
      {/*== Bootstrap Min CSS ==*/}
      <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
      {/*== Main Style CSS ==*/}
      <link href="assets/css/style.css" rel="stylesheet" />
      {/*== Helper Min CSS ==*/}
      <link href="assets/css/helper.min.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />
      {/* endbuild */}

      {/*== Start Header Area ==*/}
      <header className="header-area">
        <div className="container container-wide">
          <div className="row align-items-center">
            {/* Logo Bölgesi */}
            <div className="col-sm-4 col-lg-2">
              <div className="site-logo text-center text-sm-start">
                <Link href="/?redirected=true">
                  <img
                    src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737380582/logo_2_jcjtc2.png"
                    alt="Huzur Oto Yedek Parça Logo"
                  />
                </Link>
              </div>
            </div>

            {/* Menü Bölgesi */}
            <div className="col-lg-7 d-none d-lg-block">
              <div className="site-navigation">
                <ul className="main-menu nav">
                  <li>
                    <Link href="/?redirected=true">Ana Sayfa</Link>
                  </li>
                  <li className="has-submenu">
                    <Link href="/dogum-gunu/cicekler">Doğum Günü</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/dogum-gunu/cicekler">
                          Doğum Günü Çiçekleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/hediyeler">
                          Doğum Günü Hediyeleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/kadina-hediye">
                          Kadına Hediye
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/erkege-hediye">
                          Erkeğe Hediye
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/ayni-gun-hediye-seti">
                          Aynı Gün Hediye Seti
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/orkide">Orkide</Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/papatya-gerbera">
                          Papatya - Gerbera
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/kisiye-ozel">Kişiye Özel</Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/cocuga-hediye">
                          Çocuğa Hediye
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/ayicik-buketi">
                          Ayıcık Buketi
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/kisiye-ozel-cicekler">
                          Kişiye Özel Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/guller">Güller</Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/erkek-aksesuar">
                          Erkek Aksesuar
                        </Link>
                      </li>
                      <li>
                        <Link href="/dogum-gunu/babaya-hediye">
                          Babaya Hediye
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu">
                    <Link href="/gonderime-gore/dogum-ve-bebek">Gönderime Göre</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/gonderime-gore/dogum-ve-bebek">
                          Doğum & Bebek
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/anneler-gunu-ozel">
                          Anneler Günü Özel
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/pelus-ayiciklar">
                          Peluş Ayıcıklar
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/yeni-is-terfi">
                          Yeni İş / Terfi
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/sevgiliye">Sevgiliye</Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/yildonumu">Yıldönümü</Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/arkadasa">Arkadaşa</Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/gecmis-olsun">
                          Geçmiş Olsun
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/ozur-dilerim">
                          Özür Dilerim
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/tesekkur-ederim">
                          Teşekkür Ederim
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/acilis-ve-dugun">
                          Açılış & Düğün
                        </Link>
                      </li>
                      <li>
                        <Link href="/gonderime-gore/cenaze">Cenaze</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-submenu">
                    <Link href="/hazirlanisa-gore/buketler">Hazırlanışa göre</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/hazirlanisa-gore/buketler">Buketler</Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/arajmanlar">
                          Arajmanlar
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/ferforje">Ferforje</Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/teraryumlar">
                          Teraryumlar
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/yapay-cicekler">
                          Yapay Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/butik-cicekler">
                          Butik Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/kutuda-cicek">
                          Kutuda Çiçek
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/vazoda-cicekler">
                          Vazoda Çiçekler
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/solmayan-guller">
                          Solmayan Güller
                        </Link>
                      </li>
                      <li>
                        <Link href="/hazirlanisa-gore/gelin-eli-cicekleri">
                          Gelin Eli Çiçekleri
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/coksatanlar/IndirimdekiUrunler">
                      ÇOK SATANLAR
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim">İLETİŞİM</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Giriş, Sepet ve Menü Bölgesi */}
            <div className="col-sm-8 col-lg-3">
              <div className="site-action d-flex justify-content-center justify-content-sm-end align-items-center">
                <ul className="login-reg-nav nav">
                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
                    >
                      <i className="fab fa-whatsapp text-lg" />
                      &nbsp;WhatsApp
                    </a>
                  </li>
                </ul>

                <div className="responsive-menu d-lg-none">
                  <button className="btn-menu">
                    <i className="fa fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Script
        src="assets/js/modernizr-3.6.0.min.js"
        strategy="afterInteractive"
      />
      {/* jQuery */}
      <Script src="assets/js/jquery.min.js" strategy="afterInteractive" />
      {/* jQuery Migrate */}
      <Script
        src="assets/js/jquery-migrate.min.js"
        strategy="afterInteractive"
      />
      {/* Popper.js */}
      <Script src="assets/js/popper.min.js" strategy="afterInteractive" />
      {/* Bootstrap */}
      <Script src="assets/js/bootstrap.min.js" strategy="afterInteractive" />
      {/* SlickNav */}
      <Script
        src="assets/js/jquery.slicknav.min.js"
        strategy="afterInteractive"
      />
      {/* Magnific Popup */}
      <Script
        src="assets/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />
      {/* Slick Carousel */}
      <Script src="assets/js/slick.min.js" strategy="afterInteractive" />
      {/* Nice Select */}
      <Script
        src="assets/js/jquery.nice-select.min.js"
        strategy="afterInteractive"
      />
      {/* Leaflet.js */}
      <Script src="assets/js/leaflet.min.js" strategy="afterInteractive" />
      {/* Countdown */}
      <Script src="assets/js/countdown.js" strategy="afterInteractive" />
      {/* Active.js */}
      <Script src="assets/js/active.js" strategy="afterInteractive" />
    </>
  );
};

export default Header;
