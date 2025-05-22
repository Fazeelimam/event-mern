import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import Navbar from './Components/Navbar';
import ContactSection from './Components/Contact.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceSection from './Components/Services.jsx';
import Home from './Components/Home.jsx';
import FooterSection from './Components/Footer.jsx';
import AboutSection from './Components/About.jsx';
import Auth from './Components/Auth.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<Auth />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/footer" element={<FooterSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Route>
        </Routes>

        {/* Toast notifications */}
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}
