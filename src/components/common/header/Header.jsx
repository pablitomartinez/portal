import React, { useState } from 'react';
import Head from './Head';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false)


  return (
    <div>
      <Head/>
      <header>
        <div className="container paddingSmall">
            <nav>
                <ul className={navbar ? 'navbar' : 'flex'} onClick={()=>{setNavbar(false)}} >         
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/politics'>Politics</Link></li>
                    <li><Link to='/memes'>Memes</Link></li>
                    <li><Link to='/sport'>Sport</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/boxed'>Boxed</Link></li>

                </ul>
                <button className='barIco' onClick={()=>setNavbar(!navbar)} >
                  {navbar ? <i className='fa fa-times' ></i>:<i className='fa fa-bars' ></i>}
                </button>
            </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
