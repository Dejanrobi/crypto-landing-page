import React from 'react';
import logo from "../../Images/logo.svg";
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const Navbar
 = () => {
  return (
    <div className="fixed top-0  right-0 px-12 left-0 py-8 flex flex-row justify-between items-center">
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
            <a href="/" className='mx-6 hover:text-primaryHover'>Product</a>
          </nav>
        </div>

      </div>
      
      <div className="flex flex-row">
        <SecondaryButton>
          Login
        </SecondaryButton>
        <PrimaryButton>
          Sign Up
        </PrimaryButton>
      </div>
    </div>
  )
}

export default Navbar;
