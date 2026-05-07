'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          Yash
        </div>
        <div className={styles.menu}>
          <button
            className={`${styles.menuItem} ${activeSection === 'about' ? styles.active : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className={`${styles.menuItem} ${activeSection === 'experience' ? styles.active : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button
            className={`${styles.menuItem} ${activeSection === 'projects' ? styles.active : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button
            className={`${styles.menuItem} ${activeSection === 'contact' ? styles.active : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}