import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JESUS
            <i className="fas fa-cross" />
          </Link>
          <div className='menu-icon' onClick={handleClick} >
            <i className={click ? 'fas fa-times' : 'fas fa-bar'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/roadmap'
                className='nav-links'
                onClick={closeMobileMenu}>
                Roadmap
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/how-it-works'
                className='nav-links'
                onClick={closeMobileMenu}>
                How it works
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/white-paper'
                className='nav-links'
                onClick={closeMobileMenu}>
                White Paper
              </Link>
            </li>
            <li className='nav-item'>
            </li>
             <li>
              <Link
                to='/testnet'
                className='nav-links-mobile'
                onClick={closeMobileMenu}>
                Testnet
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Testnet</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
