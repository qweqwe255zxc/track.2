import { useEffect, useRef } from 'react';
import track2 from '../img/track.2-sideview.png'

const Track2 = () => {
    const imgRef = useRef(null);
    const container = useRef(null);
    const text1 = useRef(null)
    const text2 = useRef(null)
    const imgContainer = useRef(null);


    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imgRef.current) return;
            const rect = imgRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = (centerX - e.clientX) / 5;
            const offsetY = (centerY - e.clientY) / 5;
            imgRef.current.style.setProperty('--shadow-x', `${offsetX}px`);
            imgRef.current.style.setProperty('--shadow-y', `${offsetY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            imgContainer.current.classList.toggle('show', entry.isIntersecting)
            text1.current.classList.toggle('show', entry.isIntersecting)
            text2.current.classList.toggle('show', entry.isIntersecting)
        })
    }, { threshold: 0.1 })
    if (container.current) {
        observer.observe(container.current)
    }

    return (
        <div className='track-container' ref={container} >
            <div className='track-text-container left' ref={text1}>
                <div>
                    <h2>Multilayer Design</h2>
                    <p>Crafted with 176 separate elements for a complex, structured silhouette.</p>
                </div>
                <div>
                    <h2>Premium Materials</h2>
                    <p>Combines mesh, nylon, and rubber for durability and breathability.</p>
                </div>
            </div>
            <div className="track-img-container" ref={imgContainer}>
                <img src={track2} alt="" className='track-img dynamic-shadow' ref={imgRef} />
            </div>
            <div className='track-text-container right' ref={text2}>
                <div>
                    <h2>Futuristic Aesthetic</h2>
                    <p>A bold, tech-runner look inspired by motion and architecture.</p>
                </div>
                <div>
                    <h2>Enhanced Comfort</h2>
                    <p>Cushioned sole and padded tongue ensure all-day support.</p>
                </div>
                <div>
                    <h2>Sculptural Sole</h2>
                    <p>Layered, dynamic sole unit adds volume and attitude.</p>
                </div>
            </div>
        </div>
    );
};

export default Track2;