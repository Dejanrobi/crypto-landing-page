import React from 'react';

const PrimaryButton = ({children, onClick, ...props}) => {
  return (
    <button onClick={onClick} className='bg-primary text-white py-4 px-8 hover:bg-primaryHover transition-colors duration-300 mx-2 rounded-full' {...props}>
        {children}
    </button>
  )
}

export default PrimaryButton;
