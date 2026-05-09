import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import { ChessIcon, PSNIcon, GoodreadsIcon } from '@/components/icons/socialIcons';

export const professionalLinks = [
  { label: 'Email',     href: 'mailto:ctrl.alt.yash@gmail.com',      icon: EmailIcon    },
  { label: 'GitHub',    href: 'https://www.github.com/maxsash',       icon: GitHubIcon,   external: true },
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/maxsash',      icon: LinkedInIcon, external: true },
  { label: 'Portfolio', href: 'https://maxsash.github.io/portfolio',  icon: LinkIcon,     external: true },
];

export const personalLinks = [
  { label: 'Instagram', href: 'https://instagram.com/_maxsash',          icon: InstagramIcon, external: true },
  { label: 'Chess.com', href: 'https://www.chess.com/member/maxsash',    icon: ChessIcon,     external: true },
  { label: 'PSN',       href: 'https://psnprofiles.com/Maxsash',         icon: PSNIcon,       external: true },
  { label: 'Goodreads', href: 'https://www.goodreads.com/maxsash',       icon: GoodreadsIcon, external: true },
];