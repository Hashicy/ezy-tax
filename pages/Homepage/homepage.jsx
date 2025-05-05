import React from 'react'
import Header from '../common/header'
import Hero from './Hero section/herosection'
import Services from './Services/services'
import WhyChooseUs from './Why choose us/whychooseus'
import Testimonial from './Testimonials/Testimonial'

function Homepage() {
  return (
    <>
   <Header/>
   <Hero/>
   <Services/>
   <WhyChooseUs/>
   <Testimonial/>
   </>
  )
}

export default Homepage