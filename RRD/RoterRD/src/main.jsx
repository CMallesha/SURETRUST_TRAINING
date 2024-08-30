import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "index.css";
import Navbar from "componets/Navbar.jsx";
import Home from "components/Home.jsx";
import Footer from "components/Footer.jsx";
import Contact from "components/Contact.jsx";
import About from "components/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </StrictMode>
);