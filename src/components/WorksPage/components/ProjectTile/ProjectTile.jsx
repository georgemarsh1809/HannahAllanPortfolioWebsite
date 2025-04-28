import React from 'react'
import styles from './ProjectTile.module.css'
import { TenthPlanetIMAGES } from './../../WorksPage.constants'
import { InnerChildIMAGES } from './../../WorksPage.constants'
import { MonsoonFNIMAGES } from './../../WorksPage.constants'
import { NavLink } from 'react-router'

export function ProjectTile(props) {
    const { imageNumber, project } = props

    const projectTitle =
        project === "TenthPlanet" ? "tenth planet" :
            project === "InnerChildLiving" ? "inner child living" :
                project === "MonsoonFN" ? "monsoon fight night" : ""

    const source =
        project === "TenthPlanet" ? TenthPlanetIMAGES[imageNumber] :
            project === "InnerChildLiving" ? InnerChildIMAGES[imageNumber] :
                project === "MonsoonFN" ? MonsoonFNIMAGES[imageNumber] : ""

    return (
        <div className={styles.projectTileContainer}>
            <NavLink to={`/works/${project}`} onClick={() => { }}>
                <div className={styles.projectTileInfo}>
                    {projectTitle}
                </div>
                <div>

                    <button className={styles.tileButton}>
                        <img src={source} className={styles.image} />
                    </button>
                </div>

            </NavLink>
        </div>
    )
}