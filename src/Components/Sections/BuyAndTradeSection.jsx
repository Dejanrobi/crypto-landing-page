import React from 'react';
import buyImg from "../../Images/Illustrations/buy.png";
import PrimaryButton from '../Buttons/PrimaryButton';
import btc from "../../Images/Cryptocurrencies/bitcoin.png";
import usd from "../../Images/Cryptocurrencies/usd.svg";
import { BsChevronDown } from 'react-icons/bs';

const BuyAndTradeSection = () => {
  return (
    <div className="container mx-auto h-screen py-24 flex items-center">
        <div className="flex flex-row justify-between items-center">
            <div className='px-10'>
                <h2 className="font-bold text-3xl mb-6">Buy & trade on the <br/> original crypto exchange.</h2>
                <p className='text-gray text-sm mb-8'>Buy now and get 40% extra bonus Minimum pre-sale amount 25 <br/> Crypto Coin. We accept BTC crypto-currency</p>
                
                <div className="flex justify-between gap-3 mb-6">
                    <div className="border border-primary rounded-2xl py-4 px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-6">
                            <span className='text-primary text-sm'>Amount</span>
                        </div>   
                        <input type="text" className=' text-right outline-none text-lg' placeholder='50000' />
                    </div>
                    <div className=" flex justify-center items-center gap-2 border border-primary text-lg rounded-2xl py-4 px-8">
                        
                        <img src={usd} alt="" className='inline-block'/>
                        <span className='mr-2'>
                            USD
                        </span>  
                        <span className=''>
                            <BsChevronDown className="cursor-pointer"/>    
                        </span> 
                                 
                        
                    </div> 
                </div>
                <div className="flex justify-between gap-3 mb-6">
                    <div className="border border-primary rounded-2xl py-4 px-6 flex items-center w-full">
                        <div className="border-r border-primary pr-6">
                            <span className='text-primary text-sm'>Get</span>
                        </div>   
                        <input type="text" className=' text-right outline-none text-lg' placeholder='0.000000' />
                    </div>
                    <div className=" flex justify-center items-center gap-2 border border-primary text-lg rounded-2xl py-4 px-8">
                        
                        <img src={btc} alt="" className='inline-block'/>
                        <span className='mr-2'>
                            BTC
                        </span>  
                        <span className=''>
                            <BsChevronDown className="cursor-pointer"/>    
                        </span> 
                                 
                        
                    </div> 
                </div>
                <PrimaryButton className="w-full flex items-center justify-center">
                    Buy Now
                </PrimaryButton>
            
            </div>
            <div>
                <img src={buyImg} className=" ml-20" alt="Buy Image" />
            </div>

        </div>

    </div>
  )
}

export default BuyAndTradeSection
