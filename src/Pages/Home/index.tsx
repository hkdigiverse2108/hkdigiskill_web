import { Fragment } from "react";
import { AboutUsSection, BrandLogo, CategoriesSection, CounterSection, CourseSection, FaqSection, HeroBanner, LatestBlogsSection, TestimonialSection, VideoAreaSection } from "../../Components/Home";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <CategoriesSection />
      <AboutUsSection />
      <CourseSection />
        <VideoAreaSection />
      <CounterSection />
      <TestimonialSection />
      <BrandLogo />
      <FaqSection />
      <LatestBlogsSection />
    </Fragment>
  );
};

export default Home;
