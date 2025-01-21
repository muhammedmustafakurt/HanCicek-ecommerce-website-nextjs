import React from "react";

const AboutPage: React.FC = () => {
  return (
    <>
      <>
        {/*== Start Page Header Area ==*/}
        <div
          className="page-header-wrap bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://htmldemo.net/lukas/lukas/assets/img/bg/page-header-bg.jpg')",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="page-header-content">
                  <div className="page-header-content-inner">
                    <h1>HAKKIMIZDA</h1>
                    <ul className="breadcrumb">
                      <li>
                        <a href="index.html">Ana Sayfa</a>
                      </li>
                      <li className="current">
                        <a href="#">Hakkımızda</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Page Header Area ==*/}
        {/*== Start Page Content Wrapper ==*/}
        <div className="page-content-wrapper sm-top">
          <div className="about-page-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-1 order-md-0">
                  <div className="about-content">
                    <h2 className="h3 mb-sm-20">Hakkımızda</h2>
                    <p>
                      Huzur Oto Yedek Parça, otomotiv sektöründe yüksek kaliteli
                      yedek parça ve ekipman tedarikinde güvenilir bir markadır.
                      Müşterilerimize araçlarının ihtiyaç duyduğu en doğru
                      çözümleri sunarak güvenli ve konforlu bir sürüş deneyimi
                      sağlamayı hedefliyoruz.
                    </p>
                    <p>
                      Otomobiller için motor parçaları, süspansiyon sistemleri,
                      fren ekipmanları ve aksesuarlar gibi geniş bir ürün
                      yelpazesi sunuyoruz. Araç performansını artıracak
                      dayanıklı ve uygun fiyatlı ürünlerimizle yanınızdayız.
                    </p>
                    <p>
                      Huzur Oto Yedek Parça olarak, müşterilerimizin
                      memnuniyetini ön planda tutarak, otomotiv sektörüne değer
                      katmaya devam ediyoruz. Her zaman kaliteli ve güvenilir
                      ürünlerle hizmetinizdeyiz.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 order-0">
                  <div className="about-thumb mb-sm-30">
                    <img
                      src="https://res.cloudinary.com/dgu0a3von/image/upload/v1736947313/ug3awr00viiux6ho5dqi.png"
                      alt="About"
                    />
                  </div>
                </div>
              </div>
              <div className="row align-items-center sm-top">
                <div className="col-lg-6">
                  <div className="about-thumb video-play mb-sm-30">
                    <img
                      src="https://res.cloudinary.com/dgu0a3von/image/upload/v1736947453/b5vmocfg9xxnprumyl0m.png"
                      alt="About"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <h2 className="h3">Misyonumuz</h2>
                    <p>
                      Huzur Oto Yedek Parça olarak, otomotiv sektöründe en
                      kaliteli ürünleri sunarak müşterilerimizin araç bakımını
                      kolaylaştırmayı ve performansını artırmayı hedefliyoruz.
                      Güvenli sürüş ve uzun ömürlü çözümler için her zaman
                      yanınızdayız.
                    </p>
                    <p>
                      Ürünlerimiz, araçların gövde ve mekanik aksamlarına
                      yönelik geniş bir yelpazeyi kapsar. Amacımız, her
                      müşterimizin ihtiyacına uygun kaliteli ve dayanıklı
                      parçalarla hizmet vermektir.
                    </p>
                    <p>
                      Huzur Oto Yedek Parça, otomotiv tutkunlarının
                      ihtiyaçlarını karşılamak için güvenilir ve yenilikçi
                      çözümler sunmaya devam etmektedir. Araçlarınız için en
                      iyisini sunmak bizim önceliğimizdir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Page Content Wrapper ==*/}
        <br />
        <br />
        <br />
      </>
    </>
  );
};

export default AboutPage;
