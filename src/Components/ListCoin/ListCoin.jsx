import React from 'react';
import {BsChevronRight, BsPlus, BsMin, BsChevronDown} from "react-icons/bs";
import {HiChevronDown} from "react-icons/hi";
import coinBitcoin from "../../Images/Cryptocurrencies/bitcoin.png";
import bitcoinasia from "../../Images/Cryptocurrencies/bitcoinasia.png";
import doge from "../../Images/Cryptocurrencies/doge.png";
import etherium from "../../Images/Cryptocurrencies/etherium.png";
import frog from "../../Images/Cryptocurrencies/frog.png";
import metacraft from "../../Images/Cryptocurrencies/metacraft.png";
import moonrock from "../../Images/Cryptocurrencies/moonrock.png";
import muskdoge from "../../Images/Cryptocurrencies/muskdoge.png";
import ninjafloki from "../../Images/Cryptocurrencies/ninjafloki.png";
import pappay from "../../Images/Cryptocurrencies/pappay.png";
import solana from "../../Images/Cryptocurrencies/solana.png";
import twoshare from "../../Images/Cryptocurrencies/2share.png";



import CoinsListed from '../CoinsListed/CoinsListed';

const trendingCoins = [
    {
        coinIcon: coinBitcoin,
        coinName: "Bitcoin",
        coinUpTrend: true,
        price: "$43,180.13"
    },
    {
        coinIcon: etherium,
        coinName: "Etherium",
        coinUpTrend: false,
        price: "$3,480.65"
    },
    {
        coinIcon: solana,
        coinName: "Solana",
        coinUpTrend: true,
        price: "$150,20"
    },
    {
        coinIcon: doge,
        coinName: "Dogecoin",
        coinUpTrend: true,
        price: "$0,1572"
    },
]

const topGainers = [
    {
        coinIcon: pappay,
        coinName: "PAPPAY",
        coinUpTrend: true,
        price: "$0.00374"
    },
    {
        coinIcon: bitcoinasia,
        coinName: "Bitcoin Asia",
        coinUpTrend: true,
        price: "$0.02096"
    },
    {
        coinIcon: moonrock,
        coinName: "MoonRock",
        coinUpTrend: true,
        price: "$0.004907"
    },
    {
        coinIcon: ninjafloki,
        coinName: "NinjaFloki",
        coinUpTrend: true,
        price: "$0.000123"
    },
]

const recentlyAdded = [
    {
        coinIcon: metacraft,
        coinName: "Metacraft",
        coinUpTrend: false,
        price: "$0.0608"
    },
    {
        coinIcon: frog,
        coinName: "Frog",
        coinUpTrend: false,
        price: "$0.5875"
    },
    {
        coinIcon: muskdoge,
        coinName: "Musk Doge",
        coinUpTrend: true,
        price: "$0.04041"
    },
    {
        coinIcon: twoshare,
        coinName: "2SHARE",
        coinUpTrend: true,
        price: "$1,366.24"
    },
]

const ListCoin = ({title}) => {

  return (
        <div className="grid grid-cols-3 gap-3 rounded-3xl"> 
            <div className='p-2'>
              <div className="flex justify-between">
                <span className='font-bold text-lg'>🔥 Trending</span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
              <div>
                <div className="grid grid-cols-3 mt-8 mb-2 text-sm">
                  <div className="text-gray">Name</div>
                  <div className="text-gray">Price</div>
                  <div className="text-gray">Chart</div>
                </div>
                {
                    trendingCoins.map((trending, index)=>(
                        <CoinsListed  key={index} coinIcon={trending.coinIcon} coinName={trending.coinName} coinUpTrend={trending.coinUpTrend} price={trending.price}/>
                    ))
                }
              </div>
            </div>

            <div className='p-2'>
              <div className="flex justify-between">
                <span className='font-bold text-lg cursor-pointer'>🚀 Top Gainers <HiChevronDown className="inline-block ml-1 h-6 w-6"/> </span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
              <div>
                <div className="grid grid-cols-3 mt-8 mb-2 text-sm">
                  <div className="text-gray">Name</div>
                  <div className="text-gray">Price</div>
                  <div className="text-gray">Chart</div>
                </div>
                {
                    topGainers.map((trending, index)=>(
                        <CoinsListed key={index} coinIcon={trending.coinIcon} coinName={trending.coinName} coinUpTrend={trending.coinUpTrend} price={trending.price}/>
                    ))
                }
                
              </div>
            </div>

            <div className='p-2'>
              <div className="flex justify-between">
                <span className='font-bold text-lg'>💎 Recently Added</span>
                <a href="" className='text-primary'>
                  More
                  <BsChevronRight className='inline ml-2'/>
                </a>
              </div>
              <div>
                <div className="grid grid-cols-3 mt-8 mb-2 text-sm">
                  <div className="text-gray">Name</div>
                  <div className="text-gray">Price</div>
                  <div className="text-gray">Chart</div>
                </div>
                {
                    recentlyAdded.map((trending, index)=>(
                        <CoinsListed key={index} coinIcon={trending.coinIcon} coinName={trending.coinName} coinUpTrend={trending.coinUpTrend} price={trending.price}/>
                    ))
                }
              </div>
            </div>

        </div>
            
            
  )
}

export default ListCoin
