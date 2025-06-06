import styles from './ManualSlider.module.css';
import { useStore } from '../../../../StateManagement/store';

export const ManualSlider = ({ project, img }) => {
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
            <img />
        </div>
    );
};
