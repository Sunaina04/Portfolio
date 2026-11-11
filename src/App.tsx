import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Index from "./components/index";
import CaseStudy from "./components/caseStudy/caseStudy";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";
import ContactForm from "./components/contactForm/contactForm";

// Start each route at the top, or at the #section named in the URL.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Wait a frame so the mobile menu can release its scroll lock first.
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/Portfolio">
        <ScrollManager />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div id="top" />
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          {/* Former standalone pages, now sections of the home page */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/projects" element={<Navigate to="/#work" replace />} />
          <Route path="/education" element={<Navigate to="/#education" replace />} />
          <Route path="/skills" element={<Navigate to="/#skills" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ContactForm />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
