import React from 'react';
import faq from "../../Images/Illustrations/faq.png";
import SecondaryButton from '../Buttons/SecondaryButton';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const FaqSection = () => {
  return (
    <div className="container mx-auto py-32">
        <div className="grid grid-cols-2">
            <img src={faq} alt="Credit Card" />
            <div className='flex justify-center'>
                <div className='max-w-2xl'>
                    <span className="text-primary">
                        SUPPORT
                    </span>
                    <h2 className="font-bold mt-2 text-3xl mb-4">Frequently asked  questions</h2>
                    
                    <ul className="my-6">
                       
                        <li className='mb-6 border-b border-lightgray pb-4'>
                            <div className="flex justify-between">
                                Why should I choose NEFA?
                                <BsChevronUp/>
                            </div>
                            <p className="text-gray text-sm mt-2">
                                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today, we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app, secure wallet, and range of features.
                            </p>                            
                        </li>

                        <li className='mb-6 border-b border-lightgray pb-4'>
                            <div className="flex justify-between">
                                How secure is NEFA? 
                                <BsChevronDown/>
                            </div>
                        </li>
                        <li className='mb-6 border-b border-lightgray pb-4'>
                            <div className="flex justify-between">
                                Do I have to buy a whole Bitcoin?
                                <BsChevronDown/>
                            </div>
                        </li>
                        <li className='mb-6 border-b border-lightgray pb-4'>
                            <div className="flex justify-between">
                                How do I actually buy Bitcoin? 
                                <BsChevronDown/>
                            </div>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default FaqSection;
