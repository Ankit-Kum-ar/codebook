import React from 'react'
import Hero from './components/Hero'
import FeaturedProduct from './components/FeaturedProduct'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import useTitle from '../../hooks/useTitle'

const HomePage = () => {
  useTitle("Access Latest Computer Science ebooks - CodeBook");
  return (
    <main>
      <Hero/>
      <FeaturedProduct/>
      <Testimonials/>
      <Faq/>
    </main>
  )
}

export default HomePage
