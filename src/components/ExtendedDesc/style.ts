import styled from 'styled-components';
import { size, margin } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { underline } from '@styles/underline';
import { articleBlock } from '@src/views/ProjectTemplate/style';

const ExtendedDesc = styled.h2`
    ${articleBlock}
    ${size(2)};
    line-height: 1.55;
    ${useTitleFont}
    ${margin('bottom', 2)}
    font-weight: 400;
    text-align: left;
    white-space: pre-wrap;

    a {
        color: inherit;
        ${underline}
    }
`;

export { ExtendedDesc };
