import initResponsiveTypescale from 'responsive-typescale';

const breakpoint = {
    default: {
        base: 1.1,
        ratio: 1.2,
        lineHeight: 1.5,
    },
    extraLarge: {
        width: 1440,
        base: 1.05,
        ratio: 1.19,
        lineHeight: 1.45,
    },
    large: {
        width: 1080,
        base: 1,
        ratio: 1.175,
        lineHeight: 1.45,
    },
    medium: {
        width: 720,
        base: 1,
        ratio: 1.15,
        lineHeight: 1.45,
    },
    small: {
        width: 480,
        base: 1,
        ratio: 1.135,
        lineHeight: 1.45,
    },
};

const typescale = initResponsiveTypescale(breakpoint);
export const { size, margin, media, padding } = typescale;
