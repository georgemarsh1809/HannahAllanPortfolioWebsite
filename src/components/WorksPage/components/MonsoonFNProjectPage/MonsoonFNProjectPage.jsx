import { useStore } from '../../../../StateManagement/store';
import styles from './MonsoonFNProjectPage.module.css';
import { useEffect, useState } from 'react';
import { ManualSlider } from '../ManualSlider/ManualSlider';

const IMAGES = [
    '/Projects/Monsoon Gym Fight Night/001.jpg',
    '/Projects/Monsoon Gym Fight Night/002.jpg',
    '/Projects/Monsoon Gym Fight Night/005.jpg',
    '/Projects/Monsoon Gym Fight Night/003.jpg',
    '/Projects/Monsoon Gym Fight Night/024.jpg',
    '/Projects/Monsoon Gym Fight Night/006.jpg',
    '/Projects/Monsoon Gym Fight Night/007.jpg',
    '/Projects/Monsoon Gym Fight Night/012.jpg',
    '/Projects/Monsoon Gym Fight Night/008.jpg',
    '/Projects/Monsoon Gym Fight Night/009.jpg',
    '/Projects/Monsoon Gym Fight Night/015.jpg',
    '/Projects/Monsoon Gym Fight Night/011.jpg',
    '/Projects/Monsoon Gym Fight Night/013.jpg',
    '/Projects/Monsoon Gym Fight Night/010.jpg',
    '/Projects/Monsoon Gym Fight Night/014.jpg',
    '/Projects/Monsoon Gym Fight Night/018.jpg',
    '/Projects/Monsoon Gym Fight Night/017.jpg',
    '/Projects/Monsoon Gym Fight Night/016.jpg',
    '/Projects/Monsoon Gym Fight Night/020.jpg',
    '/Projects/Monsoon Gym Fight Night/021.jpg',
    '/Projects/Monsoon Gym Fight Night/019.jpg',
    '/Projects/Monsoon Gym Fight Night/022.jpg',
    '/Projects/Monsoon Gym Fight Night/028.jpg',
    '/Projects/Monsoon Gym Fight Night/023.jpg',
    '/Projects/Monsoon Gym Fight Night/025.jpg',
    '/Projects/Monsoon Gym Fight Night/027.jpg',
    '/Projects/Monsoon Gym Fight Night/029.jpg',
    '/Projects/Monsoon Gym Fight Night/004.jpg',
    '/Projects/Monsoon Gym Fight Night/026.jpg',
    '/Projects/Monsoon Gym Fight Night/030.jpg',
    '/Projects/Monsoon Gym Fight Night/031.jpg',
];

export const MonsoonFNProjectPage = () => {
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
                </div>
                <div className={styles.imagesRowContainer}>
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
                </div>
                <div className={styles.imagesRowContainer}>
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
                </div>
                <div className={styles.imagesRowContainer}>
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
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[25]);
                        }}
                    >
                        <img src={IMAGES[25]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[26]);
                        }}
                    >
                        <img src={IMAGES[26]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[27]);
                        }}
                    >
                        <img src={IMAGES[27]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[28]);
                        }}
                    >
                        <img src={IMAGES[28]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[29]);
                        }}
                    >
                        <img src={IMAGES[29]} className={styles.image} />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[30]);
                        }}
                    >
                        <img src={IMAGES[30]} className={styles.image} />
                    </button>
                </div>
            </div>
        </>
    );
};
