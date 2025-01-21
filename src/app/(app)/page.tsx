"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Whatsapp from "@/components/whatsapp-button";
const Page = () => {
  const [hasRedirected, setHasRedirected] = useState(false);
  useEffect(() => {
    // Check if the "redirected" query parameter is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("redirected") === "true" && !hasRedirected) {
      // Set the state to avoid reloading multiple times
      setHasRedirected(true);

      // Remove the "redirected" query parameter and redirect to the new URL
      urlParams.delete("redirected");
      const newUrl =
        window.location.pathname +
        (urlParams.toString() ? `?${urlParams.toString()}` : "");
      window.location.href = newUrl; // This reloads the same page without the ?redirected=true parameter
    }
  }, [hasRedirected]);
  return (
    <>
      <Whatsapp />
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Han Çiçekcilik & Organizasyon</title>
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
        {/* endbuild */}
        {/*== Start Header Area ==*/}
      </head>
      {/*== End Header Area ==*/}
      {/*== Start Slider Area Wrapper ==*/}
      <div className="slider-area-wrapper">
        <div className="slider-content-active">
          <div
            className="slider-slide-item bg-img"
            data-bg="assets/img/slider/slider-1.jpg"
          >
            <div className="container container-wide h-100">
              <div className="row align-items-center h-100">
                <div className="col-lg-6">
                  <div className="slide-content">
                    <div className="slide-content-inner">
                      <h3>İNDİRİM GÜNLERİ</h3>
                      <h2>
                        Sevgililer Gününe Özel <br />
                        Çiçek İndirimleri Başladı!
                      </h2>
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
                        className="btn btn-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp ile İletişime Geç.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slider-slide-item bg-img"
            data-bg="assets/img/slider/slider-2.jpg"
          >
            <div className="container container-wide h-100">
              <div className="row align-items-center h-100">
                <div className="col-12">
                  <div className="slide-content">
                    <div className="slide-content-inner">
                      <h3>İNDİRİM GÜNLERİ</h3>
                      <h2>
                        Sevgililer Gününe Özel <br />
                        Çiçek İndirimleri Başladı!
                      </h2>
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
                        className="btn btn-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp ile İletişime Geç
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Slider Area Wrapper ==*/}
      
      {/*== Start Call to Action Area ==*/}
      <div className="call-to-action-area sm-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item mt-0">
                <div className="call-to-action-item__icon">
                  <img src="assets/img/icons/icon-1.png" alt="fast delivery" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Ücretsiz Teslimat</h3>
                  <p>
                    Karaman içi tüm teslimatlar ücretsiz! Kapınıza kadar gelsin.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item">
                <div className="call-to-action-item__icon">
                  <img src="assets/img/icons/icon-2.png" alt="quality" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Kaliteli Ürünler</h3>
                  <p>
                    Kaliteli Ürünler Ürün kalitemizi her zaman garanti ediyoruz!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="call-to-action-item">
                <div className="call-to-action-item__icon">
                  <img src="assets/img/icons/icon-3.png" alt="return" />
                </div>
                <div className="call-to-action-item__info">
                  <h3>Çevrim İçi Destek</h3>
                  <p>
                    Whatsapp üzerinden dilediğiniz zaman mesaj atabilirsiniz!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Call to Action Area ==*/}
      {/*== Start Best Seller Products Area ==*/}
      <div className="best-seller-products-area sm-top">
        <div className="container container-wide">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <div className="section-title">
                <h2 className="h3">Çok Satanlar</h2>
                <p>
                  Han Çiçekçilik olarak, her zaman en taze ve özenle seçilmiş
                  çiçeklerle hizmetinizdeyiz. Çok satan çiçeklerimiz, özel
                  günlerinize veya günlük ihtiyaçlarınıza eşlik edecek zarif
                  seçenekler sunuyor. Sevdiklerinizi mutlu etmek, evinizi
                  renklendirmek veya bir kutlama yapmak için en popüler
                  çiçeklerimizi keşfedin. Han Çiçekçilik olarak, kaliteyi ve
                  şıklığı bir arada sunarak, her buketle fark yaratmaya devam
                  ediyoruz. Çok satanlar kategorimizdeki çiçeklerle, her anınızı
                  özel kılın.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-wrapper">
                <div className="product-carousel">
                  {/* Start Product Item */}
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/beyaz-papatya-buketi-zarafetin-ve-nesenin-simgesi">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737392858/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_opr8kf.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737392858/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_opr8kf.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,Beyaz%20Papatya%20Buketi:%20Zarafetin%20ve%20Ne%C5%9Fenin%20Simgesi+sipari%C5%9F+vermek+istiyorum.WS">
                          Beyaz Papatya Buketi: Zarafetin ve Neşenin Simgesi{" "}
                          <br />{" "}
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Fiyat:</strong> 600 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a href="" className="btn-add-to-cart">
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">25%</span>
                    </div>
                  </div>
                  {/* End Product Item */}
                  {/* Start Product Item */}
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a
                        href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karisik-mevsim-buketi-doganin-renkli-harmani
