module.exports = {
  title: 'Mint Stack',
  tagline: 'Starter kits (boilerplate) for MERN stack with inbuilt auth and CRUD',
  url: 'https://antick.github.io/mint/',
  baseUrl: '/mint/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'antick', // Usually your GitHub org/user name.
  projectName: 'mint', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mint Stack',
      logo: {
        alt: 'Mint Stack',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'about',
          label: 'About',
          position: 'left'
        },
        {
          href: 'https://twitter.com/pankajsanam',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/antick/mint',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Mint Express',
              to: 'docs/backend/mint-express/what-is-mint-express/',
            },
            {
              label: 'Mint React',
              to: 'docs/frontend/mint-react/react-introduction/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/6jgSTR2pAF',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pankajsanam',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/antick/mint',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Slashism`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/antick/mint/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/antick/mint/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
