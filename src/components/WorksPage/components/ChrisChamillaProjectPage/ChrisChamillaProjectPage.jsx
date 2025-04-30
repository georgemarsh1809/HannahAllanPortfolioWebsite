import React from 'react'
import styles from './ChrisChamillaProjectPage.module.css'
import { ChrisChamillaIMAGES } from '../../WorksPage.constants'


export const ChrisChamillaProjectPage = () => {
    return (
        <>
            <div className={styles.projectContextContainer}>
                <div className={styles.contextTitle}>
                    <p>
                        Chris & Chamilla
                    </p>
                </div>
                <div className={styles.contextBody}>
                    <p>
                        Photographing a wedding is always special but never more so than when it is for people you love.
                    </p>

                    <p>
                        Chris has been a close friend since primary school, so when he and the beautiful Camilla asked me to photograph their special day, I jumped at the opportunity to honor their union in this way.
                    </p>
                    <p>
                        Thank you for trusting me to document this beautiful day.
                    </p>
                </div>
            </div>

            <div className={styles.imagesContainer}>

            </div>
        </>
    )
}
