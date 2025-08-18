import React, { useRef } from "react";

const Header = () => {

    const container = useRef(null)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting)
        })
    }, { threshold: 0.1 })
    if (container.current) {
        observer.observe(container.current)
    }
    return (
        <header ref={container} className="header-content">
            <a href="">Balenciaga</a>
            <a href="">Track.2</a>
        </header>
        
    );
};

export default Header;