"
                      >
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393100/kar%C4%B1%C5%9F%C4%B1k_mevsim_buketi-Photoroom_c6o0ex.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393100/kar%C4%B1%C5%9F%C4%B1k_mevsim_buketi-Photoroom_c6o0ex.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a
                          href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karisik-mevsim-buketi-doganin-renkli-harmani
"
                        >
                          Karışık Mevsim Buketi: Doğanın Renkli Harmanı
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Fiyat:</strong> 1200 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,Kar%C4%B1%C5%9F%C4%B1k-Mevsim-Buketi-Do%C4%9Fan%C4%B1n-Renkli-Harman%C4%B1+sipari%C5%9F+vermek+istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                  {/* End Product Item */}
                  {/* Start Product Item */}
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/antaryum-buketi-sklgn-ve-zarafetin-ifadesi">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393276/Antar%C4%B1yum-Photoroom_v6fv7i.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393276/Antar%C4%B1yum-Photoroom_v6fv7i.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/antaryum-buketi-sklgn-ve-zarafetin-ifadesi">
                          Antaryum Buketi: Şıklığın ve Zarafetin İfadesi
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Fiyat:</strong> 800 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C%20Antaryum%20Buketi%3A%20%C5%9E%C4%B1kl%C4%B1%C4%9F%C4%B1n%20ve%20Zarafetin%20%C4%B0fadesi%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">35%</span>
                    </div>
                  </div>
                  {/* End Product Item */}
                  {/* Start Product Item */}
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/nergiz-cicegi-dogann-zarif-guzelligi">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395314/nergiz-Photoroom_xhyzrd.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395314/nergiz-Photoroom_xhyzrd.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/nergiz-cicegi-dogann-zarif-guzelligi">
                          Nergiz Çiçeği: Doğanın Zarif Güzelliği
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Fiyat:</strong> 600 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a href="" className="btn-add-to-cart">
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                  {/* End Product Item */}
                  {/* Start Product Item */}
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/ayck-buketi-sevdiklerinize-tatl-ve-anlaml-bir-surpriz">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395492/AYICIK-Photoroom_jcykov.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395492/AYICIK-Photoroom_jcykov.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/ayck-buketi-sevdiklerinize-tatl-ve-anlaml-bir-surpriz">
                          Ayıcık Buketi: Sevdiklerinize Tatlı Bir Sürpriz
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Fiyat:</strong> 800 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C%20Nergiz%20%C3%87i%C3%A7e%C4%9Fi%3A%20Do%C4%9Fan%C4%B1n%20Zarif%20G%C3%BCzelli%C4%9Fi%20sipari%C5%9F%20vermek%20istiyorum.WS

