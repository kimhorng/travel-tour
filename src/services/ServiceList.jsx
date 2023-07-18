import React from "react";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
const ServiceList = () => {
  const servicesData = [
    {
      imgUrl: weatherImg,
      title: "Calulate Weather",
      desc: "Weather and Climate Change. Become a weather forecaster",
    },
    {
      imgUrl: guideImg,
      title: "Best Tour Guide",
      desc: "The Tour Guide Who Will Make Your Trip Unforgettable",
    },
    {
      imgUrl: customizationImg,
      title: "Customization",
      desc: "Craft a unique itinerary. A journey tailored to you",
    },
  ];
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
