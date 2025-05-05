import React from 'react'
import styles from './InnerChildLivingProjectPage.module.css'
import { InnerChildIMAGES } from '../../WorksPage.constants'


export const InnerChildLivingProjectPage = () => {
    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>
                        Ajith // Inner Child Living
                    </p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        When connection becomes collaboration.
                    </p>
                    <p>
                        I met Ajith at a co-working and living space in Hiriketiya, Sri Lanka.  The Swiss Canadian Sri Lankan-Tamil is a lyricist and musician as well as a spiritualist, and at the time we met he was working on developing his conscious brand, Inner Child Living.
                    </p>
                    <p>
                        After many late night conversations, dinners at Rosie’s Homestay and hoppers at Duni’s, we decided to collaborate on an impromptu photoshoot to create some photos that could be used to promote his upcoming workshops and events.
                    </p>
                    <p>
                        Not long before sunset we headed to Dickwella beach, a short walk from our hostel and were not disappointed - the conditions were perfect, with the sea haze diffusing the golden hour light beautifully.
                    </p>
                    <p>
                        The resulting images speak to the ease and openness we shared and it was a real joy to create together. Thank you, Ajith, for your trust.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageOneContainer}>
                        <img src={InnerChildIMAGES[0]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageTwoContainer}>
                        <img src={InnerChildIMAGES[3]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageThreeContainer}>
                        <img src={InnerChildIMAGES[8]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFourContainer}>
                        <img src={InnerChildIMAGES[6]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFiveContainer}>
                        <img src={InnerChildIMAGES[11]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSixContainer}>
                        <img src={InnerChildIMAGES[1]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSevenContainer}>
                        <img src={InnerChildIMAGES[5]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageEightContainer}>
                        <img src={InnerChildIMAGES[4]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageNineContainer}>
                        <img src={InnerChildIMAGES[12]} className={styles.image} />
                    </div>
                    <div className={styles.imageTenContainer}>
                        <img src={InnerChildIMAGES[13]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageElevenContainer}>
                        <img src={InnerChildIMAGES[7]} className={styles.image} />
                    </div>
                    <div className={styles.imageTwelveContainer}>
                        <img src={InnerChildIMAGES[9]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageThirteenContainer}>
                        <img src={InnerChildIMAGES[14]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageFourteenContainer}>
                        <img src={InnerChildIMAGES[2]} className={styles.image} />
                    </div>
                    <div className={styles.imageFifteenContainer}>
                        <img src={InnerChildIMAGES[5]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSixteenContainer}>
                        <img src={InnerChildIMAGES[10]} className={styles.image} />
                    </div>
                </div>
                <div className={styles.imagesRowContainer} >
                    <div className={styles.imageSeventeenContainer}>
                        <img src={InnerChildIMAGES[15]} className={styles.image} />
                    </div>
                    <div className={styles.imageEighteenContainer}>
                        <img src={InnerChildIMAGES[16]} className={styles.image} />
                    </div>
                </div>

            </div>
        </>
    )
}
