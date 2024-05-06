/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/favicon.png',
      },
		},
		{
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: "https://bio.us17.list-manage.com/subscribe/post?u=48895cc86a5e39a05280b8390&amp;id=95154ea443&amp;f_id=00f9a2e0f0"
      },
    },
  ],
}
