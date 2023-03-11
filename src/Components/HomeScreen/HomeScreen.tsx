import React from 'react'
import GlobalButton from '../Global/GlobalButton'
import Footer from '../Home/Footer/Footer'
import Hero from '../Home/Hero/Hero'
import Header from '../Header/Header'
import Online from '../Home/Online/Online'


const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <br />
        <Hero/>
        <Online/>
        <Footer/>
    </div>
  )
}

export default HomeScreen