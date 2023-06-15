import React from 'react';
import logo from '../../../images/logo.png'
import headerb from '../../../images/headerb.png'
const Head = () => {
  return (
    <>
        <section className='head'>
            <div className='container flexSB paddingTB'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='ad'>
                <img src={headerb} alt='headerb' />
                    
                </div>
            </div>
        </section>
    </>
  );
}

export default Head;
