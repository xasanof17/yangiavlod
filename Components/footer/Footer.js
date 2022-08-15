import Image from "next/image";
import telegram from "../../assets/img/telegram.png";
import insta from "../../assets/img/insta.png";
import linkedin from "../../assets/img/linkedin.png";
import face from "../../assets/img/facebook.png";
import Logo from "../../assets/img/Logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-container">
        <div className="foot_nav">
          <h3 className="footer-title me-5">How can we help you?</h3>
          <button className="footer-btn">Contact us</button>
        </div>
        <div className="footer-items ">
          <div className="footer-item-links ">
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/services/mobile-development">
                  <a>Mobile Development</a>
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-technology">
                  <a>Marketing Technology</a>
                </Link>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
            </ul>
          </div>
          <div className="footer-item-links mt-3">
            <ul>
              <li>
                <a href="#">UI/UX Services</a>
              </li>
              <li>
                <a href="#">Find sponsors for your project</a>
              </li>
            </ul>
          </div>
          <div className="footer-item-links ">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Overview</a>{" "}
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-4">
              <a href=" https://instagram.com/yangi_avlod_corporation?igshid=YmMyMTA2M2Y=">
                <Image src={insta} alt="logo" />
              </a>

              <a href=" https://t.me/yangi_avlod_corporation">
                <Image src={telegram} alt="logo" />
              </a>

              <Image src={linkedin} alt="logo" />
              <Image src={face} alt="logo" />
            </div>
            <div className="col-lg-4">
              ©Yangi Avlod Corparation <br /> 2022
            </div>

            <Link href="/">
              <div className="col-lg-4 logo">
                <Image src={Logo} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
