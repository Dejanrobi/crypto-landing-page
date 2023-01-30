import React from 'react'

import upChart from "../../Images/Charts/up.svg";
import downChart from "../../Images/Charts/down.svg";

import {BsChevronRight, BsPlus} from "react-icons/bs";
import {BiMinus} from "react-icons/bi"
const CoinsListed = ({coinIcon, coinName, coinUpTrend, price}) => {
  return (
                <div className="grid grid-cols-3 text-sm border-solid border-b-[1px] border-slate-200">
                  <div className="flex items-center">
                    <img src={coinIcon} alt="" className='inline w-4 mr-2' />
                    {coinName}
                  </div>
                  <div className='flex items-center'>
                    {
                        coinUpTrend ?
                        <BsPlus className='text-green inline mr-1'/>:
                        <BiMinus className='text-red inline mr-1'/>
                    }
                    
                    {price}
                  </div>
                  <div>
                    {
                        coinUpTrend?
                        <img className='h-16 w-24' src={upChart} alt="Up Chart" />:
                        <img className='h-16 w-24' src={downChart} alt="Down Chart" />

                    }
                    
                  </div>


                </div>
  )
}

export default CoinsListed
