import React from 'react'
import { ProjectTile } from './components/ProjectTile'
import styles from './WorksPage.module.css'

export const WorksPage = () => {
    return (
        <div className={styles.worksPageContainer}>

            <div className={styles.projectTileOne}>
                <ProjectTile imageNumber={2} project={"InnerChildLiving"}></ProjectTile>

            </div>
            <div className={styles.projectTileTwo}>
                <ProjectTile imageNumber={3} project={"TenthPlanet"}></ProjectTile>

            </div>
            <div className={styles.projectTileThree}>
                <ProjectTile imageNumber={15} project={"MonsoonFN"}></ProjectTile>

            </div>
        </div>
    )
}
