import Image from "next/image";
import Market from "../../assets/img/marketing.png";

function Marketing() {
  return (
    <div className="marketing container">
      <div className="marketingDesc">
        <div className="markDesc_left">
          <div>Marketing</div>
          <div>Technology</div>
        </div>

        <div className="markDesc_right">
          <Image src={Market} layout="intrinsic" className="market_img" alt='img' />
        </div>
      </div>

      <div className="description">
        Marketing technology (MarTech) consists of expert digital solutions that
        promote your brand and drive sales through providing unique and
        effective experiences. Our technology experts work hand in hand with
        your marketing team to get the most out of the software and platforms
        that underpin your digital marketing strategy. We provide custom
        solutions that you need to add content across multiple channels,
        integrate your existing systems, and get your site running perfectly for
        optimal user experience.
      </div>

      <h1>Marketing Technology Services</h1>

      <div className="mark-services">
        <p>
          We use Native Development, as well as Hybrid, Cross-Platform, and
          Progressive Web App Development approaches to provide each customer
          with the following benefits.
        </p>

        <div className="mark-services_cards">
          <div className="cards">
            <h5>Full Cycle Development</h5>

            <p>
              We are a full-service digital marketing agency, so we can develop
              platforms and websites from scratch, ensuring that your website is
              set up correctly and it empowers your digital marketing team.
            </p>
          </div>

          <div className="cards red">
            <h5>Legacy Migration</h5>

            <p>
              We migrate your old portals and websites to leading platforms such
              as Adobe Experience Cloud or WordPress to ensure that your content
              team can easily implement your marketing strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="mark-services">
        <div className="mark-services_cards">
          <div className="cards red">
            <h5>Assessments and Upgrades</h5>

            <p>
              We assess your existing marketing technology solutions and guide
              you toward a more effective or modern approach, without having to
              start from scratch.
            </p>
          </div>

          <div className="cards">
            <h5>Support and Maintenance</h5>

            <p>
              We offer on-going support, including QA automation and DevOps, to
              ensure that our clients’ solutions perform optimally and meet
              their digital marketing goals. We also provide a number of web
              publishing services to bridge the gap between your content
              creators and customers.
            </p>
          </div>
        </div>
      </div>

      <h1>Our Areas of Expertise</h1>

      <div className="mark-expertise">
        <p>
          For over a decade, we’ve provided the MarTech services that enable our
          customers to implement their strategies. Here are some of the key
          areas we cover:
        </p>

        <div className="expertise-cards">
          <div className="card">
            <h5>Localization</h5>

            <p>
              Creating multisite and multi- language website versions for
              different regions, countries, and areas
            </p>
          </div>

          <div className="card purple">
            <h5>Personalization</h5>

            <p>
              Creating a unique experience for each visitor based on a range of
              criteria
            </p>
          </div>

          <div className="card red">
            <h5>Personalization</h5>

            <p>
              Creating a unique experience for each visitor based on a range of
              criteria
            </p>
          </div>

          <div className="card orange">
            <h5>Personalization</h5>

            <p>
              Creating a unique experience for each visitor based on a range of
              criteria
            </p>
          </div>

          <div className="card purple">
            <h5>Performance</h5>

            <p>
              Making sure that the site works well under a variety of
              circumstances to retain customers
            </p>
          </div>

          <div className="card red">
            <h5>SEO</h5>

            <p>
              Helping achieve better SEO results by correctly designing and
              building sites
            </p>
          </div>

          <div className="card orange">
            <h5>Accessibility</h5>

            <p>
              Developing sites that are available to customers with special
              needs
            </p>
          </div>

          <div className="card">
            <h5>Security</h5>

            <p>
              Testing site vulnerabilities through security and penetration
              testing
            </p>
          </div>

          <div className="card red third">
            <h5>Testing Automation</h5>

            <p>
              Providing solutions and approaches to quickly and automatically
              test complex UI
            </p>
          </div>

          <div className="card orange third">
            <h5>Availability</h5>

            <p>
              Implementing the right DevOps infrastructure combined with
              software to ensure minimal down time, high performance across your
              entire site, and all expected functionality
            </p>
          </div>

          <div className="card third">
            <h5>UI/UX</h5>

            <p>
              Designing and developing responsive sites that provide fast,
              modern, and interactive experiences, seamlessly displaying
              animations, graphics, videos, and other content
            </p>
          </div>

          <div className="card purple third">
            <h5>Content Management</h5>

            <p>
              Providing the capability to create, manage, and deliver your
              content to various devices and channels through content management
              systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
