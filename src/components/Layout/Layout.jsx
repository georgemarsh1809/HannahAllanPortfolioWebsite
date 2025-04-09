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
                            <button className='works-anchor-tag'>
                                <p>Works</p>
                            </button>
                        </NavLink>
                        <h1 className={styles.headerTitle}>
                            hannah allan
                        </h1>
                        <NavLink to="/about" onClick={() => { }}>
                            <button className='about-anchor-tag'>
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
                        <a href="https://www.instagram.com/han_allan9/" target='_blank'>
                            <button className='instagram-link'>
                                <p>Instagram</p>
                            </button>
                        </a>

                        <NavLink to="/contact" onClick={() => { }}>
                            <button className='contact-anchor-tag'>
                                <p>Contact</p>
                            </button>
                        </NavLink>
                    </nav>

                </div>

            </footer>
        </>
    )
}
