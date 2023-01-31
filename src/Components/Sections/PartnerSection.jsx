import React from 'react';
import partner1 from "../../Images/Partners/partner1.png";
import partner2 from "../../Images/Partners/partner2.png";
import partner3 from "../../Images/Partners/partner3.png";
import partner4 from "../../Images/Partners/partner4.png";

const PartnerSection = () => {
  return (
    <div className="px-6 ">
        <div className='rounded-3xl px-10 bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
            <div className="container mx-auto ">
                <div className="text-center">
                    <h2 className='text-3xl font-bold mb-4'>Trusted Partners Worldwide</h2>
                    <p className='text-gray'>We're partners with countless major organisations around the globe</p>
                </div>
                <div className="my-10">
                    <div className="flex justify-center gap-6">
                        <img src={partner1} alt="partner1" />
                        <img src={partner2} alt="partner2" />
                        <img src={partner3} alt="partner3" />
                        <img src={partner4} alt="partner4" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PartnerSection
