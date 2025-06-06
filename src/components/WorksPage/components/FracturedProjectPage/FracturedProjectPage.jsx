import { useEffect } from 'react';
import styles from './FracturedProjectPage.module.css';
import { useStore } from '../../../../StateManagement/store';

export const FracturedProjectPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const { toggleManualSlider } = useStore();
    // const openSlider = () => {
    //     console.log('Open image slider');
    // };

    return (
        <>
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
                    <button className={styles.imageOneContainer}>
                        <img
                            src={'/Projects/Fractured/01.jpg'}
                            className={styles.image}
                        />
                    </button>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwoContainer}>
                        <img
                            src={'/Projects/Fractured/02.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThreeContainer}>
                        <img
                            src={'/Projects/Fractured/03.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourContainer}>
                        <img
                            src={'/Projects/Fractured/04.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFiveContainer}>
                        <img
                            src={'/Projects/Fractured/05.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixContainer}>
                        <img
                            src={'/Projects/Fractured/06.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSevenContainer}>
                        <img
                            src={'/Projects/Fractured/07.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEightContainer}>
                        <img
                            src={'/Projects/Fractured/08.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineContainer}>
                        <img
                            src={'/Projects/Fractured/09.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTenContainer}>
                        <img
                            src={'/Projects/Fractured/10.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageElevenContainer}>
                        <img
                            src={'/Projects/Fractured/11.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwelveContainer}>
                        <img
                            src={'/Projects/Fractured/12.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageThirteenContainer}>
                        <img
                            src={'/Projects/Fractured/13.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFourteenContainer}>
                        <img
                            src={'/Projects/Fractured/14.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageFifteenContainer}>
                        <img
                            src={'/Projects/Fractured/15.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSixteenContainer}>
                        <img
                            src={'/Projects/Fractured/16.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageSeventeenContainer}>
                        <img
                            src={'/Projects/Fractured/17.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageEighteenContainer}>
                        <img
                            src={'/Projects/Fractured/18.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageNineteenContainer}>
                        <img
                            src={'/Projects/Fractured/19.jpg'}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.imagesRowContainer}>
                    <div className={styles.imageTwentyContainer}>
                        <img
                            src={'/Projects/Fractured/20.jpg'}
                            className={styles.image}
                        />
                    </div>
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
