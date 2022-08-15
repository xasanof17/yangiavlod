import Image from "next/image";
import React from "react";
import { ArrowIcon } from "../../assets/icon";
import HirImage from "../../assets/img/hirImage.png";

const Hiring = () => {
  return (
    <div className="container">
      <div className="hir-container">
        <h1 className="first-title">
          We&apos;re <span>Hiring!</span>
        </h1>
        <div className="hir-content">
          <div className="hir-content-item">
            <h1 className="hir-content-title">WE&apos;RE HIRING!</h1>
            <div className="d-flex hir-flex">
              <h2 className="hir-content-desc">
                Check out <br /> our open positions
              </h2>{" "}
              <div className="hir-content-image">
                <Image src={HirImage} alt="" />
              </div>
            </div>
            <div className="send-content d-flex align-items-baseline">
              <div>
                <h3 className="hir-content-send">Send CV</h3>
              </div>
              <div>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
