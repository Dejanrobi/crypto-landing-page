 import React from 'react';
 import emoji from "react-easy-emoji";
 
 
import ListCoin from '../ListCoin/ListCoin';
 const listCoin = ["🔥 Trending", "🚀 Top Gainers", "💎 Recently Added"]
 
 const CryptoCurrencySection = () => {


   return (
     <section className="mt-20">
        <div className="container p-4 mx-auto rounded-3xl bg-white shadow-md">
           
            <ListCoin/>                             
          
        </div>
     </section>
   )
 }
 
 export default CryptoCurrencySection
 