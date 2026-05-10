'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

const FULL_TEXT = `I'm a backend engineer who enjoys building systems that are reliable, scalable, and thoughtfully designed — but most of my interests live outside a terminal window. A lot of my free time goes into quieter, slower hobbies: playing chess, reading, sketching, writing, photography, and getting immersed in single-player games that care about atmosphere and storytelling as much as gameplay.

I like hobbies that reward patience and observation. Chess keeps me thinking strategically, photography makes me pay attention to small details, and sketching helps me slow down and explore ideas visually. Writing and reading are probably the most constant parts of my routine — usually a mix of fiction, essays, tech, psychology, and anything that changes the way I look at things.

Gaming has also been a big creative influence for me, especially immersive and artistically driven experiences like Hollow Knight, Hitman: World of Assassination, and other narrative-focused titles on PlayStation. I enjoy games with strong worldbuilding, subtle design, and a sense of exploration more than competitive multiplayer experiences.

Professionally, I work primarily with backend systems, distributed architectures, and product engineering. Personally, I'm drawn to things that are calm, intentional, and creatively satisfying. Whether it's designing software, composing a photograph, analyzing a chess position, or filling pages with random notes and sketches, I enjoy the process of making things that feel meaningful and well-crafted. [AI slop: To be updated]`;

const TYPING_SPEED = 18; // ms per character — lower is faster

export default function About() {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted]     = useState(false);
  const sectionRef = useRef(null);
  const indexRef   = useRef(0);
  const rafRef     = useRef(null);
  const lastRef    = useRef(null);

  // Start when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Typewriter loop via requestAnimationFrame for smoothness
  useEffect(() => {
    if (!started) return;

    const step = (timestamp) => {
      if (!lastRef.current) lastRef.current = timestamp;
      const elapsed = timestamp - lastRef.current;

      if (elapsed >= TYPING_SPEED) {
        const charsToAdd = Math.floor(elapsed / TYPING_SPEED);
        indexRef.current = Math.min(
          indexRef.current + charsToAdd,
          FULL_TEXT.length
        );
        setDisplayed(FULL_TEXT.slice(0, indexRef.current));
        lastRef.current = timestamp;
      }

      if (indexRef.current < FULL_TEXT.length) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [started]);

  // Split on double newline to restore paragraph structure
  const paragraphs = displayed.split('\n\n');

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          {paragraphs.map((para, i) => (
            <p key={i}>
              {para}
              {/* Blinking cursor on the last paragraph while typing */}
              {i === paragraphs.length - 1 && displayed.length < FULL_TEXT.length && (
                <span className={styles.cursor}>|</span>
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}