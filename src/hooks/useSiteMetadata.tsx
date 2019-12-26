import { graphql, useStaticQuery } from 'gatsby';

type FooterLink = {
    title: string;
    url: string;
};

type SiteMetadata = {
    siteTitle: string;
    siteTitleAlt: string;
    siteHeadline: string;
    siteUrl: string;
    siteDescription: string;
    siteLanguage: string;
    siteImage: string;
    author: string;
    role: string;
    footerLinks: FooterLink[];
    projectsSubtitle: string;
    writingsSubtitle: string;
};

type Props = {
    site: {
        siteMetadata: SiteMetadata;
    };
};

const useSiteMetadata = (): SiteMetadata => {
    const data = useStaticQuery<Props>(graphql`
        query {
            site {
                siteMetadata {
                    siteTitle
                    siteTitleAlt
                    siteHeadline
                    siteUrl
                    siteDescription
                    siteLanguage
                    siteImage
                    author
                    role
                    footerLinks {
                        title
                        url
                    }
                    projectsSubtitle
                    writingsSubtitle
                }
            }
        }
    `);

    return data.site.siteMetadata;
};

export default useSiteMetadata;
