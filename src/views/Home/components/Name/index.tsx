import React from 'react';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import { Container, Me, Tagline } from './style';

const Name: React.FC = () => {
    const siteMetadata = useSiteMetadata();
    const { author, role } = siteMetadata;

    return (
        <Container>
            <Me>{author}</Me>
            <Tagline>{role}</Tagline>
        </Container>
    );
};

export default Name;
