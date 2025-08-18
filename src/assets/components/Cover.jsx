import React, { useRef } from 'react'
import coverImage1 from '../img/track.2_4.png'
import coverImage2 from '../img/demna.png'

const Cover = () => {
    const container = useRef(null)
    const img1 = useRef(null)
    const img2 = useRef(null)
    const coverText = useRef(null)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            img1.current.classList.toggle('show', entry.isIntersecting)
            img2.current.classList.toggle('show', entry.isIntersecting)
            coverText.current.classList.toggle('show', entry.isIntersecting)
            // if (entry.isIntersecting) {
            //     entry.target.classList.add('show')
            //     img1.current.classList.add('show')
            //     coverText.current.classList.add('show')
            //     observer.unobserve(entry)
            // }
        })
    }, { threshold: 0.1 })
    if (container.current) {
        observer.observe(container.current)
    }


    return (

        <div className='cover-container' ref={container}>

            <img src={coverImage1} alt="track.2" className="cover-left-image show" ref={img1} />

            <div className='cover-right show'>
                <p className='cover-text show' ref={coverText}>New Track <br /> New View</p>
                <img src={coverImage2} alt="demna" className='cover-right-image' ref={img2} />
            </div>
        </div>
    )
}

export default Cover