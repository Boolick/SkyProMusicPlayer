import React from 'react'
import NavBar from './NavBar'
 


function Header() {
  return (
    <div className='header'>
          <nav className="main__nav nav">
              <div className="nav__logo logo">
                  <img className="logo__image" src="img/logo.png" alt="logo" />
              </div>
              <div className="nav__burger burger">
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
              </div>
             <NavBar/>
          </nav>
      </div>
  )
}

export default Header
