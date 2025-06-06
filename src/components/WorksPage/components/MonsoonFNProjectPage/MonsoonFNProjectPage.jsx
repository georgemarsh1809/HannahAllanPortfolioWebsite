import { useStore } from '../../../../StateManagement/store';
import styles from './MonsoonFNProjectPage.module.css';
import { useEffect } from 'react';

export const MonsoonFNProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { toggleManualSlider } = useStore();

    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>Monsoon Gym // Fight Night</p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Monsoon Gym has been training Muay Thai fighters for the
                        last 20 years, with a reputation as one of the best
                        training facilities on Koh Tao.
                    </p>
                    <p>
                        As well as their excellent Muay Thai and Boxing
                        training, Monsoon regularly hosts Fight Nights, where
                        athletes from Monsoon and other gyms, both local to Koh
                        Tao, the neighbouring islands the the mainland, come
                        together to compete in their dedicated Muay Thai ring.
                    </p>
                    <p>
                        These photos demonstrate not only the electric
                        atmosphere and high calibre of competitors but the
                        dedication of the Monsoon team as they support both home
                        and visiting athletes in and out of the ring.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageOneContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/001.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwoContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/002.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThreeContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/005.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/003.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFiveContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/024.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/006.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSevenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/007.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEightContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/012.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/008.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/009.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageElevenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/015.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwelveContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/011.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/013.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/010.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFifteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/014.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/018.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSeventeenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/017.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEighteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/016.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineteenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/020.jpg'}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.imageTwentyContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/021.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyOneContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/019.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyTwoContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/022.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyThreeContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/028.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFourContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/023.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyFiveContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/025.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentySixContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/027.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentySevenContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/029.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyEightContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/004.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyNineContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/026.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirtyContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/030.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirtyOneContainer}>
                        <img
                            src={'/Projects/Monsoon Gym Fight Night/031.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
