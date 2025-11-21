import React, { Fragment } from "react";
import HeroBanner from "./HeroBanner";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Course from "./Course";
import VideoArea from "./VideoArea";
import Counter from "./Counter";
import Testimonial from "./Testimonials";
import BrandLogo from "./BrandLogo";
import Faq from "./Faq";
import LatestArticles from "./LatestArticles";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Categories />
      <AboutUs />
      <Course />
      <VideoArea />
      <Counter />
      <Testimonial />
      <BrandLogo />
      <Faq />
      <LatestArticles />
    </Fragment>
  );
};

export default Home;
