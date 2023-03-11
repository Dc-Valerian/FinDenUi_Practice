import React from 'react'
import GlobalButton from '../Global/GlobalButton'
import Footer from '../Home/Footer/Footer'
import Hero from '../Home/Hero/Hero'
import Header from '../Header/Header'
import Online from '../Home/Online/Online'
import Chart from '../Home/Chart/Chart'
import Story from '../Home/Story/Story'


const HomeScreen = () => {
  return (
    <div>
      <Header/>
      <br />
        <Hero/>
        <Online/>
        <Chart/>
        <Story/>
        <Footer/>
    </div>
  )
}

export default HomeScreen