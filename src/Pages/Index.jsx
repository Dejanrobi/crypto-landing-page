import React from 'react'
import Layout from '../Components/Layout/Layout'
import CryptoCurrencySection from '../Components/Sections/CryptoCurrencySection'
import HeroSection from '../Components/Sections/HeroSection'

const Index = () => {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <CryptoCurrencySection/>
      </Layout>
    </div>
  )
}

export default Index
