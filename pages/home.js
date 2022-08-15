import Banner from "../homePage/banner/Banner";
import Hiring from "../homePage/hiring/Hiring";
import Map from "../homePage/map/Map";
import Partners from "../homePage/partners/Partners";
import Services from "../homePage/Services/Services";

function Home() {
  return (
    <div className="app">
      <Banner />
      <Hiring />
      <Services />
      <Partners />
      <Map />
    </div>
  );
}

export default Home;
