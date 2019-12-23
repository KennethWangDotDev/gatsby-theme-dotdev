import styled from 'styled-components';
import { size, margin } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';

const NotFoundContainer = styled.section`
    text-align: center;
    ${margin('top', 3)}
    ${margin('bottom', 3)}
`;
const NotFound = styled.h1`
    ${size(15)}
    line-height: 1;
    ${useTitleFont}
`;

const NotFoundDesc = styled.h2`
    ${size(5)}
    line-height: 1;
    ${useTitleFont}
`;

export { NotFoundContainer, NotFound, NotFoundDesc };
