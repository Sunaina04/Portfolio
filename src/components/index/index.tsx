import React from "react";
import Hero from "../hero/hero";
import Work from "../work/work";
import Services from "../services/services";
import Process from "../process/process";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import { useReveal } from "../../hooks/useReveal";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Index = () => {
  useReveal();
  useDocumentTitle();

  return (
    <main id="main">
      <Hero />
      <Services />
      <Work />
      <Process />
      <Experience />
      <Skills />
    </main>
  );
};

export default Index;
