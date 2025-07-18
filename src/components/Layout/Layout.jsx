import { Outlet, NavLink } from 'react-router';
import styles from './Layout.module.css';
import { useStore } from '../../StateManagement/store';

export const Layout = () => {
    const { toggleManualSlider, showManualSlider } = useStore();

    return (
        <>
            <header>
                <div className={styles.headerContainer}>
                    <nav className={styles.navContainerHeader}>
                        <NavLink
                            to="/works"
                            onClick={() => {
                                // If the slider is open when the page is changed, close the slider so its not open on another project page:
                                showManualSlider && toggleManualSlider(false);
                            }}
                        >
                            <button className={styles.navLinkButtonLeftTop}>
                                <p>Works</p>
                            </button>
                        </NavLink>
                        <a href="/">
                            <h1 className={styles.headerTitle}>Hannah Allan</h1>
                        </a>
                        <NavLink
                            to="/about"
                            onClick={() => {
                                if (showManualSlider)
                                    toggleManualSlider(!showManualSlider);
                            }}
                        >
                            <button className={styles.navLinkButtonRightTop}>
                                <p>About</p>
                            </button>
                        </NavLink>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className={styles.footerContainer}>
                    <nav className={styles.navContainerFooter}>
                        <a
                            href="https://www.instagram.com/han_allan9/"
                            target="_blank"
                        >
                            <button className={styles.navLinkButtonLeftBottom}>
                                <p className={styles.navLinkText}>Instagram</p>
                            </button>
                        </a>
                        <NavLink
                            to="/contact"
                            onClick={() => {
                                if (showManualSlider)
                                    toggleManualSlider(!showManualSlider);
                            }}
                        >
                            <button className={styles.navLinkButtonRightBottom}>
                                <p>Contact</p>
                            </button>
                        </NavLink>
                    </nav>
                </div>
            </footer>
        </>
    );
};
