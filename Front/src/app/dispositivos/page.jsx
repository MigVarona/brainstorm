import HeroMark from "../components/HeroMark";
import CardDispositivos from "../components/CardDispositivos";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Dispositivos() {
  return (
    <div>
      <HeroMark />
      <div className="flex flex-col  justify-center items-center">
        <CardDispositivos />
      </div>
      <Divider />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Dispositivos;
