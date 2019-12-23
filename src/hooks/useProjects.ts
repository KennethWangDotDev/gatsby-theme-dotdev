import { useStaticQuery, graphql } from 'gatsby';
import { ChildImageSharpResize, ChildImageSharpFluid } from '@src/types/ChildImageSharp';

type Result = {
    slug: string;
    title: string;
    thumbnail: ChildImageSharpResize;
    themeColor: string;
    description: string;
    date: string;
    cover: ChildImageSharpFluid;
};

type Query = {
    allProject: {
        nodes: Result[];
    };
};

const useProjects = (): Result[] => {
    const { allProject } = useStaticQuery<Query>(graphql`
        query {
            allProject(sort: { fields: date, order: DESC }) {
                nodes {
                    slug
                    title
                    thumbnail {
                        childImageSharp {
                            resize(width: 150, quality: 90) {
                                src
                            }
                        }
                    }
                    themeColor
                    description
                    date(formatString: "DD.MM.YYYY")
                    cover {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 95) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
    `);
    return allProject.nodes;
};

export default useProjects;
