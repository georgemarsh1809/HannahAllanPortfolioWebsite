import { AutoSlider } from './components/AutoSlider';
import { LandingPageIMAGES } from './LandingPage.constants';

export const LandingPage = () => {
    return (
        // <div className={styles.landingPageParent}>
        <AutoSlider imageUrls={LandingPageIMAGES} />
    );
};
