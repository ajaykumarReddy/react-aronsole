import { useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import HomePage from "./Pages/Home";
import AboutusPage from "./Pages/Aboutus";
import NavBar from "./Components/NavBar/NavBar";
import AffiliateMarketing from "./Pages/Services/AffiliateMarketing.js";
import BlogPage from "./Pages/Blog";
import "./App.css";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import ITSolutions from "./Pages/Services/ITSolutions";
import Blog from "./Pages/Blog/Blog";
import { Helmet } from "react-helmet";
import { BlogsContent } from "./Components/BlogsPageContent.js";

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  const homePageScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const aboutPageScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const blogPageScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Router>
        <NavBar
          executeScroll={executeScroll}
          homePageScrollTop={homePageScrollTop}
          aboutPageScrollTop={aboutPageScrollTop}
          blogPageScrollTop={blogPageScrollTop}
        />
        <Helmet>
          <title>
            Affiliate / Digital / Inbound Marketing &#38; IT Services in India
          </title>
          <meta
            name="description"
            content="We offer Affiliate &#38; digital marketing &#38; IT services in Hyderabad with SEO, social media, paid media and content marketing to increase your overall business."
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
            content="Affiliate / Digital / Inbound Marketing &#38; IT Services in India"
            name="site"
          />
          <meta
            content="Affiliate / Digital / Inbound Marketing &#38; IT Services in India"
            name="page-topic"
          />
          <link rel="icon" type="image/image" href="favicon.ico"></link>
          <link rel="canonical" href="https://aronsol.com" />
        </Helmet>
        <Routes>
          <Route path="/" element={<HomePage myRef={myRef} />} />
          <Route path="/about" element={<AboutusPage myRef={myRef} />} />
          <Route
            path="/affiliate-marketing"
            element={<AffiliateMarketing myRef={myRef} />}
          />
          <Route
            path="/digital-marketing"
            element={<DigitalMarketing myRef={myRef} />}
          />
          <Route path="/it-solutions" element={<ITSolutions myRef={myRef} />} />
          <Route path="/blog" element={<BlogPage myRef={myRef} />} />

          {/* <Route path={"/blog-page/:id"} element={<Blog myRef={myRef} />} /> */}
          <Route
            path={`'/blog-page/'${BlogsContent.slug}`}
            element={<Blog myRef={myRef} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
