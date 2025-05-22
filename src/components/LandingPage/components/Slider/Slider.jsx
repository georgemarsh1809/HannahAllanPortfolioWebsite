import { useState, useEffect } from 'react'
import styles from './Slider.module.css'


export const Slider = ({ imageUrls }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [imageUrls.length]);

    if (!imageUrls || imageUrls.length === 0) {
        return <div>No images provided.</div>;
    }

    return (
        <div className={styles.sliderParent}>
            <div className={styles.slider}>
                {imageUrls.map((imageUrl, index) => (
                    <img
                        key={`image-${index}`}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className={`${styles.image} ${index === currentIndex ? styles.active : styles.inactive}`}
                    />
                ))}
            </div>
        </div>
    )
}


