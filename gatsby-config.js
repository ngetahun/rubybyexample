const path = require('path');
const GTAG = process.env.GTAGS_ID;
const GA_ID = process.env.GA_ID;
module.exports = {
  siteMetadata: {
    title: `Ruby by Example`,
    description: `Learn ruby by example.`,
    author: `Natnael Getahun`,
    siteUrl: `https://www.rubybyexample.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['node_modules/'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`,
        path: `${__dirname}/src/pages/examples`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          examples: require.resolve('./src/layout/Examples'),
          default: require.resolve('./src/layout/Default'),
        },
        mdPlugins: [
          require('remark-slug'),
          require('remark-images'),
          require('remark-gemoji'),
          require('remark-gemoji-to-emoji'),
          require('remark-autolink-headings'),
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: false,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: GTAG,

        defaultDataLayer: function() {
          return {
            pageType: window.pageType,
          };
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rubybyexample`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the
        // root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline
    // functionality To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
