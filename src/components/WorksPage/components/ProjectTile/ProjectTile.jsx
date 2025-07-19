import styles from './ProjectTile.module.css';
import { NavLink } from 'react-router';

export function ProjectTile(props) {
    const { project } = props;

    const source =
        project === 'TenthPlanet'
            ? '/Projects/10thPlanet/10thplanet2025-0013.jpg'
            : project === 'InnerChildLiving'
            ? '/Projects/InnerChildLiving/DSC01865.webp'
            : project === 'MonsoonFN'
            ? '/Projects/Monsoon Gym Fight Night/016.jpg'
            : project === 'SacredSpaces'
            ? '/Projects/SacredSpaces/coverImage.jpg'
            : project === 'Fractured'
            ? '/Projects/Fractured/coverImage.jpg'
            : project === 'Chris&Chamilla'
            ? '/Projects/Chris&Chamilla/024.jpg'
            : '';

    return (
        <NavLink to={`/works/${project}`} onClick={() => {}}>
            <div className={styles.projectTileInfo}>
                <p>
                    {project === 'TenthPlanet'
                        ? '10th Planet'
                        : project === 'InnerChildLiving'
                        ? 'Ajith // Inner Child Living'
                        : project === 'MonsoonFN'
                        ? 'Monsoon Gym //' + 'Fight Night'
                        : project === 'SacredSpaces'
                        ? 'Sacred Spaces'
                        : project === 'Fractured'
                        ? 'Fractured'
                        : project === 'Chris&Chamilla'
                        ? 'Chris & Chamilla'
                        : ''}
                </p>
            </div>
            <div>
                <button className={styles.tileButton}>
                    <img src={source} className={styles.image} />
                </button>
            </div>
        </NavLink>
    );
}
