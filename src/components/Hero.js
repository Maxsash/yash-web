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
            Email
          </a>
          <a href="https://instagram.com/_maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            Instagram
          </a>
          <a href="https://www.github.com/maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            LinkedIn
          </a>
          <a href="https://maxsash.github.io/portfolio" className={styles.contactLink}>
            Portfolio
          </a>
          <a href="https://www.chess.com/member/maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            Chess.com
          </a>
          <a href="https://psnprofiles.com/Maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            PSN
          </a>
          <a href="https://www.goodreads.com/maxsash" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            Goodreads
          </a>
        </div>
      </div>
    </section>
  );
}
