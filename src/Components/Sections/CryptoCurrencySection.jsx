 import React from 'react';
 import emoji from "react-easy-emoji";
 
 
import ListCoin from '../ListCoin/ListCoin';
 const listCoin = ["🔥 Trending", "🚀 Top Gainers", "💎 Recently Added"]
 
 const CryptoCurrencySection = () => {


   return (
     <section className="mt-20 flex items-center justify-center mx-auto">
        <div className="container p-4  rounded-3xl bg-white shadow-md">
           
            <ListCoin/>                             
          
        </div>
     </section>
   )
 }
 
 export default CryptoCurrencySection
 