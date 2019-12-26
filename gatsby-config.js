const path = require('path');
const withDefaults = require('./utils/withDefaults');

module.exports = (themeOptions) => {
    const options = withDefaults(themeOptions);

    return {
        siteMetadata: {
            siteTitle: 'DotDev',
            siteTitleAlt: 'DotDev',
            siteHeadline: 'DotDev',
            siteUrl: 'https://kennethwang.dev',
            siteDescription: 'Personal site template for developers.',
            siteLanguage: 'en',
            siteImage: '/banner.jpg',
            author: 'Kenneth Wang',
            role: 'fullstack engineer',
            footerLinks: [
                {
                    title: 'GitHub',
                    url: 'http://github.com',
                },
                {
                    title: 'LinkedIn',
                    url: 'http://linkedin.com',
                },
            ],
            projectsSubtitle: 'A selection of my favorite projects, completed in recent years.',
            writingsSubtitle: 'My thoughts on web development and product design.',
            basePath: options.basePath,
            projectsPath: options.projectsPath,
            writingsPath: options.writingsPath,
            assetsPath: options.assetsPath,
        },
        plugins: [
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: options.projectsPath,
                    path: options.projectsPath,
                },
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: options.writingsPath,
                    path: options.writingsPath,
                },
            },
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: options.assetsPath,
                    path: options.assetsPath,
                },
            },
            {
                resolve: 'gatsby-plugin-mdx',
                options: {
                    gatsbyRemarkPlugins: [
                        {
                            resolve: 'gatsby-remark-external-links',
                            options: {
                                target: '_blank',
                                rel: 'nofollow noopener noreferrer',
                            },
                        },
                        {
                            resolve: 'gatsby-remark-images',
                            options: {
                                maxWidth: 1200,
                                quality: 100,
                                showCaptions: true,
                                markdownCaptions: true,
                            },
                        },
                        {
                            resolve: 'gatsby-remark-custom-blocks',
                            options: {
                                blocks: {
                                    colTwo: {
                                        classes: 'col2',
                                    },
                                },
                            },
                        },
                        {
                            resolve: 'gatsby-remark-embedder',
                            options: {},
                        },
                    ],
                    remarkPlugins: [require('remark-unwrap-images')],
                },
            },
            'gatsby-remark-reading-time',
            'gatsby-transformer-sharp',
            'gatsby-plugin-sharp',
            'gatsby-plugin-typescript',
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-netlify',
            'gatsby-plugin-sitemap',
            {
                resolve: 'gatsby-plugin-alias-imports',
                options: {
                    alias: {
                        '@src': path.join(__dirname, 'src'),
                        '@components': path.join(__dirname, 'src', 'components'),
                        '@layouts': path.join(__dirname, 'src', 'layouts'),
                        '@styles': path.join(__dirname, 'src', 'styles'),
                        '@assets': path.join(__dirname, 'src', 'assets'),
                    },
                    extensions: ['js'],
                },
            },
            {
                resolve: `gatsby-plugin-styled-components`,
                options: {
                    // Add any options here
                },
            },
        ].filter(Boolean),
    };
};
