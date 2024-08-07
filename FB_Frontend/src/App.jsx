// import './App.css'
import React from "react";
import LoginAndSignup from "./pages/account/LoginAndSignup";
import Home from "./pages/home/Home";
import SellerDashboard from "./pages/seller_dashboard/SellerDashboard"
import SellerProductOperation from './pages/seller_product_operation/SellerProductOperation'

import Product from "./pages/products/Product";
import ProductDashboard from "./pages/product_details/ProductDashboard";

import Order from "./pages/orders/Order";
import LeafletMap from "./components/map/LeafletMap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/footer/Footer";

import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
      <Router>
        {/* <ScrollToTop/> */}
        <Navbar />
        <ToastContainer theme="dark"/>
        <div className="min-h-[calc(100vh-50px)]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account/:type" element={<LoginAndSignup />} />
          <Route exact path="/sellerdashboard/" element={<SellerDashboard />} />
          <Route exact path="/sellerdashboard/product/:operation" element={<SellerProductOperation/>} />
          <Route exact path="/category/:type" element={<Product/>} />
          <Route exact path="/category/:type/details" element={<ProductDashboard/>} />
          <Route exact path="/orders" element={<Order/>} />
          <Route exact path="/map" element={<LeafletMap/>} />
        </Routes>
        </div>
      </Router>
      <Footer/>
      <Analytics/>
    </>
  );
}

export default App;
