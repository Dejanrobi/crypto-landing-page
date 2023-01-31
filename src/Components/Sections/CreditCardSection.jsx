import React from 'react';
import creditCard from "../../Images/Illustrations/creditcard.png";
import SecondaryButton from '../Buttons/SecondaryButton';
import { BsCheckCircleFill } from 'react-icons/bs';

const CreditCardSection = () => {
  return (
    <div className="container mx-auto py-32">
        <div className="grid grid-cols-2">
            <img src={creditCard} alt="Credit Card" />
            <div className='flex justify-center'>
                <div className='max-w-md'>
                    <h2 className="font-bold text-3xl mb-4">Introducing the <span className='leading-normal text-primary'>NEFA</span>  <br/> Credit Card</h2>
                    <p className='text-gray text-sm'>Subject to cardholder and rewards terms which will be available at application.</p>
                    <ul className="my-6">
                        <li className='mb-2'>
                            <BsCheckCircleFill className='text-primary inline mr-2'/>
                            Up to 3% back on purchases
                        </li>
                        <li className='mb-2'>
                            <BsCheckCircleFill className='text-primary inline mr-2'/>
                            Earn rewards in bitcoin or any crypto on NEFA
                        </li>
                        <li className='mb-2'>
                            <BsCheckCircleFill className='text-primary inline mr-2'/>
                            No annual fee
                        </li>
                    </ul>
                    <SecondaryButton>
                        Join the waitlist
                    </SecondaryButton>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default CreditCardSection
