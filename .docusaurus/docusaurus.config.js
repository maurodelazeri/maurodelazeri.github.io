export default {
  "plugins": [
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 70,
        "max": 1030,
        "min": 640,
        "steps": 2
      }
    ]
  ],
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "customFields": {},
  "themeConfig": {
    "gtag": {
      "trackingID": "UA-111677195-1"
    },
    "googleAnalytics": {
      "trackingID": "UA-111677195-1"
    },
    "navbar": {
      "title": "Zinnion",
      "logo": {
        "alt": "Zinnion LLC",
        "src": "img/zlogo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/zinnion",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Docs",
              "to": "docs/doc1"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/zinnion"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            }
          ]
        }
      ],
      "logo": {
        "alt": "Zinnion",
        "src": "https://www.online-stopwatch.com/images/dice.png"
      },
      "copyright": "Copyright © 2019 Zinnion, LLC."
    }
  },
  "title": "Zinnion",
  "tagline": "Build, Simulate and Deploy Algorithmic Trading",
  "url": "https://maurodelazeri.github.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "maurodelazeri",
  "projectName": "zinnion-www",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/maurodelazeri/zinnion/zinnion-www/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/maurodelazeri/zinnion/zinnion-www/src/css/custom.css"
        }
      }
    ]
  ]
};