import React from 'react';
import BioMdx from '@src/texts/bio.mdx';
import { BioContainer } from './style';

const Bio: React.FC = () => (
    <BioContainer>
        <BioMdx />
    </BioContainer>
);

export default Bio;
