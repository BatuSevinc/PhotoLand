//Components
import LatestProducts from "../components/LatestProducts.js";
import Hero from "../components/Hero.js";

const Home = ({data}) => {
  return (
    <section>
      <Hero/>
      <LatestProducts/>
    </section>
  );
};

export default Home;
