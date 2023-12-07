import React, { useEffect, useState, useRef } from "react";
import "./Sidedrawer.css";
import {
  Drawer,
  VerticalNavigation,
  VerticalItem,
  VerticalSectionOverflow,
} from "react-rainbow-components";
import Bodycontent from "../bodycontent/Bodycontent";

const Sidedrawer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const sideDrawerRef = useRef(null);
  const sideDrawerCloser = () => {
    setIsOpen(false);
  }
  useEffect(() => {
    setIsOpen(props.hamburgerstate);
  }, [props.hamburgerstate]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (sectionName) => {
    setSelectedSection(sectionName);
    setSelectedItem(null);
  };

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    toggleDrawer();
  };

  const rajahmundryNames = ["Kotipalli", "Narayanapuram", "Godavari Road"];
  const amalapuramNames = ["Residential Road","Dommetivari Veedhi","APSRTC Bus Depo Road Amalapuram"];
  const rajoleNames = ["Market Road", "APSRTC Bus Depo Road Rajole"];
  const antarvediNames = ["Temple Road", "Beach Road", "Light house Road"];

  const handleBodyClick = (event) => {
    if (sideDrawerRef.current && !sideDrawerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="side__drawer__container">
      <Drawer
        id="Districts"
        header="Districts"
        isOpen={isOpen}
        className="side__drawer"
        onRequestClose={() => {
          toggleDrawer(); 
          sideDrawerCloser();
          handleBodyClick();
        }}
        ref={sideDrawerRef}
      >
        <VerticalNavigation id="vertical-navigation-11">
          <VerticalSectionOverflow label="East Godavari" className="east">
            <VerticalItem
              name="section-item-0"
              label="Rajahmundry"
              onClick={() => handleSectionClick("Rajahmundry")}
            />
            {selectedSection === "Rajahmundry" &&
              rajahmundryNames.map((name, index) => (
                <div key={index}>
                  <VerticalItem
                    name={`item-rajahmundry-${index + 1}`}
                    label={name}
                    onClick={() => handleItemClick(name)}
                    className="sub__items"
                  />
                </div>
              ))}

            <VerticalItem
              name="section-item-1"
              label="Amalapuram"
              onClick={() => handleSectionClick("Amalapuram")}
            />
            {selectedSection === "Amalapuram" &&
              amalapuramNames.map((name, index) => (
                <div key={index}>
                  <VerticalItem
                    name={`item-amalapuram-${index + 1}`}
                    label={name}
                    onClick={() => handleItemClick(name)}
                    className="sub__items"
                  />
                </div>
              ))}

            <VerticalItem
              name="section-item-2"
              label="Rajole"
              onClick={() => handleSectionClick("Rajole")}
            />
            {selectedSection === "Rajole" &&
              rajoleNames.map((name, index) => (
                <div key={index}>
                  <VerticalItem
                    name={`item-rajole-${index + 1}`}
                    label={name}
                    onClick={() => handleItemClick(name)}
                    className="sub__items"
                  />
                </div>
              ))}

            <VerticalItem
              name="section-item-3"
              label="Antarvedi"
              onClick={() => handleSectionClick("Antarvedi")}
            />
            {selectedSection === "Antarvedi" &&
              antarvediNames.map((name, index) => (
                <div key={index}>
                  <VerticalItem
                    name={`item-antarvedi-${index + 1}`}
                    label={name}
                    onClick={() => handleItemClick(name)}
                    className="sub__items"
                  />
                </div>
              ))}
          </VerticalSectionOverflow>
        </VerticalNavigation>
      </Drawer>
      {selectedItem && <Bodycontent selectedItem={selectedItem} />}
    </div>
  );
};

export default Sidedrawer;
