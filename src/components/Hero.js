import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.name}>Yash Shrivastava</h1>
        <h2 className={styles.title}>Founding Engineer · Backend & Real-Time Systems</h2>
        <p className={styles.description}>
          I build scalable, event-driven systems that power real-time products.
        </p>
        <div className={styles.socialLinks}>
          <a href="mailto:ctrl.alt.yash@gmail.com" className={styles.contactLink}>
            ✉ ctrl.alt.yash@gmail.com
          </a>
          <a href="tel:+917000136567" className={styles.contactLink}>
            ☎ +91 7000136567
          </a>
          <a href="https://linkedin.com/in/yashshaw" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/yashshaw" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}