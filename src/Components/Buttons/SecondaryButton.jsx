import React from 'react';

const SecondaryButton = ({children, onClick, ...props}) => {
  return (
    <button onClick={onClick} className=' border border-primary bg-white hover:bg-primary hover:text-white transition-colors duration-300 text-primary mx-  py-4 px-8 rounded-full' {...props}>
        {children}
    </button>
  )
}

export default SecondaryButton;
