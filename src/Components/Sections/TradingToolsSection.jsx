import React from 'react'
import tradingTools from "../../Images/Illustrations/tradingtools.png";
import SecondaryButton from '../Buttons/SecondaryButton';

const TradingToolsSection = () => {
  return (
    <div className="px-6 ">
        <div className='rounded-3xl px-10 bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2">
                    <div className='max-w-lg'>
                        <h2 className="font-bold text-3xl mb-6">Advanced Trading<span className='leading-normal text-primary'> Tools</span></h2>
                        <div className="mb-6">
                            <h3 className='font-bold text-xl mb-4'>Professional Access, Non-stop Availability</h3>
                            <p className='text-gray text-sm'>We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</p>
                        </div>      
                        <div className="mb-6">
                            <h3 className='font-bold text-xl mb-4'>A Range of Powerful Apis</h3>
                            <p className='text-gray text-sm'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
                        </div>      
                        <div className="mb-6">
                            <h3 className='font-bold text-xl mb-4'>Customer Support</h3>
                            <p className='text-gray text-sm'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                        </div> 

                        <SecondaryButton>
                            Get Started
                        </SecondaryButton>  
                        <a href="">
                            <button className='py-4 px-10 text-primary underline hover:text-primaryHover'> 
                                Learn More                              
                            </button>   

                        </a>
                        
                    </div>
                    <img src={tradingTools} alt="Trading Tools" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default TradingToolsSection
