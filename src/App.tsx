import React from "react";
import { Route, Routes } from "react-router";
import Index from "./components/index";
import { BrowserRouter } from "react-router-dom";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Education from "./components/education/education";
import About from "./components/about/about";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";
import ContactForm from "./components/contactForm/contactForm";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
          <ContactForm/>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
