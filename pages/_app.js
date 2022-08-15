import "../styles/_base.scss";
import "../styles/Home_Style/_Navbar.scss";
import "../styles/Home_Style/_Banner.scss";
import "../styles/Home_Style/_Hir.scss";
import "../styles/Home_Style/_Services.scss";
import "../styles/Home_Style/_Partners.scss";
import "../styles/Home_Style/_Map.scss";
import "../styles/Home_Style/_Footer.scss";
import "../styles/_careers.scss"
import "../styles/Services/_Marketing.scss"
import "../styles/Services/_Mobile-development.scss"

import Layout from "../Components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
// import "swiper/css";
// import "swiper/css/bundle";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
    </>
  );
}

export default MyApp;
