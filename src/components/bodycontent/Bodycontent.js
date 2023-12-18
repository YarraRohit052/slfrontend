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
    "I-Town": (
      <div>
        <Kotipalli />
      </div>
    ),
    "II-Town": (
      <div>
        <Narayanapuram />
      </div>
    ),
    "III-Town": (
      <div>
        <Godavariroadpage />
      </div>
    ),
    "Bus Stand": (
      <div>
        <ResidentialroadPage />
      </div>
    ),
    "Market Yard": (
      <div>
        <Dommetivariveedhi />
      </div>
    ),
    "Akiveedu Road": (
      <div>
        <Busdepoamalapuram />
      </div>
    ),
    "Market Road": (
      <div>
        <Marketroad />
      </div>
    ),
    "Temple Road": (
      <div>
        <Busdeporajole />
      </div>
    ),
    "Godavari Road": (
      <div>
        <Templeroad />
      </div>
    ),
    "Main Road": (
      <div>
        <Beachroad />
      </div>
    ),
    "Seetharampuram": (
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
