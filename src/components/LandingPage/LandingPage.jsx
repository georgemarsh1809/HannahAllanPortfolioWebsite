import React from 'react'
import styles from './LandingPage.module.css'
import { Slider } from './components/Slider'

import img1 from '../../assets/LandingPagePhotos/landingpagecarousel-001.jpg'
import img2 from '../../assets/LandingPagePhotos/landingpagecarousel-002.jpg'
import img3 from '../../assets/LandingPagePhotos/landingpagecarousel-003.jpg'
import img4 from '../../assets/LandingPagePhotos/landingpagecarousel-004.jpg'
import img5 from '../../assets/LandingPagePhotos/landingpagecarousel-005.jpg'
import img6 from '../../assets/LandingPagePhotos/landingpagecarousel-006.jpg'
import img7 from '../../assets/LandingPagePhotos/landingpagecarousel-007.jpg'
import img8 from '../../assets/LandingPagePhotos/landingpagecarousel-008.jpg'
import img9 from '../../assets/LandingPagePhotos/landingpagecarousel-009.jpg'
import img10 from '../../assets/LandingPagePhotos/landingpagecarousel-010.jpg'
import img11 from '../../assets/LandingPagePhotos/landingpagecarousel-011.jpg'
import img12 from '../../assets/LandingPagePhotos/landingpagecarousel-012.jpg'
import img13 from '../../assets/LandingPagePhotos/landingpagecarousel-013.jpg'
import img14 from '../../assets/LandingPagePhotos/landingpagecarousel-014.jpg'
import img15 from '../../assets/LandingPagePhotos/landingpagecarousel-015.jpg'
import img16 from '../../assets/LandingPagePhotos/landingpagecarousel-016.jpg'
import img17 from '../../assets/LandingPagePhotos/landingpagecarousel-017.jpg'
import img18 from '../../assets/LandingPagePhotos/landingpagecarousel-018.jpg'
// import images from '../../../../assets/LandingPagePhotos'

const IMAGES = [img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9,
    img10, img11, img12,
    img13, img14, img15,
    img16, img17, img18]


export const LandingPage = () => {
    return (
        // <div className={styles.landingPageParent}>
        <Slider imageUrls={IMAGES} />
    )
}
