import Script from 'next/script';

const MyPage = () => (
  <>
    {/* Modernizr */}
    <Script src="assets/js/modernizr-3.6.0.min.js" strategy="afterInteractive" />
    {/* jQuery */}
    <Script src="assets/js/jquery.min.js" strategy="afterInteractive" />
    {/* jQuery Migrate */}
    <Script src="assets/js/jquery-migrate.min.js" strategy="afterInteractive" />
    {/* Popper.js */}
    <Script src="assets/js/popper.min.js" strategy="afterInteractive" />
    {/* Bootstrap */}
    <Script src="assets/js/bootstrap.min.js" strategy="afterInteractive" />
    {/* SlickNav */}
    <Script src="assets/js/jquery.slicknav.min.js" strategy="afterInteractive" />
    {/* Magnific Popup */}
    <Script src="assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
    {/* Slick Carousel */}
    <Script src="assets/js/slick.min.js" strategy="afterInteractive" />
    {/* Nice Select */}
    <Script src="assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
    {/* Leaflet.js */}
    <Script src="assets/js/leaflet.min.js" strategy="afterInteractive" />
    {/* Countdown */}
    <Script src="assets/js/countdown.js" strategy="afterInteractive" />
    {/* Active.js */}
    <Script src="assets/js/active.js" strategy="afterInteractive" />
  </>
);

export default MyPage;