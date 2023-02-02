import React from 'react';
import logo from "../../Images/logo.svg";
import {BsArrowRight} from "react-icons/bs"
import SecondaryButton from '../Buttons/SecondaryButton';
import PrimaryButton from '../Buttons/PrimaryButton';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container mt-10 mx-auto border-b mb-6 border-t border-lightgray">
        <div className="grid grid-cols-5 text-sm">
          <div className="pt-12">
            <img src={logo} alt="Logo" />           
          </div>
          <div className='border-l border-lightgray pt-12 pb-12 flex items-center justify-center'>
            <ul>
              <li className="mb-4">
                <a href="/" className='text-gray'>Buy Crypto</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Exchanges</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Watchlist</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Portfolio</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>NFT</a>
              </li>
              
            </ul>
          </div>
          <div className='border-l border-lightgray pt-12 pb-12 flex items-center justify-center'>
            <ul>
              <li className="mb-4">
                <a href="/" className='text-gray'>Products</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Abous Us</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Careers</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Blog</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Security</a>
              </li>
              
            </ul>
          </div>
          <div className='border-l border-lightgray pt-12 pb-12 flex items-center justify-center'>
            <ul>
              <li className="mb-4">
                <a href="/" className='text-gray'>Help Center</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Contact Us</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>System Status</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Area of Avaibility</a>
              </li>
              <li className="mb-4">
                <a href="/" className='text-gray'>Privacy Policy</a>
              </li>
              
            </ul>
          </div>
          <div className='border-l border-lightgray pt-12 pb-12 '>
            <ul className='pl-6 pr-4'>
              <li className="mb-4">
                <a href="/" className='text-gray'>Newsletter</a>
              </li>
              <p className='mb-4 text-xs text-gray'>Never miss anything crypto when you're on the go</p>

              <div className=' flex justify-between gap-1'>
                <input type="text" className=' border-lightgray border outline-none rounded-md text-xs py-3 px-3' placeholder='Enter your email'/>
                <button className='flex items-center justify-center text-white text-lg  bg-primary hover:bg-primaryHover px-3 rounded-md'>
                  <BsArrowRight className='h-10' />
                  
                </button>
                
              </div>
              
              
              
            </ul>
          </div>
          
        </div>
      </div>
      <div className="text-center ">
        <p className="text-gray text-sm mb-5">
          © Copyright 2022 NEFA LLC. All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
