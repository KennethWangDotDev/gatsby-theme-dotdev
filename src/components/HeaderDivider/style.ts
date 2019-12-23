import styled from 'styled-components';
import { margin } from '@styles/typescale';

const headerDividerCss = `
    height: 3px;
    width: 6rem;
    margin: auto;
    ${margin('top', 0.75)}
    ${margin('bottom', 2)}
    border-color: #282828;
    background-color: #282828;
`;

const HeaderDivider = styled.hr`
    ${headerDividerCss}
`;

export { HeaderDivider, headerDividerCss };
