import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('HA_test', 'template_hccqrwp', form.current, {
                publicKey: 'PwzPf7tSOvZlB35LR',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };
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

                <form
                    className={styles.contactForm}
                    ref={form}
                    onSubmit={sendEmail}
                >
                    <div className={styles.formGroup}>
                        <label htmlFor="name">FULL NAME (required)</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">EMAIL (required)</label>
                        <input type="text" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">SUBJECT (required)</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                        />
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