"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">21%</span>
                    </div>
                  </div>
                  {/* End Product Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Best Seller Products Area ==*/}
      {/*== Start Call to action Wrapper ==*/}
      <div className="call-to-action-area">
        <div
          className="call-to-action-content-area bg-img"
          data-bg="assets/img/bg/bg-1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="call-to-action-txt">
                  <h2>
                    İHTİYACINIZ OLAN HER TÜRLÜ ÇİÇEĞİ
                    <br /> BURADA BULACAKSINIZ
                  </h2>
                  <a
                    href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
                    className="btn btn-brand"
                  >
                    Sipariş Ver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="call-to-action-image-area">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737390567/HAN_%C3%87I%C3%87EK_wd6u2g.jpg"
                  alt="Car"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Call to action Wrapper ==*/}
      {/*== Start Products Area Wrapper ==*/}
      <div className="products-area-wrapper sm-top">
        <div className="container container-wide">
          <div className="row">
            <div className="col-lg-5 m-auto text-center">
              <div className="section-title">
                <h2 className="h3">Tüm Ürünlerimiz</h2>
                <p>
                  Tüm en çok satan ürünler artık sizin için burada mevcut. Bu
                  ürünleri istediğiniz zaman, istediğiniz yerden satın
                  alabilirsiniz. Şimdi alışverişe başlayın ve fırsatları
                  kaçırmayın!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-wrapper columns-5">
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/kelebek-buketi-sats-ozel-tasarm-buketler-hediye-fikirleri">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398356/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_1_ahdwf7.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398356/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_1_ahdwf7.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/kelebek-buketi-sats-ozel-tasarm-buketler-hediye-fikirleri">
                          Kelebek Buketi Satışı - Özel Tasarım Buketler & Hediye
                          Fikirleri
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 800 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C%20Kelebek%20Buketi%20Sat%C4%B1%C5%9F%C4%B1%20-%20%C3%96zel%20Tasar%C4%B1m%20Buketler%20%26%20Hediye%20Fikirleri%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">25%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/15-gullu-buket-sklk-ve-zarafetin-bulustugu-cicek-aranjmanlar">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398571/15-Photoroom_ikge7k.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398571/15-Photoroom_ikge7k.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/15-gullu-buket-sklk-ve-zarafetin-bulustugu-cicek-aranjmanlar">
                          15 Güllü Buket - Şıklık ve Zarafetin Buluştuğu Çiçek
                          Aranjmanları
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 1500 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C%2015%20G%C3%BCll%C3%BC%20Buket%20-%20%C5%9E%C4%B1kl%C4%B1k%20ve%20Zarafetin%20Bulu%C5%9Ftu%C4%9Fu%20%C3%87i%C3%A7ek%20Aranjmanlar%C4%B1%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-mevsim-buketi-taze-ciceklerle-mevsimlerin-guzelliklerini-yasayn">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398684/mevsim-Photoroom_q6psfd.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398684/mevsim-Photoroom_q6psfd.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-mevsim-buketi-taze-ciceklerle-mevsimlerin-guzelliklerini-yasayn">
                          Karışık Mevsim Buketi - Taze Çiçeklerle Mevsimlerin
                          Güzelliklerini Yaşayın
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 1100 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C%20Kar%C4%B1%C5%9F%C4%B1k%20Mevsim%20Buketi%20-%20Taze%20%C3%87i%C3%A7eklerle%20Mevsimlerin%20G%C3%BCzelliklerini%20Ya%C5%9Fay%C4%B1n%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">35%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/papatya-buketi-dogallgn-ve-nesenin-simgesi">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398792/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_2_pc5el1.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398792/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_2_pc5el1.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/papatya-buketi-dogallgn-ve-nesenin-simgesi">
                          Papatya Buketi - Doğallığın ve Neşenin Simgesi
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 900 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CPapatya%20Buketi%20-%20Do%C4%9Fall%C4%B1%C4%9F%C4%B1n%20ve%20Ne%C5%9Fenin%20Simgesi%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-buket-farkl-ciceklerle-sklg-yakalayn">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398883/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_3_u1osxi.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737398883/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_3_u1osxi.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-buket-farkl-ciceklerle-sklg-yakalayn">
                          Karışık Buket - Farklı Çiçeklerle Şıklığı Yakalayın
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 1000 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CKar%C4%B1%C5%9F%C4%B1k%20Buket%20-%20Farkl%C4%B1%20%C3%87i%C3%A7eklerle%20%C5%9E%C4%B1kl%C4%B1%C4%9F%C4%B1%20Yakalay%C4%B1n%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">21%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/41-gullu-buket-sevdiklerinize-ozel-ve-anlaml-hediye">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737399024/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_4_xwr41k.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737399024/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59-Photoroom_4_xwr41k.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/41-gullu-buket-sevdiklerinize-ozel-ve-anlaml-hediye">
                          41 Güllü Buket - Sevdiklerinize Özel ve Anlamlı Hediye
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 3500 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2C41%20G%C3%BCll%C3%BC%20Buket%20-%20Sevdiklerinize%20%C3%96zel%20ve%20Anlaml%C4%B1%20Hediye%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">35%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="single-product.html">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737399205/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59.41_88e59fc7_aecuuv.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737399205/WhatsApp_G%C3%B6rsel_2025-01-20_saat_19.59.41_88e59fc7_aecuuv.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/buyuk-boy-celenk-anlaml-ve-sk-anma-celenkleri">
                          Büyük Boy Çelenk - Anlamlı ve Şık Anma Çelenkleri
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 1750 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CB%C3%BCy%C3%BCk%20Boy%20%C3%87elenk%20-%20Anlaml%C4%B1%20ve%20%C5%9E%C4%B1k%20Anma%20%C3%87elenkleri%20%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-mevsim-buketi-dogann-renkli-harman">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393100/kar%C4%B1%C5%9F%C4%B1k_mevsim_buketi-Photoroom_c6o0ex.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393100/kar%C4%B1%C5%9F%C4%B1k_mevsim_buketi-Photoroom_c6o0ex.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/karsk-mevsim-buketi-dogann-renkli-harman">
                          Karışık Mevsim Buketi: Doğanın Renkli Harmanı
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 1200 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CKar%C4%B1%C5%9F%C4%B1k%20Mevsim%20Buketi%3A%20Do%C4%9Fan%C4%B1n%20Renkli%20Harman%C4%B1%20%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">20%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/nergiz-cicegi-dogann-zarif-guzelligi">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393276/Antar%C4%B1yum-Photoroom_v6fv7i.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737393276/Antar%C4%B1yum-Photoroom_v6fv7i.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="https://hancicek.vercel.app/coksatanlar/IndirimdekiUrunler/nergiz-cicegi-dogann-zarif-guzelligi">
                          Antaryum Buketi: Şıklığın ve Zarafetin İfadesi
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 800 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CAntaryum%20Buketi%3A%20%C5%9E%C4%B1kl%C4%B1%C4%9F%C4%B1n%20ve%20Zarafetin%20%C4%B0fadesi%20%20sipari%C5%9F%20vermek%20istiyorum.WS

