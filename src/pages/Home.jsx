import Header from "../components/Header";
import Hero from "../components/Hero";
import ShortFeature from "../components/ShortFeature";
import About from "../components/About";
import JoinCta from "../components/JoinCta.jsx";
import Slidingtext from "../components/Slidingtext";
import Testimonial from "../components/Testimonial";
import CaseStudy from "../components/CaseStudy";
import Personnel from "../components/Personnel";
import AwardAchivments from "../components/AwardAchivments";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main className="w-full max-w-[1920px] h-auto mx-auto bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <ShortFeature />
      <About />
      <JoinCta />
      <Slidingtext />
      <Testimonial />
      <CaseStudy />
      <Personnel />
      <AwardAchivments />
      <Contact />
    </main>
  );
};

export default Home;
