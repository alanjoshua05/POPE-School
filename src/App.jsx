import React from "react";
import Navbar from "./Items/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Items/Footer";
import Achivement from "./Pages/Achivement";
import Academics from "./Pages/Academics";
import Activities from "./Pages/Activities";
import Infrastructure from "./Pages/Infrastructure";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Family from "./Pages/Family";
import Founder from "./Pages/Founder";
import Vision from "./Pages/Vision";
import Rules from "./Pages/Rules";
import Members from "./Pages/Diocice";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievement" element={<Achivement />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/staff" element={<Family />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/diocese" element={<Members />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}