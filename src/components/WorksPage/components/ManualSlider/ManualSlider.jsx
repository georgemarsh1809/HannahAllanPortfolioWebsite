import styles from './ManualSlider.module.css';
import { useStore } from '../../../../StateManagement/store';

export const ManualSlider = ({ img }) => {
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
            <button>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <img src={img} className={styles.sliderImage} />
            <button>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    );
};
