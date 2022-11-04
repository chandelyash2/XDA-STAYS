import React from 'react'
import Footer from './Footer'
import Header from './Header/Header'

interface ILayout {
  children: React.ReactNode
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className='overflow-auto'>
      <Header />
      <div className="text-3xl font-bold text-black">
        {children}

      </div>
      <Footer />
    </div>
  )
}

export default Layout