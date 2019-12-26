import styled from 'styled-components';
import chroma from 'chroma-js';
import { size, margin, media } from '@styles/typescale';

interface ArticleButtonProps {
    color: string;
}

/* eslint-disable indent */
const ArticleButton = styled.a<ArticleButtonProps>`
    background-color: ${(props) =>
        props.color
            ? chroma(props.color)
                  .brighten(1)
                  .hex()
            : 'white'};
    border: 2px solid ${(props) =>
        props.color
            ? chroma(props.color)
                  .brighten(2)
                  .hex()
            : 'white'};
    max-width: 30rem;
    padding: 2rem 0;
    display: block;
    text-align: center;
    margin: auto;
    ${size(2)}
    ${margin('top', 2)}
    ${margin('bottom', 4)}
    color: ${(props) =>
        props.color ? chroma.mix(props.color, 'white', 0.85).hex() : 'white'}!important;
    ${media.medium(`
        padding: 1.25rem 0;
    `)}
`;
/* eslint-enable indent */

export { ArticleButton };
