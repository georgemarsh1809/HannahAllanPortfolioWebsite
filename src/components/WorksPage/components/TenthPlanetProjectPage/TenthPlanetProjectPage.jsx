import React from 'react'
import styles from './TenthPlanetProjectPage.module.css'

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

            </div>
        </>
    )
}