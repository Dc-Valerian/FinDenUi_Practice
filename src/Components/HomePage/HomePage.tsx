import React from 'react'
import Header from '../Header/Header'
import Hero2 from "../../Components/Home2/Hero2"
import Text from '../Home2/Text'
import CardProps from '../Global/CardProps'
import img from "../../Components/Assets/water3-rmbg.png"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Hero2/>
        <Text/>
        <CardProps span='' image={img} p=""/>
    </div>
  )
}

export default HomePage