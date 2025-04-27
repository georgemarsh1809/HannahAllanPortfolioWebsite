import React from 'react'
import styles from './ProjectTile.module.css'
import { TenthPlanetIMAGES } from './../../WorksPage.constants'
import { NavLink } from 'react-router'

export function ProjectTile(props) {
    const { imageNumber, project } = props

    return (
        <div className={styles.projectTileContainer}>
            {/* <NavLink to={`/works/${project}`} onClick={() => { }}>
                <button className={styles.tileButton}>
                    <img src={TenthPlanetIMAGES[imageNumber]} className={styles.image} />
                </button>
            </NavLink> */}
        </div>
    )
}

