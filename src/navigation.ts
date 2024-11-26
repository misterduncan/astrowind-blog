import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Features',
          href: getPermalink('/#features'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Docs',
      links: [
        {
          text: 'Getting started',
          href: getPermalink('/#features'),
        },
        {
          text: 'Exporting',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Configuration',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Quick start',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Tutorials',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Updates',
          href: getPermalink('update', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'About',
      links: [
        { text: 'Features', href: '#' },
        { text: 'User stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Docs',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/misterduncan.bsky.social' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/misterduncan' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/misterduncan/commspot' },
  ],
};
