 import React from 'react';
 import emoji from "react-easy-emoji";
 import {BsChevronRight, BsPlus, BsMin} from "react-icons/bs";
 import {coinBitcoin} from "../../Images/"
 const CryptoCurrencySection = () => {
   return (
     <section className='mt-10'>
        <div className="container mx-auto p-8 rounded-3xl bg-white shadow-md">
          <div className="grid grid-cols-3 gap-3 rounded-3xl">
            <div className='p-4 shadow-md'>
              <div className="flex justify-between">
                <span className='font-bold text-lg'>🔥 Trending</span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
              <div>
                <div className="grid grid-cols-3">
                  <div className="text-gray">Name</div>
                  <div className="text-gray">Price</div>
                  <div className="text-gray">Chart</div>
                </div>
                <div className="grid grid-cols-3 mb-4">
                  <div>
                    {/* <img src={coinBitcoin} alt="" className='inline w-4' /> */}
                    Bitcoin
                  </div>
                  <div className='flex items-center'>
                    <BsPlus className='text-green inline mr-2'/>
                    $43,180.13
                  </div>


                </div>
              </div>
            </div>
            <div className='p-4 shadow-md-left'>
              <div className="flex justify-between">
                <span className='font-bold text-lg'>🚀  Top Gainers</span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
            </div>
            <div className='p-4 shadow-md-left'>
              <div className="flex justify-between">
                <span className='font-bold text-lg'>💎  Recently Added</span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
            </div>
            
            
          </div>
        </div>
     </section>
   )
 }
 
 export default CryptoCurrencySection
 