import Image from "next/image";
import home from "../../assets/img/banner.png";
import BannerAdds from "../../assets/img/bannerAdds.png";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner_image">
            <Image src={home} alt="The have got banner image" layout="intrinsic" />
          </div>
          <div className="ban_text">
            <h1>
              Digital Solutions. <br /> Delivered.
            </h1>
            <p>
              New Generation is a global softwere consultancy and <br />
              engineering company, which creates the <br /> transformative
              strategies, platforms, and <br /> products our clients need to run
              and grow <br /> their businesses
            </p>
          </div>
        </div>
      </div>
      <div className="add">
        <Image src={BannerAdds} alt="Banner Adds" layout="responsive" />
      </div>
    </>
  );
};

export default Banner;
