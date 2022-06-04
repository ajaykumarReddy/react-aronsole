import React from 'react';
import { Image } from 'react-bootstrap';
import './BusinessCard.css'

function CardBlock(props) {

    const {bg_imgPath, icon_imgPath, icon_text, card_text} = props;

    var sectionStyle = {
        backgroundImage: "url(" +  bg_imgPath  + ")",
        backgroundRepeat: "no-repeat",
        padding: "2% 1%"
      };

    return (
        <div className="card_div" style={sectionStyle}>
            <Image src={icon_imgPath} alt={icon_text} height={100} width={100} />
            <p className='mb-0 mt-3 card_text'>{card_text}</p>
        </div> 
    );
}

export default CardBlock;