import { media } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';
import { underline } from '@styles/underline';

const lrPadding = `
    padding-left: 6rem;
    padding-right: 6rem;

    ${media.large(`
        padding-left: 3rem;
        padding-right: 3rem;
    `)}

    ${media.medium(`
        padding-left: 0rem;
        padding-right: 0rem;
    `)}
`;

const headerFooterSpacing = `
    ${lrPadding}

    padding-top: 3rem;
    padding-bottom: 3rem;

    ${media.medium(`
        padding-top: 2rem;
        padding-bottom: 2rem;
    `)}
`;

const headerFooterTextStyle = (shouldUnderline: boolean): string => `
    color: ${palette.grey[600]};
    ${useTitleFont}
    ${shouldUnderline ? underline : ''}
`;

export { lrPadding, headerFooterSpacing, headerFooterTextStyle };
