import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import RightArrow from '../icons/right-arrow.png';

function Navabr() {

    const [navbar, setNavbar] = useState(false);
    const showShadow=()=>
    {
        if (window.scrollY>5)
        {
            setNavbar(true);
        }
        else
        {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', showShadow);

    const [shouldRender, setShouldRender]=useState(false);

    useEffect(()=>
    {
        const timer=setTimeout(()=>
        {
            setShouldRender(true);
        },100);
        return () => clearTimeout(timer);
    },[]);


    return (
        <div>
            {shouldRender && <nav className={navbar? 'navbar navbar_shadow':'navbar'}>
                <a href='' className='logo'>Coursea</a>

                <div className='navigation_links'>
                    <ul>
                        <li><button type='input'>Category</button></li>
                        <li><button type='input'>About Us</button></li>
                        <li><button type='input'>Coursea Business</button></li>
                    </ul>
                </div>

                <div className='get_started'>
                    <button type='input'>Get Started<img src={RightArrow}/></button>
                </div>
            </nav>}
        </div>
    );
}

export default Navabr;
