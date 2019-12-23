import styled from 'styled-components';
import { margin } from '@styles/typescale';

const dividerCss = `
    border: 0;
    height: 1px;
    background-image: linear-gradient(90deg, transparent, rgba(0,0,0,.35), transparent);
    width: 100%;
    ${margin('top', 3)}
    ${margin('bottom', 3)}
`;

const Divider = styled.hr`
    ${dividerCss}
`;

export { Divider, dividerCss };
