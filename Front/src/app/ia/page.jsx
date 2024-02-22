import HeroMark from "../components/HeroMark";
import CardIa from "../components/CardIa";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Ia() {
  return (
    <div>
      <HeroMark />
      <div className="flex flex-col  justify-center items-center">
        <CardIa />
      </div>
      <Divider />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Ia;
