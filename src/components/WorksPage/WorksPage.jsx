import React from 'react'
import { ProjectTile } from './components/ProjectTile'
import styles from './WorksPage.module.css'

export const WorksPage = () => {
    return (
        <div className={styles.worksPageContainer}>
            <ProjectTile imageNumber={2} project={"InnerChildLiving"}></ProjectTile>
            <ProjectTile imageNumber={3} project={"TenthPlanet"}></ProjectTile>
            <ProjectTile imageNumber={15} project={"MonsoonFN"}></ProjectTile>

        </div>
    )
}
