import React from 'react';
import SEO from '@components/SEO';
import Main from '@layouts/Main';
import Bio from './components/Bio';
import ImageArea from './components/ImageArea';
import { AboutContainer } from './style';

const AboutPage: React.FC = () => (
    <Main>
        <SEO title="About Me" pathname="/about" />
        <AboutContainer>
            <ImageArea />
            <Bio />
        </AboutContainer>
    </Main>
);

export default AboutPage;
