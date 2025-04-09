import React from 'react'
import { Outlet, NavLink } from 'react-router'
import styles from "./Layout.module.css"

export const Layout = () => {
    return (
        <>
            <header>
                <div className={styles.headerContainer}>
                    <nav className={styles.navContainerHeader}>
                        <NavLink to="/works" onClick={() => { }}>
                            <button className={styles.navLinkButtonLeft}>
                                <p>Works</p>
                            </button>
                        </NavLink>
                        <a href="/" className={styles.headerTitle}>
                            hannah allan
                        </a>
                        <NavLink to="/about" onClick={() => { }}>
                            <button className={styles.navLinkButtonRight}>
                                <p>About</p>
                            </button>
                        </NavLink>
                    </nav>

                </div>
            </header >
            <main>
                <Outlet />
            </main>
            <footer>
                <div className={styles.footerContainer}>
                    <nav className={styles.navContainerFooter}>
                        <a href="https://www.instagram.com/han_allan9/" target='_blank'>
                            <button className={styles.navLinkButtonLeft}>
                                <p className={styles.navLinkText}>Instagram</p>
                            </button>
                        </a>

                        <NavLink to="/contact" onClick={() => { }}>
                            <button className={styles.navLinkButtonRight}>
                                <p>Contact</p>
                            </button>
                        </NavLink>
                    </nav>

                </div>

            </footer>
        </>
    )
}
