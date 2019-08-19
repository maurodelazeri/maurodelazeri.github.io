/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Zinnion",
  tagline: "Build, Simulate and Deploy Algorithmic Trading",
  url: "https://maurodelazeri.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "maurodelazeri", // Usually your GitHub org/user name.
  projectName: "maurodelazeri.github.io", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2 // the max number of images generated between min and max (inclusive)
      }
    ]
  ],
  themeConfig: {
    gtag: {
      trackingID: "UA-111677195-1"
    },
    googleAnalytics: {
      trackingID: "UA-111677195-1"
    },
    navbar: {
      title: "Zinnion",
      logo: {
        alt: "Zinnion LLC",
        src: "img/zlogo.svg"
      },
      links: [
        { to: "docs/doc1", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/zinnion",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/doc1"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/zinnion"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            }
          ]
        }
      ],
      logo: {
        alt: "Zinnion",
        src: "https://www.online-stopwatch.com/images/dice.png"
      },
      copyright: `Copyright © ${new Date().getFullYear()} Zinnion, LLC.`
    }
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
