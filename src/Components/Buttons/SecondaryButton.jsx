import classNames from 'classnames';
import React from 'react';

const SecondaryButton = ({children,  className, onClick, ...props}) => {
  const cx = classNames([
    ' border border-primary bg-white hover:bg-primary hover:text-white transition-colors duration-300 text-primary mx-  py-4 px-8 rounded-full',
    className
  ])
  
  return (
    <button 
      onClick={onClick} 
      className={cx} 
      {...props}>
        {children}
    </button>
  )
}

export default SecondaryButton;
