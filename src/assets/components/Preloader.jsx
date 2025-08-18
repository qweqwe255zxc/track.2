import React, { useEffect, useRef } from 'react';
import logoLeft from '../img/logo-left.svg';
import logoRight from '../img/logo-right.svg';
import _1 from '../img/track.2_1.png'
import _2 from '../img/track.2_2.png'
import _3 from '../img/track.2_3.png'
import _4 from '../img/track.2_4.png'

const Preloader = ({ onFinish }) => {

    const imagesRef = useRef(null)
    const preloaderRef = useRef(null)

    const imagesSlider = () => {
        const images = [_1, _2, _3, _4]
        const imagesContainer = imagesRef.current
        const preloaderStatus = preloaderRef.current
        let mainIndex = 0
        let currentIndex = 0
        let intervalId

        document.body.style.overflow = 'hidden'
        setTimeout(() => {
            imagesContainer.classList.add('active')
            setTimeout(() => {
                intervalId = setInterval(() => {
                    if (mainIndex < 16) {
                        imagesContainer.style.backgroundImage = `url(${images[currentIndex]})`;
                        mainIndex += 1
                        currentIndex = (currentIndex + 1) % images.length
                    } else {
                        clearInterval(intervalId)
                        imagesContainer.style.backgroundImage = `url(${_4})`;
                        setTimeout(() => {
                            imagesContainer.classList.remove('active')
                            setTimeout(() => {
                                preloaderStatus.classList.add('disabled')
                                if (onFinish) onFinish();
                                document.body.style.overflow = 'visible'
                            }, 700);
                        }, 1000);
                    }
                }, 150);
            }, 1000);
        }, 800);

        return () => clearInterval(intervalId)
    }
    useEffect(() => {
        const slider = imagesSlider()
        return slider
    }, []);


    return (
        <div className='preloader' ref={preloaderRef}>
            <div className='logo'>
                <img src={logoLeft} alt="logo" />
                <div className='images' ref={imagesRef}>
                </div>
                <img src={logoRight} alt="logo" />
            </div>
        </div>
    );
};

export default Preloader;