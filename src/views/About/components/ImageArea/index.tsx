import React from 'react';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageContainer, Face } from './style';

const ImageArea: React.FC = () => {
    const { author } = useSiteMetadata();
    const avatar = useStaticQuery(graphql`
        query {
            file(name: { eq: "avatar" }) {
                childImageSharp {
                    fixed(width: 505, quality: 100) {
                        src
                    }
                }
            }
        }
    `);
    return (
        <ImageContainer>
            <Face src={avatar.file.childImageSharp.fixed.src} alt={author} />
        </ImageContainer>
    );
};

export default ImageArea;
