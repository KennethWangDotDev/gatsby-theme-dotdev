import styled from 'styled-components';
import { size, margin } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';
import { bodyCss } from '@styles/body';
import { dividerCss } from '@components/Divider/style';
import { headerDividerCss } from '@src/components/HeaderDivider/style';

const ProjectTemplateContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const OverviewContainer = styled.section`
    max-width: 56rem;
    margin: auto;
`;

const Title = styled.h1`
    ${size(7)};
    line-height: 1;
    ${useTitleFont}
    font-weight: 600;
    text-align: center;
    ${margin('bottom', 2)}
`;

const Subtitle = styled.p`
    ${size(4)};
    line-height: 0.75;
    ${useTitleFont}
    color: ${palette.grey[500]};
    text-align: center;
    ${margin('bottom', 0.5)}
`;

const MAX_WIDTH = '56rem';

const articleBlock = `
    max-width: ${MAX_WIDTH};
    margin: auto;
`;

const Body = styled.div`
    ${bodyCss(articleBlock)}

    h1 {
        text-align: center;

        &::before {
            content: '';
            display: block;
            ${dividerCss}
        }

        &::after {
            content: '';
            display: block;
            height: 3px;
            ${headerDividerCss}
        }
    }

    & > .gatsby-resp-image-wrapper {
        max-width: ${MAX_WIDTH}!important;
    }

    .gatsby-resp-image-figure {
        max-width: ${MAX_WIDTH};
        margin-left: auto;
        margin-right: auto;
    }
`;

export { ProjectTemplateContainer, OverviewContainer, Title, Subtitle, Body, articleBlock };
