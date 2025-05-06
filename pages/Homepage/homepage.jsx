import React from 'react'

import Hero from './Hero section/herosection'
import Services from './Services/services'
import WhyChooseUs from './Why choose us/whychooseus'
import Testimonial from './Testimonials/Testimonial'
import GetStarted from './Getstarted/getstarted'
import Footer from '../common/Footer/footer'
import Header from '../common/header'

function Homepage() {
  return (
    <>
  <Header/>
   <Hero/>
   <Services/>
   <WhyChooseUs/>
   <Testimonial/>
   <GetStarted/>
   <Footer/>
   </>
  )
}

export default Homepage