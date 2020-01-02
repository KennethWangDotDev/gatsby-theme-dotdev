import { palette } from '@styles/colors';
import { media } from '@styles/typescale';

const burgerMenu = `
    /* Position and sizing of burger button */
    .bm-burger-button {
        position: absolute;
        width: 30px;
        height: 25px;
        right: 1rem;
        top: 1.5rem;
    }

    /* Color/shape of burger icon bars */
    .bm-burger-bars {
        background: ${palette.grey[800]};
        height: 15%;
    }

    /* Position and sizing of clickable cross button */
    .bm-cross-button {
        height: 36px !important;
        width: 36px !important;
        right: 16px !important;
        top: 12px !important;
    }

    /* Color/shape of close button cross */
    .bm-cross {
        background: #bdc3c7;
        width: 6px !important;
        height: 28px !important;
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
        top: 0;

        ${media.small(`
            width: 100vw!important;
        `)};
    }

    /* General sidebar styles */
    .bm-menu {
        background: #373a47;
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
        fill: #373a47;
    }

    /* Wrapper for item list */
    .bm-item-list {
        color: #b8b7ad;
        padding: 0.8em;
    }

    /* Individual item */
    .bm-item {
        display: inline-block;
    }

    /* Styling of overlay */
    .bm-overlay {
        background: rgba(0, 0, 0, 0.3);
    }
`;

export { burgerMenu };
