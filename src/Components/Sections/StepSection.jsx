import React from 'react'
import tradingTools from "../../Images/Illustrations/tradingtools.png";
import signupImage from "../../Images/Illustrations/signup.png";
import walletImage from "../../Images/Illustrations/wallet.png";
import okayImage from "../../Images/Illustrations/okay.png";
import SecondaryButton from '../Buttons/SecondaryButton';

const StepSection = () => {
  return (
    <div className="px-6 ">
        <div className='rounded-3xl px-10 bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
            <div className="container mx-auto text-center">
                <h2 className="font-bold text-3xl mb-16">Get started in just a few minutes</h2>
                <div className="flex align-middle justify-center gap-8">
                    <div className='text-center flex flex-col justify-center align-middle '>
                        <div className="w-full flex  items-center justify-center">
                            <img src={signupImage} className="mb-4 w-40 h-40 " alt="" />

                        </div>
                        
                        <h3 className="text-xl font-bold">Sign Up</h3>
                        <p className="text-gray text-sm mt-2">
                            Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends
                        </p>
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img src={walletImage} className="mb-4 w-48 h-40" alt="" />
                        <h3 className="text-xl font-bold">Fund</h3>
                        <p className="text-gray text-sm mt-2">
                            Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                        </p>
                    </div>
                    <div className='text-center flex flex-col justify-center items-center'>
                        <img src={okayImage} className="mb-4 w-40 h-40" alt="" />
                        <h3 className="text-xl font-bold">Buy Crypto</h3>
                        <p className="text-gray text-sm mt-2">
                            Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default StepSection;
