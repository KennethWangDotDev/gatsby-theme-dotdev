import styled from 'styled-components';
import { size, margin } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';

const Title = styled.h1`
    ${size(7)};
    line-height: 1.75;
    ${useTitleFont}
    font-weight: 600;
    text-align: center;
`;

const Subtitle = styled.h2`
    ${size(3)};
    line-height: 1.75;
    color: ${palette.grey[600]};
    ${useTitleFont}
    font-style: italic;
    text-align: center;
    ${margin('bottom', 2)}
`;

export { Title, Subtitle };
