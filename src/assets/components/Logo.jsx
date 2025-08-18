import React, { useRef } from 'react';
import logoLeft from '../img/logo-left.svg';
import logoRight from '../img/logo-right.svg';



const Logo = () => {

    const container = useRef(null)
    const logoLeftRef = useRef(null)
    const logoRightRef = useRef(null)
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            logoLeftRef.current.classList.toggle('show', entry.isIntersecting)
            logoRightRef.current.classList.toggle('show', entry.isIntersecting)
        })
    }, { threshold: 0.1 })
    if (container.current) {
        observer.observe(container.current)
    }


    return (

            <div className='logo show' ref={container}>
                <img src={logoLeft} ref={logoLeftRef} className='logo-left show' alt="logo" />
                <div className='images'>
                </div>
                <img src={logoRight} ref={logoRightRef} className='logo-right show' alt="logo" />
            </div>
    );
};

export default Logo;