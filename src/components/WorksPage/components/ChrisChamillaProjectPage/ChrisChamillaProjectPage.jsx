import styles from './ChrisChamillaProjectPage.module.css';
import { useEffect, useState } from 'react';
import { ManualSlider } from '../ManualSlider/ManualSlider';
import { useStore } from '../../../../StateManagement/store';

images = [];
const IMG_PATH = '/Projects/Chris&Chamilla';

export const ChrisChamillaProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [sliderImg, setSliderImg] = useState();
    const { toggleManualSlider, showManualSlider } = useStore();

    const openSlider = (newImg) => {
        toggleManualSlider(!showManualSlider);
        setSliderImg(`${IMG_PATH}/${newImg}.jpg`);
    };

    return (
        <>
            <ManualSlider img={sliderImg} />
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
                            openSlider('006');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/006.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwoContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('015');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/015.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageThreeContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('016');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/016.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('007');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/007.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFiveContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('009');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/009.jpg`}
                            className={styles.image}
                        />
                    </button>
                    <button
                        className={`${styles.imageSixContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('001');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/001.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSevenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('008');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/008.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageEightContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('017');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/017.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageNineContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('018');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/018.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('019');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/019.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageElevenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('004');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/004.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwelveContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('021');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/021.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageThirteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('003');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/003.jpg`}
                            className={styles.image}
                        />
                    </button>
                    <button
                        className={`${styles.imageFourteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('002');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/002.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageFifteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('022');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/022.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSixteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('023');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/023.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageSeventeenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('012');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/012.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageEighteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('010');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/010.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageNineteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('011');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/011.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('013');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/013.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyOneContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('024');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/024.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyTwoContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('025');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/025.jpg`}
                            className={styles.image}
                        />
                    </button>
                    <button
                        className={`${styles.imageTwentyThreeContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('005');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/005.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('014');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/014.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <button
                        className={`${styles.imageTwentyFourContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider('026');
                        }}
                    >
                        <img
                            src={`${IMG_PATH}/026.jpg`}
                            className={styles.image}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};
