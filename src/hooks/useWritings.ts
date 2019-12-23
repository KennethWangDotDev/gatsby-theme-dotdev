import { useStaticQuery, graphql } from 'gatsby';
import { ChildImageSharpResize } from '@src/types/ChildImageSharp';

type Result = {
    slug: string;
    title: string;
    thumbnail: ChildImageSharpResize;
    description: string;
    date: string;
    categories: string[];
};

type Query = {
    allWriting: {
        nodes: Result[];
    };
};

const useWritings = (): Result[] => {
    const { allWriting } = useStaticQuery<Query>(graphql`
        query {
            allWriting(sort: { fields: date, order: DESC }) {
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
                    description
                    date(formatString: "MMMM Do YYYY")
                    categories
                }
            }
        }
    `);
    return allWriting.nodes;
};

export default useWritings;
