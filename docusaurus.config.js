module.exports = {
  title: 'Mint Stack',
  tagline: 'Starter-kits for MERN Stack with inbuilt auth and CRUD',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'antick', // Usually your GitHub org/user name.
  projectName: 'mint', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mint',
      logo: {
        alt: 'Mint Stack',
        src: 'img/logo.svg',
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
              to: 'docs/',
            },
            {
              label: 'Mint React',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/mint',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/FF2eEyAW8D',
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
          editUrl: 'https://github.com/antick/mint/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/antick/mint/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
