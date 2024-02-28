import AboutUs from "./HomeComponents/AboutUs";
import Gallery from "./HomeComponents/Gallery";
import Hero from "./HomeComponents/Hero";
import OurPartner from "./HomeComponents/OurPartner";
import OurTeam from "./HomeComponents/OurTeam";
import SupplyPosts from "./HomeComponents/SupplyPosts";
import Testimonials from "./HomeComponents/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <SupplyPosts />
      <Testimonials />
      <Gallery />
      <AboutUs />
      <OurTeam />
      <OurPartner />
    </div>
  );
};

export default Home;
