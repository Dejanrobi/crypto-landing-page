import classNames from 'classnames';
import React from 'react';

const PrimaryButton = ({children, className, onClick, ...props}) => {
  const cx = classNames([
    'bg-primary text-white py-4 px-8 hover:bg-primaryHover transition-colors duration-300 mx-2 rounded-full',
    className

  ])
  
  return (
    <button 
      onClick={onClick} 
      className= {cx}
      {...props}
    >
        {children}
    </button>
  )
}

export default PrimaryButton;
