import React from 'react'
import styles from './SacredSpacesProjectPage.module.css'
import { SacredSpacesIMAGES } from '../../WorksPage.constants'


export const SacredSpacesProjectPage = () => {
    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>
                        Sacred Spaces
                    </p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Some text
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>

            </div>
        </>
    )
}
