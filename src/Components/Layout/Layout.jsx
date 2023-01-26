import React from 'react'
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div className='container px-12'>
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout;
