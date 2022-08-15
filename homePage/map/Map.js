import Image from "next/image";
import map from "../../assets/img/map.png";

const Map = () => {
  return (
    <div className="containeqr">
      <div className="map-container">
        <h1 className="first-title">Our Experience Runs Deep </h1>
        <div className="map-content">
          <Image src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Map;
