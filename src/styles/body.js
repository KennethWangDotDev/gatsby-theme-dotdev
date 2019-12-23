import { size, margin, media } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';
import { palette } from '@styles/colors';
import BgCode from '@assets/subtle/BgCode.png';

const bodyCss = articleBlock => `
    ${size(0)}
    line-height: 1.5;

    a {
        color: blue;
    }

    p,
    ul,
    ol {
        ${articleBlock}
        ${margin('bottom', 1)}
        font-size: inherit;
    }

    li {
        margin-left: 1rem;
    }

    h1 {
        ${articleBlock}
        ${size(5)}
        line-height: 1.35;
        ${useTitleFont}
        font-weight: 600;
    }

    .gatsby-resp-image-figure {
        ${margin('bottom', 1)};

        .gatsby-resp-image-wrapper {
            margin-bottom: 0;
        }
    }

    .gatsby-resp-image-wrapper {
        ${margin('bottom', 1)};
    }

    .gatsby-resp-image-figcaption {
        text-align: center;
        font-size: 0.9rem;
        color: ${palette.grey[600]};
    }

    .col2 .custom-block-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        max-width: 100%;
        .gatsby-resp-image-wrapper {
            margin-left: initial !important;
            margin-right: initial !important;
        }
        margin: auto;
    }

    blockquote {
        ${articleBlock}
        ${margin('bottom', 1)}
        border-left: 6px solid ${palette.grey[800]};
        padding: 1rem 0 1rem 1.6rem;
        ${useTitleFont}

        cite {
            color: ${palette.grey[600]};
        }

        p:last-child {
            margin-bottom: 0;
        }
    }

    .prism-code {
        padding: 2.5rem;
        font-size: 1rem;
        ${margin('bottom', 1)}
        overflow-x: auto;
        box-shadow: inset 0 0 10px black;
        background: url(${BgCode});
        ${useTitleFont}
    }

    code {
        padding: 2px 5px;
        background: #f5f5f5;
        font-size: 1rem;
    }

    iframe {
        height: 540px;

        ${media.medium(`
            height: 315px;
        `)}
    }

    .col2 .custom-block-body {
        max-width: 70rem;
    }
`;

export { bodyCss };
