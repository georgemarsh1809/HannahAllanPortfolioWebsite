import React from 'react';
import styles from './ContactPage.module.css';

export const ContactPage = () => {
    return (
        <>
            <div className={styles.contactPage}>
                <div className={styles.contactContext}>
                    <h1 className={styles.contactTitle}>CONTACT </h1>
                    <p className={styles.contactDescription}>
                        If you'd like to work together, have an idea for a
                        collaboration, or have any at all, please use the
                        following form to get in touch.
                    </p>
                    <p className={styles.contactDescription}>
                        All photographs on this website are subject to copyright
                        and require a license for reproduction. If you would
                        like to use an image, please get in touch using the
                        following form.
                    </p>
                </div>

                <form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">FULL NAME (required)</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">EMAIL (required)</label>
                        <input type="text" id="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">SUBJECT (required)</label>
                        <input type="text" id="subject" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">MESSAGE (required)</label>
                        <textarea
                            id="message"
                            name="message"
                            maxLength={1000}
                            className={styles.messageBox}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        SUBMIT
                    </button>
                </form>
            </div>
        </>
    );
};
