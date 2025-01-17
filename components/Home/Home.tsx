import React from 'react'
import Hero from './Hero/Hero'
import RecentImage from './RecentImage/RecentImage'
import About from './About/About'
import Price from './Price/Price'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <RecentImage />
        <About />
        <Price />
    </div>
  )
}

export default Home