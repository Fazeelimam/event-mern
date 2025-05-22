import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import ServiceSection from './Services.jsx'
import AboutSection from './About.jsx'
import ContactSection from './Contact.jsx'
import FooterSection from './Footer.jsx'

export default function Home() {
  return (
    <>
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
          <Link to="contact" spy="true" smooth="true" duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
    <ServiceSection/>
    <AboutSection/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}
