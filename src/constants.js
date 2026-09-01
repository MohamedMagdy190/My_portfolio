import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, 
  FaLinkedin, FaInstagram, FaYoutube, FaFacebook,
  FaBootstrap, FaGitAlt, FaNpm, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiVite, SiPostman, SiTypescript } from 'react-icons/si';

// Personal Info
export const PERSONAL_INFO = {
  name: 'Mohamed Magdy',
  email: 'mohamed1942004m@gmail.com',
  phone: '01006201448',
  location: 'Menofia, Egypt',
};

// Social Media Links
export const SOCIAL_LINKS = [
  { id: 1, name: 'Linkedin', icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohamed-magdy-shawky-bba0a4261', color: '#0077b5' },
  { id: 2, name: 'GitHub', icon: FaGithub, url: 'https://github.com/MohamedMagdy190', color: '#333' },
  { id: 3, name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/mohamed_magdy.2004/', color: '#a21caf' },
  { id: 4, name: 'Youtube', icon: FaYoutube, url: 'https://www.youtube.com/@mohamedmagdyelbana2744', color: '#CD201F' },
  { id: 5, name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/mohamed.magdy.756986?locale=ar_AR', color: '#316FF6' },
];

// Categorized Skills Data
export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { id: 1, name: 'HTML5', icon: FaHtml5, color: '#E34F26', desc: 'Semantic, SEO, Accessibility' },
      { id: 2, name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', desc: 'Flexbox, Grid, Animations' },
      { id: 3, name: 'JavaScript', icon: FaJs, color: '#F7DF1E', desc: 'ES6+, DOM, Async/Await' },
      { id: 4, name: 'TypeScript', icon: SiTypescript, color: '#3178C6', desc: 'Types, Interfaces, Generics' },
      { id: 5, name: 'React.js', icon: FaReact, color: '#61DAFB', desc: 'Hooks, Context, Performance' },
      { id: 6, name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', desc: 'SSR, SSG, App Router' },
      { id: 7, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', desc: 'Utility-first, Custom Config' },
      { id: 8, name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', desc: 'Responsive, Components' },
    ]
  },
  {
    title: "Tools & Workflow",
    skills: [
      { id: 9, name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032', desc: 'Version Control, Collaboration' },
      { id: 10, name: 'Vite', icon: SiVite, color: '#646CFF', desc: 'Fast Bundling, HMR' },
      { id: 11, name: 'npm', icon: FaNpm, color: '#CB3837', desc: 'Package Management' },
      { id: 12, name: 'Postman', icon: SiPostman, color: '#FF6C37', desc: 'API Testing' },
      { id: 13, name: 'Figma', icon: FaFigma, color: '#F24E1E', desc: 'UI/UX Design' },
    ]
  }
];

// Stats Data
export const STATS = [
  { id: 1, label: 'Completed Projects', value: 10 },
  { id: 2, label: 'Years Of Experience', value: 1 },
  { id: 3, label: 'Happy Clients', value: 5 },
  { id: 4, label: 'Awards Received', value: 3 },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'Card Shop System',
    tech: 'React • Tailwind CSS',
    image: '/src/Projects/one.png',
    liveLink: 'https://project-system-1xsr.vercel.app/',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    tech: 'React • Context API',
    image: '/src/Projects/two.png',
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    tech: 'Next.js • Framer Motion',
    image: '/src/Projects/three.png',
    liveLink: '#',
    codeLink: '#',
  },
];
