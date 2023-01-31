import React from 'react';
import banks from "../../Images/Illustrations/banks.png";
import SecondaryButton from '../Buttons/SecondaryButton';
import { BsCheckCircleFill } from 'react-icons/bs';

const SecuritySection = () => {
  return (
    <div className="container mx-auto py-32">
        <div className="grid grid-cols-2">
            <img src={banks} alt="Credit Card" />
            <div className='flex justify-center'>
                <div className='max-w-xl'>
                    <h2 className="font-bold text-3xl mb-4">Industry-leading security from day one</h2>
                    
                    <ul className="my-6">
                       
                        <li className='mb-6'>
                            <span className='font-bold'>
                                <BsCheckCircleFill className='text-primary inline mr-2'/>
                                Safety, security and compliance
                            </span>
                            <p className="text-gray text-sm mt-2">
                                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the cybersecurity audits conducted by the New York Department of Financial Services. Learn more about our commitment to security.
                            </p>                            
                        </li>
                        <li className='mb-6'>
                            <span className='font-bold'>
                                <BsCheckCircleFill className='text-primary inline mr-2'/>
                                Hardware security keys
                            </span>
                            <p className="text-gray text-sm mt-2">
                                With NEFA you can secure your account with a hardware security key via WebAuthn.
                            </p>
                        </li>
                        <li className='mb-6'>
                            <span className='font-bold'>
                                <BsCheckCircleFill className='text-primary inline mr-2'/>
                                SOC Certifications
                            </span>
                            <p className="text-gray text-sm mt-2">
                                NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the world’s first cryptocurrency exchange and custodian to complete these exams.
                            </p>
                        </li>
                    </ul>
                    
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default SecuritySection;
