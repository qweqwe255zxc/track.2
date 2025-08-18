import React, { useRef } from 'react'
import collectionVid from '../vid/collectionVid.mp4'

const Collection = () => {

    const container = useRef(null)
    const text1 = useRef(null)
    const text2 = useRef(null)
    const vid = useRef(null)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            vid.current.classList.toggle('show', entry.isIntersecting)
            text2.current.classList.toggle('show', entry.isIntersecting)
            text1.current.classList.toggle('show', entry.isIntersecting)
        })
    }, { threshold: 0.1 })
    if (container.current) {
        observer.observe(container.current)
    }

    return (
        <div className="collection-container" ref={container}>
            <div className="collection-text left" ref={text1}>
                <h2>Balenciaga Fall/Winter 2019 Collection</h2>
                <p>The Balenciaga Fall/Winter 2019 collection, designed by Demna Gvasalia, continued to push boundaries through its powerful exploration of volume, layering, and identity. The collection featured oversized silhouettes, sharp tailoring, and a distinct blend of streetwear and high fashion. <br /><br />
                    Signature elements included exaggerated shoulders, architectural outerwear, bold logotypes, and utilitarian accessories. The color palette ranged from deep neutrals to vibrant tones, emphasizing the dramatic tension within the garments. Many looks incorporated political and corporate motifs, reflecting Gvasalia’s commentary on modern power structures and branding culture. <br /><br />
                    With a futuristic yet grounded aesthetic, the FW19 collection cemented Balenciaga’s vision of fashion as both conceptual and wearable, maintaining its avant-garde edge while staying relevant to contemporary street style.</p>
            </div>
            <div className="collection-video" ref={vid}>
                <video src={collectionVid} loop autoPlay muted></video>
            </div>
            <div className="collection-text right" ref={text2}>
                <h2>Track.2 Introduction Note</h2>
                <p>The Balenciaga Track.2 sneakers were officially introduced online on June 18, 2019, as part of the Fall 2019 season. Unlike their predecessor, the Track.2 featured a more complex multi-layered design, constructed from 176 individual panels, and showcased an evolved approach to performance-inspired footwear.</p>
            </div>
        </div>
    );
};

export default Collection;