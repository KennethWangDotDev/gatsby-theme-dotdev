import styled from 'styled-components';
import { media } from '@styles/typescale';

const shiftBreakpoint = (css: string) => `
    @media (max-width: 61.25em) {
        ${css}
    }
`;

const AboutContainer = styled.section`
    max-width: 75rem;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    justify-items: center;

    ${shiftBreakpoint(`
        grid-template-columns: 2fr 3fr;
    `)}

    ${media.medium(`
        display: block;
    `)};
`;

const ImageContent = styled.div``;

export { AboutContainer, ImageContent, shiftBreakpoint };
