import styles from './ChrisChamillaProjectPage.module.css';
import { useEffect } from 'react';
import { ManualSlider } from '../ManualSlider/ManualSlider';
import { useStore } from '../../../../StateManagement/store';

export const ChrisChamillaProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { toggleManualSlider } = useStore();

    return (
        <>
            <ManualSlider />
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>Chris & Chamilla</p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Photographing a wedding is always special but never more
                        so than when it is for people you love.
                    </p>
                    <p>
                        Chris has been a close friend since primary school, so
                        when he and the beautiful Camilla asked me to photograph
                        their special day, I jumped at the opportunity to honor
                        their union in this way.
                    </p>
                    <p>
                        Thank you for trusting me to document this beautiful
                        day.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageOneContainer} ${styles.imgButton}`}
                        onClick={toggleManualSlider}
                    >
                        <img
                            src={'/Projects/Chris&Chamilla/006.jpg'}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwoContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/015.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThreeContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/016.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/007.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFiveContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/009.jpg'}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageSixContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/001.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSevenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/008.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEightContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/017.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/018.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/019.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageElevenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/004.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwelveContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/021.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/003.jpg'}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageFourteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/002.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFifteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/022.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/023.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSeventeenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/012.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEighteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/010.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineteenContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/011.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/013.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyOneContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/024.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyTwoContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/025.jpg'}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageTwentyThreeContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/005.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFourContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/014.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFiveContainer}>
                        <img
                            src={'/Projects/Chris&Chamilla/026.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
