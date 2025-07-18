import { useEffect, useState } from 'react';
import styles from './SacredSpacesProjectPage.module.css';
import { useStore } from '../../../../StateManagement/store';
import { ManualSlider } from '../ManualSlider/ManualSlider';

const IMAGES = [
    '/Projects/SacredSpaces/04.jpg',
    '/Projects/SacredSpaces/05.jpg',
    '/Projects/SacredSpaces/12.jpg',
    '/Projects/SacredSpaces/17.jpg',
    '/Projects/SacredSpaces/25.jpg',
    '/Projects/SacredSpaces/22.jpg',
    '/Projects/SacredSpaces/15.jpg',
    '/Projects/SacredSpaces/10.jpg',
    '/Projects/SacredSpaces/03.jpg',
    '/Projects/SacredSpaces/11.jpg',
    '/Projects/SacredSpaces/18.jpg',
    '/Projects/SacredSpaces/23.jpg',
    '/Projects/SacredSpaces/20.jpg',
    '/Projects/SacredSpaces/24.jpg',
    '/Projects/SacredSpaces/13.jpg',
    '/Projects/SacredSpaces/09.jpg',
    '/Projects/SacredSpaces/01.jpg',
    '/Projects/SacredSpaces/14.jpg',
    '/Projects/SacredSpaces/26.jpg',
    '/Projects/SacredSpaces/02.jpg',
    '/Projects/SacredSpaces/06.jpg',
    '/Projects/SacredSpaces/16.jpg',
    '/Projects/SacredSpaces/19.jpg',
    '/Projects/SacredSpaces/21.jpg',
    '/Projects/SacredSpaces/07.jpg',
];

export const SacredSpacesProjectPage = () => {
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
                    <p>Sacred Spaces</p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Over several years of travel, I have always found myself
                        drawn to spiritual places. Despite not considering
                        myself religious throughout my life and only really
                        exploring my spirituality in the last year, these spaces
                        have always been a source of curiosity. These sites have
                        a duality to them; both places of deep spiritual
                        reverence and pilgrimage, whilst simultaneously being
                        economically influenced by, and in some cases dependent
                        on, tourism generated by those of differing faiths.
                    </p>
                    <p>
                        Sometimes this juxtaposition can cause conflict. In a
                        Hindu temple, a religion that encourages vegetarianism,
                        compassion towards living beings and believes in the
                        karmic cycle of reincarnation into animal form, I have
                        witnessed a child tormenting and kicking a resident
                        chicken. I’ve consistently witnessed the blatant
                        disregard of rules concerning the covering of body parts
                        or the removal of shoes. Yet I’ve also witnessed sincere
                        moments of the purest devotion, and the wondrous awe
                        which these places can incite for first time or foreign
                        visitors.
                    </p>
                    <p>
                        This awe, this feeling, this sense of calm and of
                        connection to something much greater than the self is
                        what I now realise draws me to these places. I do not
                        believe that any one religion, philosophy, building or
                        shrine holds the secret to spiritual awakening but that
                        they all have that potentiality. From the polished
                        marble of the Grand Mosque of Oman to the old picture
                        frames stacked haphazardly in the corner of a tiny cave
                        temple in Malaysia, what these places hold in common,
                        despite religions' inherent sectarianism, is that
                        feeling of union, of connection with something greater.
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
            </div>
        </>
    );
};
