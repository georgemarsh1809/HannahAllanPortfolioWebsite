import React from 'react'
import styles from './ProjectTile.module.css'
import { TenthPlanetIMAGES } from './../../WorksPage.constants'
import { InnerChildIMAGES } from './../../WorksPage.constants'
import { MonsoonFNIMAGES } from './../../WorksPage.constants'
import { SacredSpacesIMAGES } from './../../WorksPage.constants'
import { FracturedIMAGES } from './../../WorksPage.constants'
import { ChrisChamillaIMAGES } from './../../WorksPage.constants'
import { NavLink } from 'react-router'

export function ProjectTile(props) {
    const { imageNumber, project } = props

    const source =
        project === "TenthPlanet" ? TenthPlanetIMAGES[imageNumber] :
            project === "InnerChildLiving" ? InnerChildIMAGES[imageNumber] :
                project === "MonsoonFN" ? MonsoonFNIMAGES[imageNumber] :
                    project === "SacredSpaces" ? SacredSpacesIMAGES[imageNumber] :
                        project === "Fractured" ? FracturedIMAGES[imageNumber] :
                            project === "Chris&Chamilla" ? ChrisChamillaIMAGES[imageNumber] : ""

    return (
        <NavLink to={`/works/${project}`} onClick={() => { }}>
            <div className={styles.projectTileInfo}>
                <p>
                    {project === "TenthPlanet" ? "10th Planet" :
                        project === "InnerChildLiving" ? "Inner Child Living // Ajith" :
                            project === "MonsoonFN" ? "Monsoon Gym //" + "Fight Night" :
                                project === "SacredSpaces" ? "Sacred Spaces" :
                                    project === "Fractured" ? "Fractured" :
                                        project === "Chris&Chamilla" ? "Chris & Chamilla" : ""}
                </p>
            </div>
            <div>
                <button className={styles.tileButton}>
                    <img src={source} className={styles.image} />
                </button>
            </div>

        </NavLink>
    )
}