import React from "react";
import "./SectionHeader.css";

function SectionHeader(props) {
  const { heading, smallHeading, headingStyle, smallHeaderStyle, color_img } =
    props;

  return (
    <div className="SectionHeader_sec d-flex mb-4">
      <div className={`${color_img} heading position-relative`}>
        <h2 className={`${headingStyle} SectionHeader_head mb-2`}>{heading}</h2>
        <h5 className={`${smallHeaderStyle} SectionHeader_smallHead`}>
          {smallHeading}
        </h5>
      </div>
    </div>
  );
}

export default SectionHeader;
