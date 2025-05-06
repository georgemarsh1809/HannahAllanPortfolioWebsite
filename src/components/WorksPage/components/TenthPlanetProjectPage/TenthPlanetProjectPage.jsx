import React from 'react'
import styles from './TenthPlanetProjectPage.module.css'
import { TenthPlanetIMAGES } from '../../WorksPage.constants'

export const TenthPlanetProjectPage = () => {
    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>
                        10th Planet Jiu-Jitsu, Koh Tao
                    </p>
                </div>
                <div className={styles.contextBody}>
                    <p>

                        On a remote tropical island off the coast of Southern Thailand, 2 hours by speed boat or an 8 hour
                        (and surprisingly comfortable) overnight ferry, you will find SEA’s
                        only 10th Planet affiliated Jiu-Jitsu gym. 10th Planet Koh Tao (10PKT)
                        was founded out of pure love for the sport by long term resident of the island,
                        Luke White, co-owner and General Manager of Monsoon Gym, a dedicated Muay Thai training facility on the island.
                    </p>

                    <p>
                        These images were taken across several different training sessions at 10PKT which include
                        beginners, advanced, open mat, ‘10-round-Tuesday’ and positional sparring. Luke has created not only a
                        dynamic and jam packed training schedule but a space where truly anyone is welcome, no matter their size,
                        gender, physical ability, background or experience level. This is evident in the high volume of visiting athletes,
                        first-timers and island regulars who frequent the gym, as well as its international recognition as an elite
                        training facility.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageOneContainer}>
                        <img src={TenthPlanetIMAGES[23]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwoContainer}>
                        <img src={TenthPlanetIMAGES[19]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageThreeContainer}>
                        <img src={TenthPlanetIMAGES[0]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFourContainer}>
                        <img src={TenthPlanetIMAGES[1]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFiveContainer}>
                        <img src={TenthPlanetIMAGES[6]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSixContainer}>
                        <img src={TenthPlanetIMAGES[7]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSevenContainer}>
                        <img src={TenthPlanetIMAGES[8]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageEightContainer}>
                        <img src={TenthPlanetIMAGES[12]} className={styles.image} />
                    </div>
                    <div className={styles.imageNineContainer}>
                        <img src={TenthPlanetIMAGES[24]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTenContainer}>
                        <img src={TenthPlanetIMAGES[14]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageElevenContainer}>
                        <img src={TenthPlanetIMAGES[13]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwelveContainer}>
                        <img src={TenthPlanetIMAGES[15]} className={styles.image} />
                    </div>
                    <div className={styles.imageThirteenContainer}>
                        <img src={TenthPlanetIMAGES[9]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFourteenContainer}>
                        <img src={TenthPlanetIMAGES[5]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFifteenContainer}>
                        <img src={TenthPlanetIMAGES[4]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSixteenContainer}>
                        <img src={TenthPlanetIMAGES[11]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSeventeenContainer}>
                        <img src={TenthPlanetIMAGES[17]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageEighteenContainer}>
                        <img src={TenthPlanetIMAGES[3]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageNineteenContainer}>
                        <img src={TenthPlanetIMAGES[20]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwentyContainer}>
                        <img src={TenthPlanetIMAGES[25]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwentyOneContainer}>
                        <img src={TenthPlanetIMAGES[16]} className={styles.image} />
                    </div>
                    <div className={styles.imageTwentyTwoContainer}>
                        <img src={TenthPlanetIMAGES[22]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwentyThreeContainer}>
                        <img src={TenthPlanetIMAGES[21]} className={styles.image} />
                    </div>
                </div>

            </div>
        </>
    )
}