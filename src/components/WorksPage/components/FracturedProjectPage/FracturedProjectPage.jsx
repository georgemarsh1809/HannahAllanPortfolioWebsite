import styles from './FracturedProjectPage.module.css'

export const FracturedProjectPage = () => {
    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>
                        Fractured
                    </p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Some text
                    </p>
                </div>
            </div>
            <div className={styles.imagesContainer}>
                <iframe src="https://player.flipsnack.com?hash=QzY1RDlDQThCN0ErdGtheHFzbHBtYQ==" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>

            </div>
        </>
    )
}
