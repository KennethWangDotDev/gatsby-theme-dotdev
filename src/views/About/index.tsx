import React from 'react';
import SEO from '@components/SEO';
import Bio from './components/Bio';
import ImageArea from './components/ImageArea';
import { AboutContainer } from './style';

const AboutPage: React.FC = () => (
    <>
        <SEO title="About Me" pathname="/about" />
        <AboutContainer>
            <ImageArea />
            <Bio />
        </AboutContainer>
    </>
);

export default AboutPage;
