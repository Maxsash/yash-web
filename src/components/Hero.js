'use client'

import styles from './Hero.module.css';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';

// Custom SVG icons for platforms MUI doesn't cover
const ChessIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M9 2h6v2h-1l1 3H9L10 4H9V2zm-2 5h10l-1 3H8L7 7zm-1 4h12l-1 9H7L6 11zm2 2v5h8v-5H8z"/>
  </svg>
);

const PSNIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.996.636.199.76.785.76 1.474v5.021c2.277 1.191 3.978-.048 3.978-2.394 0-2.467-1.048-3.887-3.374-4.612L8.985 2.596zM6.431 17.27c-2.326-.84-2.713-2.587-1.652-3.612.956-.911 2.5-1.432 4.342-1.708v1.977c-1.239.273-1.76.741-1.641 1.279.106.479.741.741 1.641.741l.011-.007v1.88c-1.015 0-2.005-.18-2.701-.55zm8.855 1.441l-5.169-1.708v-1.998l5.169 1.708v1.998z"/>
  </svg>
);

const GoodreadsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.755h2.013c.171 2.233 1.883 3.755 4.478 3.965 3.064.249 5.381-1.44 5.381-5.023v-1.73h-.057c-.87 1.652-2.556 2.685-4.783 2.685-3.857 0-6.337-2.904-6.337-6.84 0-4.075 2.635-7.086 6.594-7.086 2.145 0 3.8.956 4.724 2.597h.056V4.341h1.954v12.49c0 4.137-2.304 7.164-7.575 7.164zm.118-17.084c-2.972 0-4.686 2.214-4.686 5.258 0 2.956 1.714 5.132 4.687 5.132 2.972 0 4.819-2.195 4.819-5.132 0-3.026-1.846-5.258-4.82-5.258z"/>
  </svg>
);

const professionalLinks = [
  { label: 'Email', href: 'mailto:ctrl.alt.yash@gmail.com', icon: <EmailIcon fontSize="small" /> },
  { label: 'GitHub', href: 'https://www.github.com/maxsash', icon: <GitHubIcon fontSize="small" />, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/maxsash', icon: <LinkedInIcon fontSize="small" />, external: true },
  { label: 'Portfolio', href: 'https://maxsash.github.io/portfolio', icon: <LinkIcon fontSize="small" />, external: true },
];

const personalLinks = [
  { label: 'Instagram', href: 'https://instagram.com/_maxsash', icon: <InstagramIcon fontSize="small" />, external: true },
  { label: 'Chess.com', href: 'https://www.chess.com/member/maxsash', icon: <ChessIcon />, external: true },
  { label: 'PSN', href: 'https://psnprofiles.com/Maxsash', icon: <PSNIcon />, external: true },
  { label: 'Goodreads', href: 'https://www.goodreads.com/maxsash', icon: <GoodreadsIcon />, external: true },
];

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
          {professionalLinks.map(({ label, href, icon, external }) => (
            <Tooltip key={label} title={label} placement="top" arrow>
              <IconButton
                component="a"
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                size="small"
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}

          <Divider orientation="vertical" flexItem className={styles.divider} />

          {personalLinks.map(({ label, href, icon, external }) => (
            <Tooltip key={label} title={label} placement="top" arrow>
              <IconButton
                component="a"
                href={href}
                className={styles.contactLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                size="small"
              >
                {icon}
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}