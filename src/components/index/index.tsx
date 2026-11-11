import React from "react";
import Hero from "../hero/hero";
import Work from "../work/work";
import About from "../about/about";
import Services from "../services/services";
import Process from "../process/process";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import Education from "../education/education";
import { useReveal } from "../../hooks/useReveal";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Index = () => {
  useReveal();
  useDocumentTitle();

  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Work />
      <Process />
      <Experience />
      <Skills />
      <Education />
    </main>
  );
};

export default Index;
