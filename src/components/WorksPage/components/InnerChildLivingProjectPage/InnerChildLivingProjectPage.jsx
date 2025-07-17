import { useEffect, useState } from 'react';
import styles from './InnerChildLivingProjectPage.module.css';
import { ManualSlider } from '../ManualSlider/ManualSlider';
import { useStore } from '../../../../StateManagement/store';

const IMAGES = [
    '/Projects/InnerChildLiving/DSC01809.jpg',
    '/Projects/InnerChildLiving/DSC01911.jpg',
    '/Projects/InnerChildLiving/DSC02002.jpg',
    '/Projects/InnerChildLiving/DSC01963.jpg',
    '/Projects/InnerChildLiving/DSC02037.jpg',
    '/Projects/InnerChildLiving/DSC01849.jpg',
    '/Projects/InnerChildLiving/DSC01958.jpg',
    '/Projects/InnerChildLiving/DSC01928.jpg',
    '/Projects/InnerChildLiving/DSC02048.jpg',
    '/Projects/InnerChildLiving/DSC02057.jpg',
    '/Projects/InnerChildLiving/DSC02000.jpg',
    '/Projects/InnerChildLiving/DSC02014.jpg',
    '/Projects/InnerChildLiving/DSC02087.jpg',
    '/Projects/InnerChildLiving/DSC01865.jpg',
    '/Projects/InnerChildLiving/DSC01958.jpg',
    '/Projects/InnerChildLiving/DSC02019.jpg',
    '/Projects/InnerChildLiving/DSC02121.jpg',
    '/Projects/InnerChildLiving/DSC02128.jpg',
];

export const InnerChildLivingProjectPage = () => {
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
                    <p>Ajith // Inner Child Living</p>
                </div>
                <div className={styles.contextBody}>
                    <p>When connection becomes collaboration.</p>
                    <p>
                        I met Ajith at a co-working and living space in
                        Hiriketiya, Sri Lanka. The Swiss Canadian Sri
                        Lankan-Tamil is a lyricist and musician as well as a
                        spiritualist, and at the time we met he was working on
                        developing his conscious brand, Inner Child Living.
                    </p>
                    <p>
                        After many late night conversations, dinners at Rosie’s
                        Homestay and hoppers at Duni’s, we decided to
                        collaborate on an impromptu photoshoot to create some
                        photos that could be used to promote his upcoming
                        workshops and events.
                    </p>
                    <p>
                        Not long before sunset we headed to Dickwella beach, a
                        short walk from our hostel and were not disappointed -
                        the conditions were perfect, with the sea haze diffusing
                        the golden hour light beautifully.
                    </p>
                    <p>
                        The resulting images speak to the ease and openness we
                        shared and it was a real joy to create together. Thank
                        you, Ajith, for your trust.
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
                    <button
                        className={`${styles.imageEighteenContainer} ${styles.imgButton}`}
                        onClick={() => {
                            openSlider(IMAGES[17]);
                        }}
                    >
                        <img src={IMAGES[17]} className={styles.image} />
                    </button>
                </div>
            </div>
        </>
    );
};
