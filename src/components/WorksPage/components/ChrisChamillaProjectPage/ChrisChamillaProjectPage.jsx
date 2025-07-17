import styles from './ChrisChamillaProjectPage.module.css';
import { useEffect, useState } from 'react';
import { ManualSlider } from '../ManualSlider/ManualSlider';
import { useStore } from '../../../../StateManagement/store';

const IMAGES = [
    '/Projects/Chris&Chamilla/006.jpg',
    '/Projects/Chris&Chamilla/015.jpg',
    '/Projects/Chris&Chamilla/016.jpg',
    '/Projects/Chris&Chamilla/007.jpg',
    '/Projects/Chris&Chamilla/009.jpg',
    '/Projects/Chris&Chamilla/001.jpg',
    '/Projects/Chris&Chamilla/008.jpg',
    '/Projects/Chris&Chamilla/017.jpg',
    '/Projects/Chris&Chamilla/018.jpg',
    '/Projects/Chris&Chamilla/019.jpg',
    '/Projects/Chris&Chamilla/004.jpg',
    '/Projects/Chris&Chamilla/021.jpg',
    '/Projects/Chris&Chamilla/003.jpg',
    '/Projects/Chris&Chamilla/002.jpg',
    '/Projects/Chris&Chamilla/022.jpg',
    '/Projects/Chris&Chamilla/023.jpg',
    '/Projects/Chris&Chamilla/012.jpg',
    '/Projects/Chris&Chamilla/010.jpg',
    '/Projects/Chris&Chamilla/011.jpg',
    '/Projects/Chris&Chamilla/013.jpg',
    '/Projects/Chris&Chamilla/024.jpg',
    '/Projects/Chris&Chamilla/025.jpg',
    '/Projects/Chris&Chamilla/005.jpg',
    '/Projects/Chris&Chamilla/014.jpg',
    '/Projects/Chris&Chamilla/026.jpg',
];

export const ChrisChamillaProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [sliderImg, setSliderImg] = useState();
    const { toggleManualSlider, showManualSlider } = useStore();

    const openSlider = (newImg) => {
        toggleManualSlider(!showManualSlider);
        setSliderImg(newImg);
    };

    const nextSliderImage = () => {
        const currentIndex = IMAGES.indexOf(sliderImg);
        if (currentIndex === IMAGES.length - 1) {
            return;
        }
        const nextIndex = currentIndex + 1;
        setSliderImg(IMAGES[nextIndex]);
    };

    const prevSliderImage = () => {
        const currentIndex = IMAGES.indexOf(sliderImg);
        if (currentIndex === 0) {
            return;
        }
        const nextIndex = currentIndex - 1;
        setSliderImg(IMAGES[nextIndex]);
    };

    return (
        <>
            <ManualSlider
                img={sliderImg}
                nextSliderImage={nextSliderImage}
                prevSliderImage={prevSliderImage}
            />
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
                        onClick={() => {
                            openSlider(IMAGES[0]);
                        }}
                    >
                        <img src={IMAGES[0]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwoContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[1]);
                        }}
                    >
                        <img src={IMAGES[1]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageThreeContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[2]);
                        }}
                    >
                        <img src={IMAGES[2]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[3]);
                        }}
                    >
                        <img src={IMAGES[3]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFiveContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[4]);
                        }}
                    >
                        <img src={IMAGES[4]} className={styles.image} />
                    </button>
                    <button
                        className={`${styles.imageSixContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[5]);
                        }}
                    >
                        <img src={IMAGES[5]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSevenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[6]);
                        }}
                    >
                        <img src={IMAGES[6]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageEightContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[7]);
                        }}
                    >
                        <img src={IMAGES[7]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageNineContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[8]);
                        }}
                    >
                        <img src={IMAGES[8]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[9]);
                        }}
                    >
                        <img src={IMAGES[9]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageElevenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[10]);
                        }}
                    >
                        <img src={IMAGES[10]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwelveContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[11]);
                        }}
                    >
                        <img src={IMAGES[11]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageThirteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[12]);
                        }}
                    >
                        <img src={IMAGES[12]} className={styles.image} />
                    </button>
                    <button
                        className={`${styles.imageFourteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[13]);
                        }}
                    >
                        <img src={IMAGES[13]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFifteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[14]);
                        }}
                    >
                        <img src={IMAGES[14]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSixteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[15]);
                        }}
                    >
                        <img src={IMAGES[15]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSeventeenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[16]);
                        }}
                    >
                        <img src={IMAGES[16]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageEighteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[17]);
                        }}
                    >
                        <img src={IMAGES[17]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageNineteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[18]);
                        }}
                    >
                        <img src={IMAGES[18]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[19]);
                        }}
                    >
                        <img src={IMAGES[19]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyOneContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[20]);
                        }}
                    >
                        <img src={IMAGES[20]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyTwoContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[21]);
                        }}
                    >
                        <img src={IMAGES[21]} className={styles.image} />
                    </button>
                    <button
                        className={`${styles.imageTwentyThreeContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[22]);
                        }}
                    >
                        <img src={IMAGES[22]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[23]);
                        }}
                    >
                        <img src={IMAGES[23]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[24]);
                        }}
                    >
                        <img src={IMAGES[24]} className={styles.image} />
                    </button>
                </div>
            </div>
        </>
    );
};
