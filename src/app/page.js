import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />

      <main className={styles.main}>
        <section className={styles.top}>
          <Hero />
          <About />
        </section>

        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
