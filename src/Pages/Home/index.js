import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AboutAronsol from "../../Components/AboutAronsol/AboutAronsol";
import AronsolUSP from "../../Components/AronsolUSP/AronsolUSP";
import BannerCarousel from "../../Components/BannerCarousel/BannerCarousel";
import BigGuns from "../../Components/BigGuns/BigGuns";
import BusinessCard from "../../Components/BusinessCard/BusinessCard";
import Contact from "../../Components/Contact/Contact";
import LifeAtAronsol from "../../Components/LifeAtAronsol/LifeAtAronsol";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import SkillIconCard from "../../Components/SkillIconCard/SkillIconCard";
import "./style.css";

function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePage_sec">
      <div className="w-100 position-relative">
        <BannerCarousel />
        <div className="skill_section">
          <Container>
            <SkillIconCard />
          </Container>
        </div>
      </div>

      <div className="ease_of_business_sec">
        <Container>
          <SectionHeader
            heading="Ease of business"
            smallHeading="with Aronsol"
            headingStyle="text-dark"
          />
          <p className="ease_of_business_para">
            <b>We don't lagggg</b>, our commitment to your project remains
            subtle. Every project is devotedly managed to provide a stress-free
            relationship with you!
          </p>
          <BusinessCard />
        </Container>
      </div>

      <div>
        <AronsolUSP />
      </div>

      <div className="my-5">
        <Container>
          <BigGuns />
        </Container>
      </div>

      <div className="">
        <LifeAtAronsol />
      </div>

      <div ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
