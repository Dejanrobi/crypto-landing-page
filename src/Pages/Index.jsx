import React from 'react'
import Footer from '../Components/Footer/Footer'
import Layout from '../Components/Layout/Layout'
import BuyAndTradeSection from '../Components/Sections/BuyAndTradeSection'
import CryptoCurrencySection from '../Components/Sections/CryptoCurrencySection'
import HeroSection from '../Components/Sections/HeroSection'

const Index = () => {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <CryptoCurrencySection/>
        <BuyAndTradeSection/>
        <Footer/>
      </Layout>
    </div>
  )
}

export default Index
