import styled from 'styled-components';
import { size, margin, media } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';

const Container = styled.section`
    ${margin('bottom', 4)}

    ${media.medium(`
        margin-bottom: 4rem;
    `)}
`;

const Me = styled.h1`
    ${size(9)}
    line-height:1;
    ${useTitleFont}
    font-weight: 700;
`;

const Tagline = styled.h2`
    ${size(4)}
    line-height:1;
    ${useTitleFont}
    color: ${palette.grey[600]};
    font-weight: 700;
`;

export { Container, Me, Tagline };
