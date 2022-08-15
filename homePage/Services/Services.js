import React, { useState } from "react";
import services from "../../assets/img/services.png";
import Image from "next/image";
import {
  MarketIcon,
  MobileDevIcon,
  MobileIcon,
  ServicesArrowIcon,
  UxIcon,
  WebIcon,
} from "../../assets/icon";
import { ServicesData } from "./ServicesData";
import Link from "next/link"

const Services = () => {
  console.log(ServicesData);
  return (
    <div className="container">
      <div className="services-container">
        <h1 className="first-title">Services</h1>
        <div className="services-content">
          {/* {ServicesData.map((item, i) => {
            return ( */}
          <div className="services-content-item">
            <div className="services-content-item-image">
              <div className="services-border"></div>
              <MobileDevIcon />
            </div>
            <div className="extra">
              <Link href="/services/mobile-development"><h6 className="services-content-item-title">
                Mobile Development
              </h6></Link>
              <div className="services-content-overflow">
                  <Link href="/services/mobile-development">
                    <p className="services-content-item-desc">We provide expert business analysis, design, and development
                  of mobile applications and provide further optimization and
                  scale-up on demand.</p>
                  </Link>
              </div>
              <div className="services-content-item-send d-flex align-items-baseline">
                <div>
                    <Link href="/services/mobile-development"><h3 className="services-content-item-send-text mob">Learn More
                  </h3></Link>
                </div>
                <div>
                  <ServicesArrowIcon />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="services-content-item">
            <div className="services-content-item-image">
              <div className="services-border"></div>
              <WebIcon />
            </div>
            <div className="extra">
              <h6 className="services-content-item-title">Web Development</h6>
              <div className="services-content-overflow">
                <p className="services-content-item-desc">
                  We improve the software development and delivery process by
                  bringing together the best tools, solutions, and practices
                  that allow organizations to automate the continuous delivery
                  pipeline.
                </p>
              </div>
              <div className="services-content-item-send d-flex align-items-baseline">
                <div>
                  <h3 className="services-content-item-send-text webdev">
                    Learn More
                  </h3>
                </div>
                <div>
                  <ServicesArrowIcon />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="services-content-item">
            <div className="services-content-item-image">
              <div className="services-border"></div>
              <UxIcon />
            </div>
            <div className="extra">
              <h6 className="services-content-item-title">UI/UX Services</h6>
              <div className="services-content-overflow">
                <p className="services-content-item-desc">
                  We conduct user research, create wireframes and prototypes,
                  and discuss navigational schemes and information to ensure
                  that our customers’ end products are valuable assets to their
                  business.
                </p>
              </div>
              <div className="services-content-item-send d-flex align-items-baseline">
                <div>
                  <h3 className="services-content-item-send-text webdev">
                    Learn More
                  </h3>
                </div>
                <div>
                  <ServicesArrowIcon />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="services-content-item">
            <div className="services-content-item-image">
              <div className="services-border"></div>
              <MarketIcon />
            </div>
            <div className="extra">
              
              <Link href="/services/marketing-technology">
              
                <h6 className="services-content-item-title">
                  Marketing Technology
                </h6>
              
              </Link>

              <div className="services-content-overflow">
                
                <Link href="/services/marketing-technology">

                  <p className="services-content-item-desc">
                    We provide the customization our clients need to add content
                    across multiple channels, integrate their existing systems,
                    and get their sites running perfectly for optimal user
                    experience and authority.
                  </p>
                
                </Link>

              </div>
              <div className="services-content-item-send d-flex align-items-baseline">
                <div>
                  
                  <Link href="/services/marketing-technology">

                    <h3 className="services-content-item-send-text webdev">
                      Learn More
                    </h3>

                  </Link>

                </div>
                <div>
                  <ServicesArrowIcon />
                </div>
              </div>
            </div>
          </div>
          {/* );
          })} */}
          <div className="end">
            <div className="services-content-item-image">
              <Image src={services} alt="img" />
            </div>
            <div className="extra">
              <h6 className="services-content-item-title">
                Find sponsors for your project
              </h6>
              <p className="services-content-item-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pharetra nulla ut mauris aliquet, ut vestibulum purus
                vestibulumFusce ex arcu, euismod nec consequat maximus Fusce ex
                arcu, euismod ne. Fusce pharetra nulla ut mauris aliquet, ut
                vestibulum purus vestibulumFusce ex arcu, euismod, euismod ne.
              </p>
              <div className="services-content-item-send d-flex align-items-baseline">
                <div>
                  <h3 className="services-content-item-send-text mt-3">
                    Learn More
                  </h3>
                </div>
                <div>
                  <ServicesArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
