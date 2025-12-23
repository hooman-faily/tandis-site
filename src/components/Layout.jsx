import React, { useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ScrollContext } from './ScrollContext';

const Layout = ({children}) => {

const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <ScrollContext.Provider value={{ scrollToId }}>
        <Header/>
        {children}
        <Footer/>
    </ScrollContext.Provider>
  )
}

export default Layout