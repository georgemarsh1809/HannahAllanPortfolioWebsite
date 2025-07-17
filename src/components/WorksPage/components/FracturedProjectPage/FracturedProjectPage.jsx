import { useEffect, useState } from 'react';
import styles from './FracturedProjectPage.module.css';
import { useStore } from '../../../../StateManagement/store';
import { ManualSlider } from '../ManualSlider/ManualSlider';

const IMAGES = [
    '/Projects/Fractured/01.jpg',
    '/Projects/Fractured/02.jpg',
    '/Projects/Fractured/03.jpg',
    '/Projects/Fractured/04.jpg',
    '/Projects/Fractured/05.jpg',
    '/Projects/Fractured/06.jpg',
    '/Projects/Fractured/07.jpg',
    '/Projects/Fractured/08.jpg',
    '/Projects/Fractured/09.jpg',
    '/Projects/Fractured/10.jpg',
    '/Projects/Fractured/11.jpg',
    '/Projects/Fractured/12.jpg',
    '/Projects/Fractured/13.jpg',
    '/Projects/Fractured/14.jpg',
    '/Projects/Fractured/15.jpg',
    '/Projects/Fractured/16.jpg',
    '/Projects/Fractured/17.jpg',
    '/Projects/Fractured/18.jpg',
    '/Projects/Fractured/19.jpg',
    '/Projects/Fractured/20.jpg',
];

export const FracturedProjectPage = () => {
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
                    <p>Fractured</p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        The project "Fractured" explores the human relationship
                        with the coastal ecology of Christchurch Bay, England,
                        particularly the ways we have intervened in and altered
                        the landscape, often as a result of economic interest.
                        The project comments on anthropocentric attitudes of
                        dominance over natural processes and environments, which
                        see Christchurch Bay in its current precarious and
                        piecemeal state.
                    </p>
                    <p>
                        "Fractured" engages with both geological and archival
                        research, and experimental photographic techniques, to
                        create a discourse around the management of natural
                        environments. The project enables an association between
                        global climate change and local climate impacts,
                        increasing understanding of our proximity to the issue
                        in the West.
                    </p>
                    <p>
                        Below is a selection of images from the project, as well
                        as the final manifestation of the research and
                        experimentation in PDF format. The project was printed
                        as a small batch, limited run of graphic newspapers.
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
                    <iframe
                        src="https://player.flipsnack.com?hash=QzY1RDlDQThCN0ErdGtheHFzbHBtYQ=="
                        width="100%"
                        height="480"
                        seamless="seamless"
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-read; clipboard-write"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
