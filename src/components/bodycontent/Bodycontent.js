import React from "react";
import "./Bodycontent.css";
import Kotipalli from "./Kotipallipage";
import Narayanapuram from "./Narayanapurampage";
import ResidentialroadPage from "./ResidentialroadPage";
import Godavariroadpage from "./Godavariroadpage";
import Dommetivariveedhi from "./Dommetivariveedhi";
import Busdepoamalapuram from "./Busdepoamalapuram";
import Marketroad from "./Marketroad";
import Busdeporajole from "./Busdeporajole";
import Templeroad from "./Templeroad";
import Beachroad from "./Beachroad";
import Lighthouseroad from "./Lighthouseroad";

const Bodycontent = ({ selectedItem }) => {
  const contentMap = {
    Kotipalli: (
      <div>
        <Kotipalli />
      </div>
    ),
    Narayanapuram: (
      <div>
        <Narayanapuram />
      </div>
    ),
    "Godavari Road": (
      <div>
        <Godavariroadpage />
      </div>
    ),
    "Residential Road": (
      <div>
        <ResidentialroadPage />
      </div>
    ),
    "Dommetivari Veedhi": (
      <div>
        <Dommetivariveedhi />
      </div>
    ),
    "APSRTC Bus Depo Road Amalapuram": (
      <div>
        <Busdepoamalapuram />
      </div>
    ),
    "Market Road": (
      <div>
        <Marketroad />
      </div>
    ),
    "APSRTC Bus Depo Road Rajole": (
      <div>
        <Busdeporajole />
      </div>
    ),
    "Temple Road": (
      <div>
        <Templeroad />
      </div>
    ),
    "Beach Road": (
      <div>
        <Beachroad />
      </div>
    ),
    "Light house Road": (
      <div>
        <Lighthouseroad />
      </div>
    ),
  };

  return (
    <div className="body-content-container">
      <div>
        {contentMap[selectedItem] || (
          <></>
        )}
      </div>
    </div>
  );
};

export default Bodycontent;
