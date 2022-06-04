import React, { useEffect, useRef } from "react";
import PageBanner from "../../Components/PageBanner/PageBanner";
import AffiliateMarketing_img from "../../assets/affiliate_marketing_1.png";
import AffiliateMarketing_icon from "../../assets/icon1.png";
import affiliate_marketing_image from "../../assets/affiliate_marketing_image.png";
import pub_img from "../../assets/pub_img.png";
import adv_img1 from "../../assets/adv_img.png";
import Publisher from "../../assets/publisher.png";
import adv_image from "../../assets/adv.png";
import "./style.css";
import { Container } from "react-bootstrap";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import LeftImgMediaCard from "../../Components/MediaCard/LeftImgMediaCard";
import RightImgMediaCard from "../../Components/MediaCard/RightImgMediaCard";
import Contact from "../../Components/Contact/Contact";
import Helmet from "react-helmet";

function AffiliateMarketing(props) {
  const myRef_pub = useRef(null);
  const myRef_adv = useRef(null);
  const pub = () => myRef_pub.current.scrollIntoView();
  const adv = () => myRef_adv.current.scrollIntoView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function Pub_text() {
    return (
      <>
        <Helmet>
          <title>
            Best Affiliate marketing agencies in Hyderabad - Aronsol
          </title>
          <meta
            name="description"
            content="Partner with an ROI based affiliate marketing agencies in Hyderabad and improve your leads and sales. pay as you go only for the qualified leads"
          />
          <meta name="ROBOTS" content="INDEX, FOLLOW" />
          <meta name="ROBOTS" content="ALL" />
          <meta name="googlebot" content="index,follow,archive" />
          <meta name="msnbot" content="index,follow,archive" />
          <meta name="Slurp" content="index,follow,archive" />
          <meta name="author" content="Aronsol" />
          <meta name="publisher" content="Aronsol" />
          <meta name="owner" content="Aronsol" />
          <meta http-equiv="content-language" content="English" />
          <meta name="doc-type" content="Web Page" />
          <meta name="doc-rights" content="Copywritten Work" />
          <meta name="rating" content="All" />
          <meta name="distribution" content="Global" />
          <meta name="document-type" content="Public" />
          <meta name="revisit-after" CONTENT="daily" />
          <meta name="geo.region" content="IN-TS" />
          <meta name="geo.placename" content="Hyderabad" />
          <meta
            content="Best Affiliate marketing agencies in Hyderabad - Aronsol"
            name="site"
          />
          <meta
            content="Best Affiliate marketing agencies in Hyderabad - Aronsol"
            name="page-topic"
          />
          <link
            rel="canonical"
            href="https://aronsol.com/affiliate-marketing"
          />
        </Helmet>
        <p>
          We make you cope up with the global publishers to reach a high volume
          of potential leads. We have a proven approach to make you attract a
          wide range of global audiences. Pay Us for what you earn is our core
          policy.
        </p>
        <br />
        <ul className="bold_para">
          <b>
            <li>Pay For What You Earn</li>
            <li>High-Quality Traffic &#38; Leads</li>
            <li>Stringent Publisher Screening Process</li>
            <li>Result-Driven Strategies </li>
            <li>Analytical Approach to Lower Fraud Risk </li>
            <li>24/7 Dedicated support &#38; Service Team</li>
          </b>
        </ul>
        <div className="pub_login_btn_div">
          <a href="https://aronsol.hasoffers.com/signup">Signup</a>
        </div>
      </>
    );
  }

  function Adv_text() {
    return (
      <>
        <p>
          ARONSOL mileages the performance of the industry&#39;s leading
          Publishers to better leverage the advertising revenue with the
          best-tested offers &#38; advanced analytical approach.
        </p>
        <br />
        <ul className="bold_para">
          <b>
            <li>Exclusive Offers </li>
            <li>Verified &#38; Trusted Partners </li>
            <li>24/7 Publisher Focused Customer Service </li>
            <li>High Payouts </li>
            <li>Fast Onboarding with Expert Advice </li>
            <li>Profound Leads Tracking</li>
          </b>
        </ul>
        <div className="adv_login_btn_div">
          <a href="https://aronsol.hasoffers.com/advertiser_signup">Signup</a>
        </div>
      </>
    );
  }

  return (
    <div className="service_page_sec page_bg_image">
      <div className="service_page_banner position-relative">
        <PageBanner
          pageBanner_img={AffiliateMarketing_img}
          pageBanner_img_text="affiliate marketing image"
          pageBanner_bold_heading="It's 'net-worth'"
          pageBanner_normal_heading="marketing."
          pageTitleBox_icon={AffiliateMarketing_icon}
          pageTitleBox_icon_text="AffiliateMarketing_icon"
          pageTitleBox_heading="AFFILIATE MARKETING"
        />
      </div>
      <div className="service_page_image_sec">
        <Container>
          <div className="service_page_image_inner_sec position-relative">
            <img
              src={affiliate_marketing_image}
              className="center_img d-block m-auto"
            />
            <img src={pub_img} className="it_img adv_img1" onClick={pub} />
            <img src={adv_img1} className="it_img adv_img2" onClick={adv} />
          </div>
        </Container>
      </div>
      <div className="publishers_sec" ref={myRef_pub}>
        <Container>
          <SectionHeader
            // heading="affiliate"
            headingStyle="pub_head_class_01"
            smallHeading="advertisers"
            smallHeaderStyle="pub_head_class_02 adv_head_color"
          />

          <LeftImgMediaCard
            left_img_media={adv_image}
            left_img_media_name="advertisers image"
            left_img_media_card_content_class="aff_pub_bg"
            left_img_media_card_content={<Adv_text />}
          ></LeftImgMediaCard>
        </Container>
      </div>
      <div className="advertiser_sec" ref={myRef_adv}>
        <Container>
          <SectionHeader
            // heading="affiliate"
            headingStyle="adv_head_class_01"
            smallHeading="PUBLISHERS"
            smallHeaderStyle="pub_head_class_02 pub_head_color"
            color_img="pub_color_line"
          />

          <RightImgMediaCard
            right_img_media={Publisher}
            right_img_media_name="Publisher image"
            right_img_media_card_content_class="aff_adv_bg"
            right_img_media_card_content={<Pub_text />}
          ></RightImgMediaCard>
        </Container>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default AffiliateMarketing;
