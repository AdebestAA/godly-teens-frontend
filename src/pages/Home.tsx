import React from "react";
import Hero from "../components/Hero";
import ScriptureRibbon from "../components/ScriptureRibbon";
import About from "../components/About";
import Programs from "../components/Programs";
import Events from "../components/Events";
import Scripture from "../components/Scripture";
import Media from "../components/Media";
import Testimonies from "../components/Testimonies";

import Involved from "../components/Involved";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ScriptureRibbon />
      <About />
      <Programs />
      <Events />
      <Scripture />
      <Media />
      <Testimonies />
      {/* <Donate /> */}
      <Involved />
      <Contact />
    </div>
  );
};

export default Home;
