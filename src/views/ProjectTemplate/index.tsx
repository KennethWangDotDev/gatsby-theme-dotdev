import { graphql } from 'gatsby';
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Main from '@layouts/Main';
import SEO from '@src/components/SEO';
import { ProjectTemplateContainer, OverviewContainer, Title, Subtitle, Body } from './style';

const Post: React.FC<Props> = ({ data }: Props) => {
    const { title, body, description, slug } = data.project;
    return (
        <Main>
            <SEO title={title} description={description} pathname={`/writings/${slug}`} />
            <ProjectTemplateContainer>
                <OverviewContainer>
                    <Subtitle>Project Overview</Subtitle>
                    <Title>{title}</Title>
                </OverviewContainer>
                <Body>
                    <MDXRenderer>{body}</MDXRenderer>
                </Body>
            </ProjectTemplateContainer>
        </Main>
    );
};

export default Post;

type Props = {
    data: {
        project: {
            title: string;
            body: string;
            description: string;
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
        project(slug: { eq: $slug }) {
            body
            excerpt
            date(formatString: "DD.MM.YYYY")
            slug
            title
            description
            themeColor
            thumbnail {
                childImageSharp {
                    resize(width: 800, quality: 90) {
                        src
                    }
                }
            }
            cover {
                childImageSharp {
                    resize(width: 800, quality: 90) {
                        src
                    }
                }
            }
        }
    }
`;
