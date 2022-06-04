import React, { useEffect, useRef } from "react";
import PageBanner from "../../Components/PageBanner/PageBanner";
import Digital_marketing from "../../assets/Digitalmarketing_1.png";
import Digital_marketing_icon from "../../assets/icon3.png";
import seo_img from "../../assets/seo_img.png";
import digital_mar_img from "../../assets/digital_mar_img.png";
import content_marketing from "../../assets/content_marketing.png";
import sm_marketing from "../../assets/sm_marketing.png";
import seo_image from "../../assets/seo.png";
import cm from "../../assets/cm.png";
import smm from "../../assets/smm.png";
import "./style.css";
import { Container } from "react-bootstrap";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import LeftImgMediaCard from "../../Components/MediaCard/LeftImgMediaCard";
import RightImgMediaCard from "../../Components/MediaCard/RightImgMediaCard";
import Contact from "../../Components/Contact/Contact";
import Helmet from "react-helmet";

function DigitalMarketing(props) {
  const myRef_seo = useRef(null);
  const myRef_contentMarketing = useRef(null);
  const myRef_smMarketing = useRef(null);
  const seo = () => myRef_seo.current.scrollIntoView();
  const contentMarketing = () =>
    myRef_contentMarketing.current.scrollIntoView();
  const smMarketing = () => myRef_smMarketing.current.scrollIntoView();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function Engine_optimisation_text() {
    return (
      <>
        Are you worried about losing your customers to competitors? Isn't your
        website generating sufficient leads? Okay, then let's first have a deep
        understanding of the primary reasons about how your competitors are on
        the success path. Well, they might be implementing powerful SEO and SEM
        strategies that would have eventually resulted in improved ranking and
        increased search traffic. Our SEO/SEM experts with vast knowledge and
        experience are intended to work for your business. We can optimize your
        website in such a way that it appears on the Google search when the
        users search with certain keywords. Only present-day strategies,
        in-depth knowledge, and powerful SEO &#38; SEM tactics can make you
        reach your targeted customers in a short time. We are here to serve you
        with all the above-said requirements. Believe us! We will do it for you!
      </>
    );
  }

  function Content_marketing_text() {
    return (
      <>
        Aronsol runs with an efficient team of content creators and copywriters
        who are highly dedicated and result-oriented. We do content marketing
        through blogs, articles, videos, and other forms of media to attract the
        targeted audience. This approach is quite essential to promote your
        brand awareness. It can also keep your business at the top. These days
        it is a proven fact that business websites with creative blogs are more
        likely to get more leads than other company's websites. Our experienced
        content marketers and copywriters are well-versed in creating texts,
        articles, videos, blogs, and images containing valuable information to
        meet specific objectives, attract web traffic and clients. We also
        create social media posts, emails, white papers, and newsletters for our
        clients. If you need to promote your brand through content marketing and
        copywriting, reach us soon!
      </>
    );
  }

  function SocialMedia_marketing_text() {
    return (
      <>
        Aronsol is now super ready to do social media marketing for you. Yes,
        you heard us right! Whichever business you are in, we will highlight
        your brand to your customers. We will take you close to them. Our team
        is efficient in handling brand promotion via LinkedIn, Twitter,
        Facebook, and Instagram. We use data analytic tools to track your
        success reach. Our experts are well-trained in using social media and
        social networks to promote your business products and services. We will
        help you reach your right audience with the correct information at the
        right time. Opting us for your brand promotion will be a great choice
        that we will not let you regret on it. Trust us! We follow a unique way
        of promoting your brands. Get in touch with us if you need brand
        promotion for your business on social media.
      </>
    );
  }

  return (
    <div className="service_page_sec page_bg_image">
      <Helmet>
        <title>
          Digital Marketing Company In Hyderabad | Top Digital Marketing Agency
        </title>
        <meta
          name="description"
          content="We provide you with all the 360° Digital marketing solutions to help in growth of your business online by all the different strategies which are required."
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
          content="Digital Marketing Company In Hyderabad | Top Digital Marketing Agency"
          name="site"
        />
        <meta
          content="Digital Marketing Company In Hyderabad | Top Digital Marketing Agency"
          name="page-topic"
        />
        <link rel="canonical" href="https://aronsol.com/digital-marketing" />
      </Helmet>
      <div className="service_page_banner position-relative">
        <PageBanner
          pageBanner_img={Digital_marketing}
          pageBanner_img_text="digital marketing image"
          pageBanner_bold_heading="Digi-Tech"
          pageBanner_normal_heading="Services For Your Business!"
          pageTitleBox_icon={Digital_marketing_icon}
          pageTitleBox_icon_text="DigitalMarketing_icon"
          pageTitleBox_heading="DIGITAL MARKETING"
        />
      </div>
      <div className="service_page_image_sec">
        <Container>
          <div className="service_page_image_inner_sec position-relative">
            <img src={digital_mar_img} className="center_img d-block m-auto" />
            <img src={seo_img} className="it_img digi_img1" onClick={seo} />
            <img
              src={content_marketing}
              className="it_img digi_img2"
              onClick={contentMarketing}
            />
            <img
              src={sm_marketing}
              className="it_img digi_img3"
              onClick={smMarketing}
            />
          </div>
        </Container>
      </div>
      <div className="publishers_sec" ref={myRef_seo}>
        <Container>
          <SectionHeader
            heading="SEO/ SEM"
            headingStyle="pub_head_class_01"
            smallHeading="SEARCH ENGINE OPTIMIZATION/ MARKETING"
            smallHeaderStyle="pub_head_class_02"
          />
          <LeftImgMediaCard
            left_img_media={seo_image}
            left_img_media_name="publisher image"
            left_img_media_card_content_class="aff_pub_bg"
            left_img_media_card_content={<Engine_optimisation_text />}
          />
        </Container>
      </div>
      <div className="advertiser_sec" ref={myRef_contentMarketing}>
        <Container>
          <SectionHeader
            heading="copywriting and"
            headingStyle="adv_head_class_01"
            smallHeading="content marketing"
            smallHeaderStyle="pub_head_class_02"
            color_img="pub_color_line"
          />
          <RightImgMediaCard
            right_img_media={cm}
            right_img_media_name="advertiser image"
            right_img_media_card_content_class="aff_adv_bg"
            right_img_media_card_content={<Content_marketing_text />}
          />
        </Container>
      </div>
      <div className="socialMedia_sec" ref={myRef_smMarketing}>
        <Container>
          <SectionHeader
            heading="SMM"
            headingStyle="pub_head_class_01"
            smallHeading="SOCIAL MEDIA MARKETING"
            smallHeaderStyle="pub_head_class_02"
          />
          <LeftImgMediaCard
            left_img_media={smm}
            left_img_media_name="publisher image"
            left_img_media_card_content_class="aff_pub_bg"
            left_img_media_card_content={<SocialMedia_marketing_text />}
          />
        </Container>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default DigitalMarketing;
