import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
import {
  ArrowServ,
  MobileIcon,
  NextIcon,
  PartnersIcon1,
  PartnersIcon2,
  PartnersIcon3,
  PartnersIcon4,
  PartnersIcon5,
} from "../../assets/icon";

const Partners = () => {
  const [clickClount, setClickCount] = useState(0);

  const prevCarouselItem = () => {
    if (clickClount !== 0) {
      let firstCard = document.getElementsByClassName("partners-logo");
      if (clickClount <= firstCard.length - 3) {
        setClickCount(clickClount - 1);

        for (let i = 0; i < firstCard.length; i++) {
          let a = firstCard[i].style.transform.substring(
            10,
            firstCard[i].style.transform.length - 3
          );
          firstCard[i].style.transform = `translate(${+a + 339}px)`;
        }
      }
    }
  };
  const nextCarouselItem = () => {
    let firstCard = document.getElementsByClassName("partners-logo");
    if (clickClount < firstCard.length - 3) {
      setClickCount(clickClount + 1);
      for (let i = 0; i < firstCard.length; i++) {
        let a = firstCard[i].style.transform.substring(
          10,
          firstCard[i].style.transform.length - 3
        );
        firstCard[i].style.transform = `translate(${+a - 339}px)`;
      }
    }
  };
  // const isActiveNextBtn = () => {
  //   let firstCard = document.getElementsByClassName("partners-logo");
  //   if (clickClount === 0 || clickClount < firstCard.length - 3) {
  //     return "projects-head__enabled-btn";
  //   } else {
  //     return "projects-head__disabled-btn";
  //   }
  // };
  return (
    <div className="container1">
      <div className="partners-container">
        <h1 className="first-title">Companies that put their trust in us</h1>
        <div className="partners-content">
          <button
            className={
              clickClount !== 0
                ? "projects-head__enabled-btn btn"
                : "projects-head__disabled-btn btn"
            }
            onClick={() => prevCarouselItem()}
          >
            <ArrowServ />
          </button>
          <span className="partners-logo">
            <MobileIcon />
          </span>{" "}
          <span className="partners-logo">
            {" "}
            <PartnersIcon1 />
          </span>{" "}
          <span className="partners-logo">
            {" "}
            <PartnersIcon2 />
          </span>
          <span className="partners-logo">
            <PartnersIcon3 />
          </span>
          <span className="partners-logo">
            <PartnersIcon4 />
          </span>
          <span className="partners-logo">
            <PartnersIcon5 />
          </span>
          <button
            className="btn"
            // className={isActiveNextBtn()}
            onClick={() => nextCarouselItem()}
          >
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
