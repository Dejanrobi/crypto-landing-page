import React from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
const BackToTop = () => {
  return (
    <section>
        <div className="container mx-auto text-center">
            <button className="  border border-[#DDDDDD] cursor-pointer  rounded-xl bg-[#FAFAFA] text-gray py-4 px-6">
                Back to Top
                <AiOutlineArrowUp className="inline-block ml-3"/>
            </button>
        </div>
    </section>
  )
}

export default BackToTop
