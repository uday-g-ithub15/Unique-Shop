import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY < lastScrollY) {
          setShow(false); 
        } else { 
          setShow(true);  
        }
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);

        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);
    return (
        <nav className={`active ${show && 'hidden'}`}>
            <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Home</Link>
            <Link to={'/blogs'}>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;