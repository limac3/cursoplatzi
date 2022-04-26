import React from 'react'
import Navbar from '@components/Navbar/Navbar'

const Layout: React.FC = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Este es el pie de pagina</footer>
    </div>
  )
}

export default Layout

