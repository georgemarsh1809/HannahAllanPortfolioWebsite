import styles from './AboutPage.module.css'
import placeholder from '/AboutPage/placeholder.png'

export const AboutPage = () => {
    return (
        <div className={styles.aboutPageContainer}>
            <div className={styles.titleContainer}>
                About
                <img src={placeholder} className={styles.headshotImage} loading='lazy' />
            </div>
            <div className={styles.textContainer}>
                <p>I'm a photographer and storyteller originally from the south coast of the UK, now based in South East Asia.
                    My journey began in a New Forest studio, capturing portraits, products, events and weddings,
                    and it’s grown into a diverse freelance career that’s taken me from documenting love stories to
                    working with ethical clothing brands, restaurants, electric car dealers—and more recently exploring
                    the worlds of travel, martial arts, and videography.</p>

                <p>I studied Photojournalism and Documentary Photography at the London College of Communication,
                    graduating with a first. That time deepened my love for photography as a storytelling tool
                    and piqued my curiosity for the natural world. This led me to complete a Master’s in Ecology,
                    Culture and Society at Goldsmiths University of London, where I continued to explore
                    the connections between people, places, and our environment.</p>

                <p>For me, every project — whether it’s a wedding, a brand shoot, an event or a portrait session
                    — starts with listening. Understanding the story at its core is what makes the process meaningful.</p>

                <p>If you're interested in collaborating, I’d love to hear from you—just drop me a message via the Contact page.</p>
            </div>
        </div>
    )
}
