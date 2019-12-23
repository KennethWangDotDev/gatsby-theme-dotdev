type ImageFluid = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    base64: string;
    tracedSVG: string;
    srcWebp: string;
    srcSetWebp: string;
    presentationHeight: number;
};

type ImageResize = {
    src: string;
};

export type ChildImageSharpResize = {
    childImageSharp: {
        resize: ImageResize;
    };
};

export type ChildImageSharpFluid = {
    childImageSharp: {
        fluid: ImageFluid;
    };
};

export type ChildImageSharp = {
    childImageSharp: {
        resize: ImageResize;
        fluid: ImageFluid;
    };
};
