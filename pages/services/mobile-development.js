import MobileDev from "../../assets/img/mobile-development.png";
import Architectur from "../../assets/img/arch.png";
import Design from "../../assets/img/design.png";
import Dev from "../../assets/img/dev.png";
import Product from "../../assets/img/prod.png";
import Monit from "../../assets/img/monitoring.png";
import Security from "../../assets/img/secur.png";
import Nativemobile from "../../assets/img/nativemobile.png";
import Hybr from "../../assets/img/hybrid.png";
import Cash from "../../assets/img/cash.png";
import Mapp from "../../assets/img/mapp.png";
import Retail from "../../assets/img/retail.png";
import Tv from "../../assets/img/tv.png";
import Image from "next/image";

function Mobile() {
  return (
    <div className="mobile">
      <div className="mobile-intro">
        <div className="inroduction">
          <div className="intro">
            <h1>
              Enterprise Mobile <br />
              Solutions
            </h1>
          </div>

          <div className="intro-pict">
            <Image src={MobileDev} layout="intrinsic" className="mobiledev" alt='img'/>
          </div>
        </div>

        <div className="intro-info">
          <p>
            Yangi Avlod has extensive experience designing, building, and
            delivering native, hybrid, and cross-platform mobile applications of
            any level and complexity. With our deep expertise in mobile
            technologies, we provide end-to-end mobile app development services
            from architecture & design to delivery, testing, and maintenance.
          </p>
        </div>
      </div>

      {/* Our services part */}

      <h1>Our Services</h1>

      <div className="mobile-services container">
        <p>
          Yangi Avlod offers full-cycle enterprise mobile app development
          services spanning solution ideation, design, development and
          deployment. We cover:
        </p>

        <div className="services-cards">
          <div className="card">
            <h4>Mobile App Development</h4>

            <p>
              For more than a decade, Exadel has successfully delivered
              enterprise mobile solutions using hybrid, native, and
              cross-platform mobile frameworks. Our rich history of custom
              software development led us to evolve core mobile libraries,
              tools, and widespread adoption of production-ready architectures
              that reduce mobile application development time while mitigating
              project risks.
            </p>
          </div>

          <div className="card">
            <h4>UI/UX Design</h4>

            <p>
              We create superior mobile user experiences and interfaces that
              balance form and function by collaborating with stakeholders and
              leveraging our expertise in innovative mobile app development.
            </p>
          </div>
        </div>
      </div>

      <h1>Mobile App Development Lifecycle</h1>

      <div className="mobileapp container">
        <p>
          We devise a process for each of our clients to ensure that our
          enterprise mobile application development services cover their
          business needs.
        </p>

        <div className="mobileapp_cards">
          <div className="card">
            <div className="card-head">
              <Image src={Architectur} className="icons" alt='icon' />

              <h3>Architecture</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>
                  Create robust application architecture to ensure mobile
                  application performance and maintainability
                </li>

                <li>
                  Architect clean integrations and horizontally scalable
                  back-end services
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <Image src={Design} className="icons" alt='icon' />

              <h3>Design</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>
                  Collaboratively design engaging UI/UX that users will love
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <Image src={Dev} className="icons" alt='icon' />

              <h3>Development</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>
                  Client- and server-side components for the entire ecosystem
                </li>

                <li>
                  Integration with internal systems, vendors’ APIs, and
                  third-party services
                </li>

                <li>Mobile cloud computing (AWS, Azure, GCP)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <Image src={Product} className="icons" alt='icon' />

              <h3>Production Implementation and Support</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>App Store and Google Play submission</li>

                <li>Continuous Integration/Continuous Deployment (CI/CD)</li>

                <li>Release management</li>

                <li>Ongoing support and updates</li>

                <li>Data Driven Horizontal Scaling (for hosted services)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <Image src={Monit} className="icons" alt='icon' />

              <h3>Monitoring & Analysis</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>
                  Analytics (Google, Apple, Firebase, Application Insights)
                </li>

                <li>Application Logging (Splunk, ELK Stack, etc.)</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <Image src={Security} className="icons" alt='icon' />

              <h3>Monitoring & Analysis</h3>
            </div>

            <div className="card-info">
              <ul>
                <li>Single Sign On (SSO)/OAuth 2.0/JSON Web Token (JWT)</li>

                <li>Multi-Factor Authentication (MFA)</li>

                <li>Role and Claims Based Authorization</li>

                <li>
                  Mobile Device Management (MDM) & Mobile Application Management
                  (MAM)
                </li>

                <li>Encryption in Transit (TLS)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1>Our Approach</h1>

      <div className="approach">
        <p className="container">
          We use Native Development, as well as Hybrid, Cross-Platform, and
          Progressive Web App Development approaches to provide each customer
          with the following benefits.
        </p>

        <div className="approach_cards">
          <div className="card">
            <h1>Native Mobile App Development</h1>

            <div className="card-info">
              <div className="info-pict">
                <Image src={Nativemobile} id="pict" alt='pict' />
              </div>

              <div className="info">
                <ul>
                  <li>No compromise UI</li>
                  <li>Highest fidelity across devices</li>
                  <li>Best performance</li>
                  <li>Platform native features/hardware</li>
                  <li>Fewer dependencies</li>
                  <li>Easier store approval</li>
                </ul>
                <p>
                  Native application development provides a significant number
                  of benefits over other approaches.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h1>Hybrid, Cross-Platform, and Progressive Web App Development</h1>

            <div className="card-info">
              <div className="info-pict">
                <Image src={Hybr} id="pict" alt="pict"/>
              </div>

              <div className="info">
                <ul>
                  <li>Expedited time to market</li>
                  <li>Lower development costs</li>
                  <li>BShared code base across platforms</li>
                  <li>Wide range of options to fit solution needs</li>
                  <li>Consolidated tech stack</li>
                </ul>

                <p>
                  These solutions will expedite app development and are ideal{" "}
                  <br /> for smaller applications, rapid prototyping, or website
                  analogs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Clients Solutions</h1>

      <div className="solution container">
        <div className="card cash">
          <Image src={Cash} alt='cash'/>

          <div className="info">
            <h1>Avlod CASH</h1>

            <p>
              A solution for financial advisors that allows them to access
              customer-related quickly and securely.
            </p>

            <div className="button" typeof="button">
              Learn More
            </div>
          </div>
        </div>

        <div className="card mapp">
          <h1>Management App</h1>

          <Image src={Mapp} alt='map'/>

          <div className="info">
            <p>
              Updating an employee scheduling app to support multiple browsers
              and ensure a modern UI/UX design.
            </p>

            <div className="button">Learn More</div>
          </div>
        </div>

        <div className="card mapp retail">
          <h1>Retail Data Collection App</h1>

          <Image src={Retail} alt='retail' />

          <div className="info">
            <p>
              Updating an employee scheduling app to support multiple browsers
              and ensure a modern UI/UX design.
            </p>

            <div className="button">Learn More</div>
          </div>
        </div>

        <div className="card tv">
          <Image src={Tv} alt='tv'/>

          <div className="info">
            <h1>Avlod CASH</h1>

            <p>
              A solution for financial advisors that allows them to access
              customer-related quickly and securely.
            </p>

            <div className="button" typeof="button">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
