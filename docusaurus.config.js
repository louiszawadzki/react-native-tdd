const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "React Native TDD",
  tagline: "A guide to practicing TDD in React Native apps",
  url: "https://louiszawadzki.github.io",
  baseUrl: "/react-native-tdd/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "louiszawadzki", // Usually your GitHub org/user name.
  projectName: "react-native-tdd", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "Home",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "tdd-intro/what-is-tdd",
          position: "left",
          label: "Guide",
        },
        {
          href: "https://github.com/louiszawadzki/react-native-tdd",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Louis Zawadzki. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
