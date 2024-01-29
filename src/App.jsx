import StickyBottomNavigation from "./components/StickyBottomNavigation";
import CompanyLogo from "../src/assets/images/companyLogo.png";
import EmblaCarousel from "./components/EmblaCarousel";
import "./assets/css/embla.css";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-400 via-white to-white min-h-screen flex w-full text-white flex-col px-8">
      <div className="flex gap-4 flex-col  py-6">
        <a
          href="/"
          className="bg-transparent text-white w-max"
          rel="noreferrer"
        >
          <img src={CompanyLogo} alt="logo" className=" h-12 " />
        </a>
      </div>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <StickyBottomNavigation />
    </div>
  );
}

export default App;
