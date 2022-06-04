import React, { useEffect, useRef } from "react";
import PageBanner from "../../Components/PageBanner/PageBanner";
import IT_solutions from "../../assets/it_1.png";
import AffiliateMarketing_icon from "../../assets/affliateMarketing_icon_1.png";
import it_ser_img from "../../assets/it_ser_img.png";
import it_offshowring_img from "../../assets/it_offshowring_img.png";
import website_img from "../../assets/website_img.png";
import app_design_img from "../../assets/app_design_img.png";
import cloud_img from "../../assets/cloud_img.png";
import off from "../../assets/off.png";
import dd from "../../assets/dd.png";
import app_dd from "../../assets/app_dd.png";
import cloud_services from "../../assets/cloud.png";
import "./style.css";
import { Container } from "react-bootstrap";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import LeftImgMediaCard from "../../Components/MediaCard/LeftImgMediaCard";
import RightImgMediaCard from "../../Components/MediaCard/RightImgMediaCard";
import Contact from "../../Components/Contact/Contact";
import Helmet from "react-helmet";

function ITSolutions(props) {
  const myRef_offshore = useRef(null);
  const myRef_website = useRef(null);
  const myRef_appDesign = useRef(null);
  const myRef_cloud = useRef(null);
  const offshore = () => myRef_offshore.current.scrollIntoView();
  const website = () => myRef_website.current.scrollIntoView();
  const appDesign = () => myRef_appDesign.current.scrollIntoView();
  const cloud = () => myRef_cloud.current.scrollIntoView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function IT_offshoring_text() {
    return (
      <>
        Isn&#39;t it annoying to see your system running into troubled waters?
        Well, no one likes it right! And the tougher part is tackling it. No
        worries! We have tech specialists mastered in handling unresolvable
        issues in no time. Aronsol&#39;s cloud developers design and implement
        cloud infrastructures and then monitor and maintain the same. They
        efficiently handle the development of workflows and processes.
        Maintaining cloud computing systems is our cloud support developer&#39;s
        main priority. Their entire work deals with technical computer
        programming knowledge and computer hardware. If you&#39;re one of the
        people facing hurdles in your system, immediately reach us without a
        delay. We will resolve and make your system hurdle-free!
      </>
    );
  }

  function Website_design_dev_text() {
    return (
      <>
        Websites are the key for modern-day businesses. Its main priority must
        be easy navigation and better functionality. Only then the targeted
        customers will stay longer on the website. Fulfilling these features,
        Aronsol brings you accomplished web designers who have got the art of
        mastering unique website designs. Our main goal strives hard in
        designing a layout featuring impressive style in its way. We do
        everything right from inventing a new website to creating, developing,
        and letting it go live. Our web designers can create functional websites
        specially customized based on your business requirements. A website
        created with a unique web design combined with advanced SEO, content,
        and online advertising is all that matters to improve business growth
        and we have attained a remarkable name in doing the same. Give us a
        chance to design one for you!
      </>
    );
  }

  function App_design_dev_text() {
    return (
      <>
        Are you hunting for a business app that suits your requirements? Well!
        You got us here! We have trained and well-versed app developers to
        invent a set of programs to perform numerous tasks based on your
        business needs. Our tech evangelists are here to solve your tech
        hurdles. Leveraging their programmatic development skills, they curate
        the apps on your devices. Our skilled developers develop trendy mobile
        apps in the stipulated timeline for every user, industry, and platform.
        They are super trained in developing web apps too. We offer mobile app
        development services for multiple industrial domains across both Android
        and iOS platforms. We will develop both native apps and full-stack
        mobile apps. We also develop enterprise apps, progressive web apps, and
        hybrid apps. Reach us and we will build a peerless superior-modern-day
        app for you!
      </>
    );
  }

  function Cloud_services_text() {
    return (
      <>
        <p>
          Isn&#39;t it exciting to hear this out! Aronsol also bestows
          offshoring IT services. From the oldest coder to the new programmer
          we&#39;ve accommodated all of them under one roof. If you have an
          impressive project in mind, then you&#39;re at the right place. We
          will add soul to your project and bring it to life. Our team is
          jam-packed with unbeatable skills and is super-ready to master the art
          of technology-adapted experiences for your project.
        </p>
        <p>
          Our tech geeks can handle all your in-and-out IT services-related
          projects. Why are you still waiting? Join us! Let&#39;s combinedly
          make it happen and introduce the live projects to the world. Let us
          give life to your projects.
        </p>
      </>
    );
  }

  return (
    <div className="service_page_sec page_bg_image">
      <Helmet>
        <title>
          IT Consulting Services in India | Technology consulting services
        </title>
        <meta
          name="description"
          content="Our strategic IT consulting services help you automate	&#38; digitize your operations, optimize your software portfolio, and implement the latest technologies"
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
          content="IT Consulting Services in India | Technology consulting services"
          name="site"
        />
        <meta
          content="IT Consulting Services in India | Technology consulting services"
          name="page-topic"
        />
        <link rel="canonical" href="https://aronsol.com/it-solutions" />
      </Helmet>
      <div className="service_page_banner position-relative">
        <PageBanner
          pageBanner_img={IT_solutions}
          pageBanner_img_text="IT solutions image"
          pageBanner_bold_heading="Out-and-Out"
          pageBanner_normal_heading="tech services"
          pageTitleBox_icon={AffiliateMarketing_icon}
          pageTitleBox_icon_text="IT Solutions icon"
          pageTitleBox_heading="IT SOLUTIONS"
        />
      </div>
      <div className="service_page_image_sec">
        <Container>
          <div className="service_page_image_inner_sec position-relative">
            <img src={it_ser_img} className="center_img d-block m-auto" />
            <img
              src={it_offshowring_img}
              className="it_img it_img1"
              onClick={offshore}
            />
            <img
              src={website_img}
              className="it_img it_img2"
              onClick={website}
            />
            <img
              src={app_design_img}
              className="it_img it_img3"
              onClick={appDesign}
            />
            <img src={cloud_img} className="it_img it_img4" onClick={cloud} />
          </div>
        </Container>
      </div>
      <div className="publishers_sec" ref={myRef_offshore}>
        <Container>
          <SectionHeader
            heading="INFORMATION TECHNOLOGY"
            headingStyle="pub_head_class_01"
            smallHeading="OFFSHORING"
            smallHeaderStyle="pub_head_class_02"
          />
          <LeftImgMediaCard
            left_img_media={off}
            left_img_media_name="publisher image"
            left_img_media_card_content_class="aff_pub_bg"
            left_img_media_card_content={<IT_offshoring_text />}
          />
        </Container>
      </div>
      <div className="advertiser_sec" ref={myRef_website}>
        <Container>
          <SectionHeader
            heading="WEBSITE"
            headingStyle="adv_head_class_01"
            smallHeading="DESIGN AND DEVELOPMENT"
            smallHeaderStyle="pub_head_class_02"
            color_img="pub_color_line"
          />
          <RightImgMediaCard
            right_img_media={dd}
            right_img_media_name="advertiser image"
            right_img_media_card_content_class="aff_adv_bg"
            right_img_media_card_content={<Website_design_dev_text />}
          />
        </Container>
      </div>
      <div className="socialMedia_sec" ref={myRef_appDesign}>
        <Container>
          <SectionHeader
            heading="APPLICATION "
            headingStyle="pub_head_class_01"
            smallHeading="DESIGN AND DEVELOPMENT"
            smallHeaderStyle="pub_head_class_02"
          />
          <LeftImgMediaCard
            left_img_media={app_dd}
            left_img_media_name="publisher image"
            left_img_media_card_content_class="aff_pub_bg"
            left_img_media_card_content={<App_design_dev_text />}
          />
        </Container>
      </div>
      <div className="advertiser_sec mt-5" ref={myRef_cloud}>
        <Container>
          <SectionHeader
            heading="CLOUD"
            headingStyle="adv_head_class_01"
            smallHeading="SERVICES"
            smallHeaderStyle="pub_head_class_02"
            color_img="pub_color_line"
          />
          <RightImgMediaCard
            right_img_media={cloud_services}
            right_img_media_name="advertiser image"
            right_img_media_card_content_class="aff_adv_bg"
            right_img_media_card_content={<Cloud_services_text />}
          />
        </Container>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default ITSolutions;
