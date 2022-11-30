import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Zac Messinger Blog`,
		siteUrl: `https://www.yourdomain.tld`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: '1235'
			}
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`
				],
				web: [
					{
						name: `Londrina Solid`,
						file: `https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400&display=swap`
						// file: `https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@400;900&display=swap"`
					}
				]
			}
		}
	]
};

export default config;
