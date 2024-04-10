// import './App.css'
import React from "react";
import LoginAndSignup from "./pages/account/LoginAndSignup";
import Home from "./pages/home/Home";
import SellerDashboard from "./pages/seller_dashboard/SellerDashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/footer/Footer";


function App() {
  
  return (
    <>
      <Router>
        {/* <ScrollToTop/> */}
        <Navbar />
        <div className="min-h-[calc(100vh-50px)]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account/:type" element={<LoginAndSignup />} />
          <Route exact path="/sellerdashboard/" element={<SellerDashboard />} />
        </Routes>
        </div>
      </Router>
      <Footer/>
      <Analytics/>
    </>
  );
}

export default App;
