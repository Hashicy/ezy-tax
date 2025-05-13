import React from 'react'

import Hero from './Hero section/herosection'
import Services from './Services/services'
import WhyChooseUs from './Why choose us/whychooseus'
import Testimonial from './Testimonials/Testimonial'
import GetStarted from './Getstarted/getstarted'


function Homepage() {
  return (
    <>
   <Hero/>
   <Services/>
   <WhyChooseUs/>
   <Testimonial/>
   <GetStarted/>
   </>
  )
}

export default Homepage