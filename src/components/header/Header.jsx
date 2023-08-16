import React from 'react'
import './header.css'
// import CTA from './CTA';
import ME from '../../assets/profile_pic.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      
          <h5>Hi, I'm</h5>
          
            <h3 class="dynamic-txts"><span>mana</span></h3>
          
          <h5 className="text-light">I build things.</h5>
        
        {/* <CTA /> */}
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default Header