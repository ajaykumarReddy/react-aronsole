import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { BlogsContent } from "../../Components/BlogsPageContent.js";
import Contact from "../../Components/Contact/Contact.js";

function Blog(props) {
  const [content, setContent] = useState({});
  const id = useParams();
  console.log("item", id);
  useEffect(() => {
    BlogsContent.map((item, index) => {
      if (item.id == id.id) {
        setContent(item);
      }
    });

    window.scrollTo(0, 0);
  }, []);

  let bgImage_style = {
    width: "100%",
    height: "450px",
    backgroundImage: "url(" + content.blog_img + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    backgroundSize: "cover",
  };

  return (
    <div className="blog_page_section">
      <div className="blog_social_media_icons">
        <a
          href="https://www.facebook.com/Aronsol_media-100100822514637/?ref=pages_you_manage"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/media_aronsol" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/aronsol_inc/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/company/aronsol" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="blog_banner">
        <div className="blog_banner_img" style={bgImage_style}>
          {/* <img src={content.blog_img} alt="blog banner image" width="100%" /> */}
          <div className="banner_text_div">
            <div className="container banner_text">{content.blog_head}</div>
          </div>
        </div>
      </div>
      <div className="blog_content_section">
        <div className="blog_left_wall_line"></div>
        <div className="container blog_content">
          <p>{content.blog_content}</p>
        </div>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default Blog;
