import { bodyColor } from './colors';
import { useBodyFont } from './fontFamily';

const fontDisplaySettings = `
    @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700|Roboto:400,700|PT+Serif:400,400i,700&display=swap');
    html {
        font-size: 100%;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        color: ${bodyColor};
        ${useBodyFont}
    }
`;

export default fontDisplaySettings;
