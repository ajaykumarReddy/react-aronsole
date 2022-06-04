import React from "react";
import { Card } from "react-bootstrap";
import card_1 from "../../assets/card_1.png";
import card_2 from "../../assets/card_2.png";
import card_3 from "../../assets/card_3.png";
import card_4 from "../../assets/card_4.png";
import card_5 from "../../assets/card_5.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import CardBlock from "./card";
import "./BusinessCard.css";

function BusinessCard(props) {
  return (
    <div className="business_cards d-flex flex-wrap justify-content-between mt-5 mb-5">
      <CardBlock
        bg_imgPath={card_1}
        icon_imgPath={icon4}
        icon_text="icon"
        card_text="You got a Project"
      />
      <CardBlock
        bg_imgPath={card_2}
        icon_imgPath={icon5}
        icon_text="icon"
        card_text="Mutual Brainstorm sessions"
      />
      <CardBlock
        bg_imgPath={card_3}
        icon_imgPath={icon6}
        icon_text="icon"
        card_text="Plan your Project"
      />
      <CardBlock
        bg_imgPath={card_4}
        icon_imgPath={icon7}
        icon_text="icon"
        card_text="We do Testing and Quality check"
      />
      <CardBlock
        bg_imgPath={card_5}
        icon_imgPath={icon8}
        icon_text="icon"
        card_text="Booyah!!! Your Project is ready"
      />
    </div>
  );
}

export default BusinessCard;
