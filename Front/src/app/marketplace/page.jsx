
import HeroMark from "../components/HeroMark"
import Card from "../components/Card"
import Divider from "../components/Divider"
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";


function Productos() {
    return ( 

        <div>
          <HeroMark />
          <div className="flex flex-col  justify-center items-center">
          <Card />
       
          
        
          </div>
          <Divider />
          <Gallery />
          <Footer />
        </div>
     );
}

export default Productos;