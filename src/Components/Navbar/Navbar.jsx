import React from 'react';
import logo from "../../Images/logo.svg";
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import {BsChevronDown} from 'react-icons/bs'
const Navbar
 = () => {
  return (
    <nav >
      <div className="fixed top-0 bg-white right-0 px-12 left-0 py-4 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          {/* Logo */}
          <div className='flex mr-6'>
            <img src={logo} alt="Neva" />           
          </div>

          {/* Navigation */}
          <div>
            <nav className='flex flex-row'>
              <a href="/" className='mx-6 hover:text-primaryHover'>Exchanges</a>
              <a href="/" className='mx-6 hover:text-primaryHover'>Cryptocurrency</a>
              <a href="/" className='mx-6 hover:text-primaryHover'>Watchlist</a>
              <a href="/" className='mx-6 hover:text-primaryHover'>NFT</a>
              <a href="/" className='mx-6 hover:text-primaryHover'>Portfolios</a>
              <a href="/" className='mx-6 hover:text-primaryHover flex items-center gap-2'>
                Product
                <BsChevronDown className/>
              </a>
            </nav>
          </div>

        </div>
        
        <div className="flex flex-row">
          <SecondaryButton className="mr-4">
            Login
          </SecondaryButton> 
          <PrimaryButton>
            Sign Up
          </PrimaryButton>
        </div>
      </div>

    </nav>
    
  )
}

export default Navbar;
