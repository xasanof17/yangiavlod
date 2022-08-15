import React, { useState } from "react";
import Image from "next/image";
import { Logo } from "../../assets/icon";
import DropIcon from "../../assets/img/dropIcon.png";
import FlagEng from "../../assets/img/flagEng.png";
import flagUz from "../../assets/img/flagUzb.png";
import flagRu from "../../assets/img/flagRu.png";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [classAdd2, setClassAdd2] = useState(false);

  const handleMenu = (e) => {
    setActive(!active);
    e.currentTarget.classList.toggle("cl-white");
    setIsActive((current) => !current);
  };
  return (
    <div className="container">
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container navbar- content-con">
            <Link href="/">
              <a className={`navbar-brand nav_logo `} href="#">
                <Logo />
              </a>
            </Link>
            <div
              className={`main-header_menu navbar-toggler ${
                active ? "active bg-white" : ""
              }`}
              onClick={handleMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={isActive ? "bg-salmon" : ""}></span>
              <span className={isActive ? "bg-salmon" : ""}></span>
              <span className={isActive ? "bg-salmon" : ""}></span>
            </div>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                {" "}
                <li className="nav-item home-link">
                  <a className={`nav-link `} href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end animate slideIn"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link href="/services/mobile-development">
                      <a className="dropdown-item">Mobile Development</a>
                    </Link>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                    <a className="dropdown-item" href="#">
                      UI/UX Services
                    </a>
                    <Link href="/services/marketing-technology">
                      <a className="dropdown-item">Marketing Technology</a>
                    </Link>
                    <a className="dropdown-item" href="#">
                      Find sponsors for your <br /> project
                    </a>
                    {/* <div className="dropdown-divider"></div> */}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end animate slideIn"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Overview
                    </a>
                    <a className="dropdown-item" href="#">
                      Partners
                    </a>
                    <a className="dropdown-item" href="#">
                      Leadership
                    </a>
                    <a className="dropdown-item" href="#">
                      Sponsors
                    </a>
                    {/* <div className="dropdown-divider"></div> */}
                  </div>
                </li>
                <li className="nav-item">
                  <Link href="/our-work/">
                    <a className="nav-link" href="#">
                      Our work
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/careers">
                    <a className="nav-link">Careers</a>
                  </Link>
                </li>{" "}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Image src={FlagEng} alt="flag" />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end animate slideIn text-center align-content-center"
                    aria-labelledby="navbarDropdown"
                  >
                    <button className="dropdown-item">
                      <Image src={flagUz} alt="" />
                    </button>{" "}
                    <button className="dropdown-item">
                      <Image src={flagRu} alt="" />
                    </button>
                  </div>
                </li>
                <button className="nav-item contact-button justify-content-star ">
                  <a className="nav-link mx-4" href="#">
                    Contact us
                  </a>
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
