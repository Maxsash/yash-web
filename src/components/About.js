import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            Backend-focused engineer with 5+ years of experience building real-time, event-driven systems and scalable SaaS platforms. Proven track record of designing microservices, optimizing system performance (up to 65% reduction in DB load), and delivering end-to-end products from architecture to deployment. Experienced in Java, Spring Boot, and distributed data systems (PostgreSQL, InfluxDB). Strong ownership mindset with experience leading 0→1 product builds.
          </p>
        </div>
      </div>
    </section>
  );
}