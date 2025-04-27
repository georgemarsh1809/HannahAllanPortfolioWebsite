import React from 'react'
import { ProjectTile } from './components/ProjectTile'

export const WorksPage = () => {
    return (
        <div>
            <ProjectTile imageNumber={1} project={"TenthPlanet"}></ProjectTile>
            <ProjectTile imageNumber={2} project={"InnerChildLiving"}></ProjectTile>
            <ProjectTile imageNumber={3} project={"MonsoonFN"}></ProjectTile>

        </div>
    )
}
