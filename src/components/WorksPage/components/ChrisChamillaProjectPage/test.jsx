import React from 'react';

export default function test({ img, rowStyles }) {
    return (
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
    );
}