"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                    <div className="product-item__sale">
                      <span className="sale-txt">25%</span>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
                {/* Start Product Item */}
                <div className="col">
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <a href="single-product.html">
                        <img
                          className="thumb-primary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395314/nergiz-Photoroom_xhyzrd.jpg"
                          alt="Product"
                        />
                        <img
                          className="thumb-secondary"
                          src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737395314/nergiz-Photoroom_xhyzrd.jpg"
                          alt="Product"
                        />
                      </a>
                    </div>
                    <div className="product-item__content">
                      <div className="ratting">
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                        <span>
                          <i className="ion-android-star-half" />
                        </span>
                      </div>
                      <h4 className="title">
                        <a href="single-product.html">
                          Nergiz Çiçeği: Doğanın Zarif Güzelliği
                        </a>
                      </h4>
                      <span className="price">
                        <strong>Price:</strong> 600 TL
                      </span>
                    </div>
                    <div className="product-item__action">
                      <a
                        href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar%2CNergiz%20%C3%87i%C3%A7e%C4%9Fi%3A%20Do%C4%9Fan%C4%B1n%20Zarif%20G%C3%BCzelli%C4%9Fi%20%20sipari%C5%9F%20vermek%20istiyorum.WS"
                        className="btn-add-to-cart"
                      >
                        <i className="ion-bag">&nbsp; Sepete ekle</i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Product Item */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Products Area Wrapper ==*/}
      {/*== Start Flash Deals Area ==*/}
      <div
        className="flash-deals-area bg-img"
        data-bg="assets/img/bg/deal-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="row align-items-center">
                <div className="col-md-5 col-lg-6">
                  <div className="flash-deals-thumb text-center text-md-start">
                    <img
                      src="https://res.cloudinary.com/dlsfvdvzz/image/upload/v1737391099/WhatsApp_G%C3%B6rsel_2024-12-28_saat_03.00.22_695e34b1_o9nua1.jpg"
                      alt="Deals"
                    />
                  </div>
                </div>
                <div className="col-md-7 col-lg-6 text-center">
                  <div className="flash-deals-content">
                    <h2>FLAŞ FIRSATLAR</h2>
                    <h3>Sevgililer Gününe Özel %25 indirimi kaçırma</h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=905515947070&text=Merhabalar,+sipari%C5%9F+vermek+istiyorum.WS"
                      className="btn btn-brand"
                    >
                      Sipariş Ver
                    </a>
                    <div className="deals-countdown-area">
                      <div className="ht-countdown" data-date="2/14/2025" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*== End Flash Deals Area ==*/}
      {/* Scroll Top Button */}
      <button className="btn-scroll-top">
        <i className="ion-chevron-up" />
      </button>
      {/*== Start Responsive Menu Wrapper ==*/}
      <aside className="off-canvas-wrapper off-canvas-menu">
        <div className="off-canvas-overlay" />
        <div className="off-canvas-inner">
          {/* Start Off Canvas Content */}
          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="Logo" />
                </a>
              </div>
              <div className="close-btn">
                <button className="btn-close">
                  <i className="ion-android-close" />
                </button>
              </div>
            </div>
            {/* Content Auto Generate Form Main Menu Here */}
            <div className="res-mobile-menu mobile-menu"></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Page;
