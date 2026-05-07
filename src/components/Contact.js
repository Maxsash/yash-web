import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <div className={styles.content}>
          <p>
            Let's connect! Reach out via email or phone, or find me on LinkedIn and GitHub.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:ctrl.alt.yash@gmail.com" className={styles.contactLink}>
              ✉ ctrl.alt.yash@gmail.com
            </a>
            <a href="tel:+917000136567" className={styles.contactLink}>
              ☎ +91 7000136567
            </a>
            <a href="https://linkedin.com/in/yashshaw" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              LinkedIn
            </a>
            <a href="https://github.com/yashshaw" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}