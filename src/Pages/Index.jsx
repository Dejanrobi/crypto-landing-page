import React from 'react'
import Footer from '../Components/Footer/Footer'
import Layout from '../Components/Layout/Layout'
import BuyAndTradeSection from '../Components/Sections/BuyAndTradeSection'
import CreditCardSection from '../Components/Sections/CreditCardSection'
import CryptoCurrencySection from '../Components/Sections/CryptoCurrencySection'
import HeroSection from '../Components/Sections/HeroSection'
import PartnerSection from '../Components/Sections/PartnerSection'
import TradingToolsSection from '../Components/Sections/TradingToolsSection'
import SecuritySection from '../Components/Sections/SecuritySection';
import StepSection from '../Components/Sections/StepSection'

const Index = () => {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <CryptoCurrencySection/>
        <BuyAndTradeSection/>
        <PartnerSection/>
        <CreditCardSection/>
        <TradingToolsSection/>
        <SecuritySection/>
        <StepSection/>
      </Layout>
    </div>
  )
}

export default Index
