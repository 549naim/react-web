import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../pages/Homepage'
import Aboutpage from '../pages/Aboutpage'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Services from '../pages/Services'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Aboutpage" element={<Aboutpage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;