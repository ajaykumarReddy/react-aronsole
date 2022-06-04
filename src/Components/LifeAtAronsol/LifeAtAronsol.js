import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LifeAtAronsol.css";

function LifeAtAronsol(props) {
  return (
    <div className="life_at_aronsol_sec">
      <div className="life_at_aronsol_sec_inner_bg">
        <div className="container">
          <div className="life_at_aronsol_inner">
            <SectionHeader
              heading="life at"
              smallHeading="aronsol"
              headingStyle="life_heading"
              smallHeaderStyle="life_smallHeading"
            />
            <p className="inner_text">
              If you ask us to describe Aronsol's work culture in one word, all
              that you can hear from us is Freedom of Work. We give leverage to
              our employees to share, innovate, explore, and learn new ideas. We
              always aim to create a friendly working environment for our
              employees. <br />
              We all have great “Commitment and Integrity” towards our work.
              It's the reason we traveled this far. We all stay dedicated and
              strive hard to bring success to our clients with excellence in our
              work. Our motto is "Never Settle until your work inspires others".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeAtAronsol;
