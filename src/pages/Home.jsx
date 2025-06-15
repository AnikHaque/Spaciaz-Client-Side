import Hero from "../components/Hero/Hero";
import PopularCategories from "../components/Categories/PopularCategories";
import AppPromo from "../components/AppPromo/AppPromo";
import Youtube from "../components/Youtube/Youtube";
import ServiceCards from "../components/Tasks/Featured";
import ReviewsCarousel from "../components/Tasks/ReviewsCarousel";
import Provide from "../components/Provide/Provide";
import Services from "../components/Services/Services";
import Stat from "../components/Stat/Stat";

const Home = () => {
  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <Hero />
      <Provide></Provide>
      <Services></Services>
      <Stat></Stat>
      <ServiceCards />
      <Youtube></Youtube>
      <AppPromo />
      <ReviewsCarousel></ReviewsCarousel>
    </div>
  );
};

export default Home;
