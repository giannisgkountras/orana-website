import React, { useState } from "react";
import { BsGlobe2, BsPhone } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import "./About.css";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const About = () => {
  const [hover, setHover] = useState({ phoneHover: false, webHover: false, eshopHover: false });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInHover = (icon) => {
    console.log("IN");
    switch (icon) {
      case "phone":
        setHover({ ...hover, phoneHover: true });
        break;
      case "web":
        setHover({ ...hover, webHover: true });
        break;
      case "eshop":
        setHover({ ...hover, eshopHover: true });
    }
  };
  const handleOutHover = (icon) => {
    console.log("OUT");

    switch (icon) {
      case "phone":
        setHover({ ...hover, phoneHover: false });
        break;
      case "web":
        setHover({ ...hover, webHover: false });
        break;
      case "eshop":
        setHover({ ...hover, eshopHover: false });
    }
  };

  return (
    <section className="container" id="about">
      About
      <div className="services-container">
        <div className="service" onMouseEnter={() => handleInHover("phone")} onMouseLeave={() => handleOutHover("phone")}>
          <div className={hover.phoneHover ? "icons flip-in" : "icons"}>
            <BsPhone style={{ color: "#06A77D" }} className="img-phone" />
          </div>
          <div className="text">We develop custom mobile apps that can help your bussiness.</div>
        </div>
        <div className="service" onMouseEnter={() => handleInHover("web")} onMouseLeave={() => handleOutHover("web")}>
          <div className={hover.webHover ? "icons flip-in" : "icons"}>
            <BsGlobe2 style={{ color: "#9395D3" }} />
          </div>
          <div className="text">We develop custom mobile apps that can help your bussiness.</div>
        </div>
        <div className="service" onMouseEnter={() => handleInHover("eshop")} onMouseLeave={() => handleOutHover("eshop")}>
          <div className={hover.eshopHover ? "icons flip-in" : "icons"}>
            <AiOutlineShopping style={{ color: "#F1A208" }} />
          </div>
          <div className="text">We develop custom mobile apps that can help your bussiness.</div>
        </div>
      </div>
      <button className="neomorphism">
        <Link to="/team">TEAM</Link>
      </button>
    </section>
  );
};

export default About;
