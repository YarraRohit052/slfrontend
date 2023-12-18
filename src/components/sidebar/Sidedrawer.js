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

  const rajahmundryNames = ["I-Town", "II-Town", "III-Town"];
  const amalapuramNames = ["Bus Stand","Market Yard","Akiveedu Road"];
  const rajoleNames = ["Market Road", "Temple Road"];
  const antarvediNames = ["Godavari Road", "Main Road", "Seetharampuram"];

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
          <VerticalSectionOverflow label="West Godavari" className="east">
            <VerticalItem
              name="section-item-0"
              label="Bhimavaram"
              onClick={() => handleSectionClick("Bhimavaram")}
            />
            {selectedSection === "Bhimavaram" &&
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
              label="Undi"
              onClick={() => handleSectionClick("Undi")}
            />
            {selectedSection === "Undi" &&
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
              label="Palakol"
              onClick={() => handleSectionClick("Palakol")}
            />
            {selectedSection === "Palakol" &&
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
              label="Narsapur"
              onClick={() => handleSectionClick("Narsapur")}
            />
            {selectedSection === "Narsapur" &&
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
