'use client';

import styles from './Hero.module.css';
import { IconButton, Tooltip, Divider } from '@mui/material';
import { professionalLinks, personalLinks } from '@/constants/socialLinks';

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
          {professionalLinks.map(({ label, href, icon: Icon, external }) => (
            <Tooltip key={label} title={label} placement="top" arrow>
              <IconButton
                component="a"
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                size="small"
              >
                <Icon fontSize="small" />
              </IconButton>
            </Tooltip>
          ))}

          <Divider orientation="vertical" flexItem className={styles.divider} />

          {personalLinks.map(({ label, href, icon: Icon, external }) => (
            <Tooltip key={label} title={label} placement="top" arrow>
              <IconButton
                component="a"
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                size="small"
              >
                <Icon />
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}