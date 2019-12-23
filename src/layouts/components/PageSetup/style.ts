import { createGlobalStyle } from 'styled-components';
import { cssReset, typographyReset } from '../../../styles/reset';
import fontDisplaySettings from '../../../styles/fontDisplaySettings';

const GlobalStyle = createGlobalStyle`
    ${cssReset}
    ${typographyReset}
    ${fontDisplaySettings}
`;

export { GlobalStyle };
