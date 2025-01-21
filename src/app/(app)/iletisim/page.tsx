import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="page-content-wrapper sm-top">
      <div className="contact-page-content">
        {/* Contact Info Section */}
        <div className="contact-info-wrapper">
          <div className="container">
            <div className="row mtn-30">
              {/* Contact Info Items */}
              {[
                {
                  icon: "ion-ios-location-outline",
                  title: "Konum",
                  description:
                    " Mansur Dede Mahallesi, Atatürk Bulvarı No:34 Merkez/KARAMAN",
                },
                {
                  icon: "ion-iphone",
                  title: "İletişim bilgileri",
                  description: "Mobile: +90 551 594 70 70,+90 338 217 57 17",
                },
                {
                  icon: "ion-ios-email-outline",
                  title: "E-posta Adresi",
                  description: "hancicekcilik@gmail.com",
                },
              ].map((info, index) => (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <div className="contact-info-item">
                    <div className="con-info-icon">
                      <i className={info.icon} />
                    </div>
                    <div className="con-info-txt">
                      <h4>{info.title}</h4>
                      <p>{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="relative w-full h-96">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1589.4005639877648!2d33.2169672!3d37.1811969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d98d98c1e84645%3A0xa6fd2fcea6cde79!2zSEFOIMOHxLDDh0VLw4fEsEzEsEsgS0FSQU1BTg!5e0!3m2!1sen!2str!4v1737395100030!5m2!1sen!2str"

          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
