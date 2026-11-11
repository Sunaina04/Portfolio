import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Index from "./components/index";
import { BrowserRouter, Navigate } from "react-router-dom";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";
import ContactForm from "./components/contactForm/contactForm";

// Start each route at the top, or at the #section named in the URL.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Portfolio">
        <ScrollManager />
        <Header />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          {/* Former standalone pages, now sections */}
          <Route path="/education" element={<Navigate to="/about#education" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
          <Route path="*" element={<Index />}></Route>
        </Routes>
        <ContactForm />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
