import styled from 'styled-components';
import { size, margin, media } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';
import { bodyCss } from '@src/styles/body';
import { headerDividerCss } from '@src/components/HeaderDivider/style';

const WritingPostContainer = styled.section`
    max-width: 65rem;
    margin-left: 12vw;

    ${media.large(`
        margin-left: 5.5vw;
    `)}

    ${media.medium(`
        margin-left: 0rem;
    `)}
`;

const Title = styled.h1`
    ${size(7)}
    line-height: 1.25;
    ${useTitleFont}
    text-align: left;
    font-weight: 600;
    white-space: pre-wrap;
`;

const Metadata = styled.h2`
    font-size: 0.95rem;
    text-align: left;
    ${margin('bottom', 2)}
    color: ${palette.grey[600]};
`;

const articleBlock = `
    max-width: 50rem;
`;

const Body = styled.div`
    ${bodyCss(articleBlock)}

    h1 {
        ${articleBlock}
        ${margin('top', 3)}

        &:after {
            content: '';
            display: block;
            ${headerDividerCss}
            margin: 0;
            ${margin('top', 0.5)}
            ${margin('bottom', 0.75)}
        }
    }

    h2 {
        ${articleBlock}
        ${size(3)}
        line-height: 1.2;
        ${margin('top', 2)}
        ${margin('bottom', 0.5)}
        ${useTitleFont}
        font-weight: 600;
    }
`;

export { WritingPostContainer, Title, Metadata, Body };
