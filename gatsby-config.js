module.exports = {
  siteMetadata: {
    siteUrl: "https://twosquirrels.pages.dev/",
    title: "りすりすの巣",
  },
  plugins: [
    // Markdown
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    // SEO
    "gatsby-plugin-sitemap",
    // Develop
    "gatsby-plugin-typegen",
    // UI
    // File
    // CSS
    "gatsby-plugin-sass",
    // External
  ],
};
