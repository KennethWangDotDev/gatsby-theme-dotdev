import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Main from '@layouts/Main';
import SEO from '@src/components/SEO';
import { WritingPostContainer, Title, Metadata, Body } from './style';

const Post: React.FC<Props> = ({ data }: Props) => {
    const { title, date, body, timeToRead, words, description, slug } = data.writing;

    return (
        <Main>
            <SEO title={title} description={description} pathname={`/writings/${slug}`} />
            <WritingPostContainer>
                <Title>{title}</Title>
                <Metadata>
                    &gt; Published on {date}&nbsp;&nbsp;&bull;&nbsp;&nbsp;{words}{' '}
                    words&nbsp;&nbsp;&bull;&nbsp;&nbsp;{timeToRead}
                </Metadata>
                <Body>
                    <MDXRenderer>{body}</MDXRenderer>
                </Body>
            </WritingPostContainer>
        </Main>
    );
};

export default Post;

type Props = {
    data: {
        writing: {
            title: string;
            description: string;
            date: string;
            body: string;
            timeToRead: string;
            words: number;
            slug: string;
        };
    };
};

export const postQuery = graphql`
    query($slug: String!, $absolutePathRegex: String!) {
        images: allFile(
            filter: {
                absolutePath: { regex: $absolutePathRegex }
                extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
            }
            sort: { fields: name, order: ASC }
        ) {
            nodes {
                name
                childImageSharp {
                    fluid(maxWidth: 1600, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        writing(slug: { eq: $slug }) {
            body
            excerpt
            date(formatString: "MMMM Do YYYY")
            slug
            title
            description
            thumbnail {
                childImageSharp {
                    resize(width: 800, quality: 90) {
                        src
                    }
                }
            }
            categories
            timeToRead
            words
        }
    }
`;
