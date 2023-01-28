import classNames from 'classnames';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import globalCrypto from "../../Images/Illustrations/globe.png";
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const HeroSection = () => {
  

  return (
    <section className="mt-28 ">
          <div className="grid grid-cols-2">
            <div className='flex items-center'>
              <div>
                <p className="text-primary">SIGN UP TODAY</p>
                <h1 className="text-5xl font-bold leading-normal">The World's </h1>
                <h1 className="text-5xl font-bold leading-normal text-primary">Fastest Growing</h1>
                <h1 className="text-5xl font-bold leading-normal">Crypto Web App</h1>
                <p className="text-gray my-4 mb-8">Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</p>
                <div className="flex">
                  <PrimaryButton className="mr-4">
                    Get Started
                  </PrimaryButton>
                  <SecondaryButton className="flex gap-2 items-center justify-center">
                    Download App
                    <BsChevronDown className="mt-1"/>
                  </SecondaryButton>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
                <img src={globalCrypto} alt="Globe" />
            </div>
          </div>
        </section>
  )
}

export default HeroSection
