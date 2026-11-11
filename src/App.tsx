import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Index from "./components/index";
import CaseStudy from "./components/caseStudy/caseStudy";
import Header from "./components/header/header";
import { ThemeProvider } from "./context/ThemeContext";
import ContactForm from "./components/contactForm/contactForm";

// Start each route at the top, or at the #section named in the URL.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const lastPath = useRef(pathname);

  // New page: set the scroll position before paint, so a page transition
  // captures the new page already in place rather than jumping afterwards.
  useLayoutEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  // Same page, new #section: wait a frame so the mobile menu can release its
  // scroll lock first, then scroll (smoothly, via CSS).
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return null;
};

// Shared frame around every page: header, page content, contact footer.
const Layout = () => (
  <>
    <ScrollManager />
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <div id="top" />
    <Header />
    <Outlet />
    <ContactForm />
  </>
);

// A data router (rather than <BrowserRouter>) is what enables View
// Transitions between pages; see components/pageLink.
const createRouter = () =>
  createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Index /> },
          { path: "/work/:slug", element: <CaseStudy /> },
          // Former standalone pages, now sections of the home page
          { path: "/about", element: <Navigate to="/" replace /> },
          { path: "/projects", element: <Navigate to="/#work" replace /> },
          { path: "/education", element: <Navigate to="/#experience" replace /> },
          { path: "/skills", element: <Navigate to="/#skills" replace /> },
          { path: "*", element: <Navigate to="/" replace /> },
        ],
      },
    ]
  );

function App() {
  // Created on mount so it reads the URL at that moment.
  const [router] = useState(createRouter);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
