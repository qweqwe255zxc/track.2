import React, { useRef, useEffect } from 'react';

const Cursor = () => {
    const cursor = useRef(null);
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let animationFrameId = null;

    useEffect(() => {
        const move = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 0.4; // плавность движения
            currentY += (mouseY - currentY) * 0.4;
            if (cursor.current) {
                const isHover = cursor.current.classList.contains('hover');
                cursor.current.style.transform = `translate(${currentX - cursor.current.offsetWidth / 2}px, ${currentY - cursor.current.offsetHeight / 2}px)${isHover ? ' scale(1.2)' : ''}`;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', move);
        animate();

        const addHover = () => cursor.current && cursor.current.classList.add('hover');
        const removeHover = () => cursor.current && cursor.current.classList.remove('hover');

        const hoverElements = document.querySelectorAll('a, input, button');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', addHover);
            el.addEventListener('mouseleave', removeHover);
        });

        return () => {
            window.removeEventListener('mousemove', move);
            hoverElements.forEach(el => {
                el.removeEventListener('mouseenter', addHover);
                el.removeEventListener('mouseleave', removeHover);
            });
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <div className="cursor" ref={cursor}></div>;
};

export default Cursor;