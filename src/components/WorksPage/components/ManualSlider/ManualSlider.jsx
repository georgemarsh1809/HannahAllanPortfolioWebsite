import styles from './ManualSlider.module.css';
import { useStore } from '../../../../StateManagement/store';

export const ManualSlider = ({ img, nextSliderImage, prevSliderImage }) => {
    const { showManualSlider, toggleManualSlider } = useStore();

    return (
        <div
            className={`${styles.sliderParent} ${
                showManualSlider ? styles.visible : ''
            }`}
        >
            <button className={styles.closeButton} onClick={toggleManualSlider}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div className={styles.leftArrowContainer}>
                <button
                    className={styles.leftArrowButton}
                    onClick={prevSliderImage}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            </div>
            <div className={styles.sliderImageContainer}>
                <img src={img} className={styles.sliderImage} />
            </div>
            <div className={styles.rightArrowContainer}>
                <button
                    className={styles.rightArrowButton}
                    onClick={nextSliderImage}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};
