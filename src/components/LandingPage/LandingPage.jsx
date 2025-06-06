import { Slider } from './components/Slider';
import { LandingPageIMAGES } from './LandingPage.constants';

export const LandingPage = () => {
    return (
        // <div className={styles.landingPageParent}>
        <Slider imageUrls={LandingPageIMAGES} />
    );
};
