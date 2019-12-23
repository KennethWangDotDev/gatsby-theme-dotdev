import styled from 'styled-components';
import chroma from 'chroma-js';
import Img from 'gatsby-image';
import { margin, size, media } from '@styles/typescale';
import { useTitleFont } from '@styles/fontFamily';

const containerWidth = 70;
const containerPadding = 3;
const containerPaddingTablet = 2;
const tabletView = str => `
    @media(max-width: 62.5em) {
        ${str};
    }
`;

interface ProjectContainerProps {
    background: string;
}
const ProjectContainer = styled.div<ProjectContainerProps>`
    max-width: ${containerWidth}rem;
    min-height: 26.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    ${margin('bottom', 1.5)}
    background-color: ${(props): string => (props.background ? props.background : 'white')};
    box-shadow: inset 0 0 10px ${(props): string =>
        props.background ? chroma(props.background).darken(1) : 'white'};

    ${tabletView`
        display: block;
    `};

    ${media.medium(`
        border-radius: .25rem;
    `)}
`;

const ThumbnailFlexContainer = styled.div`
    flex: 2;
`;

const ThumbnailContainer = styled.div`
    padding-left: ${containerPadding}rem;
    padding-top: ${containerPadding}rem;
    ${tabletView(`
        padding: ${containerPaddingTablet}rem;
        padding-bottom: 0;
    `)};
    ${media.medium(`
        padding: 0;
    `)}
`;

const Thumbnail = styled(Img)`
    width: 100%;
    ${tabletView`
        height: 100%;
        width: auto;
    `};
    @media (max-width: 56.25em) {
        width: 100%;
        height: auto;
    }
    vertical-align: bottom;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.4), 0 5px 15px 0 rgba(0, 0, 0, 0.2);
    ${media.medium(`
        box-shadow: 0;
    `)}
`;

const InfoContainer = styled.div`
    flex: 1;
    vertical-align: top;

    display: flex;
    align-items: center;
    padding-left: ${containerPadding}rem;
    padding-right: ${containerPadding}rem;
    ${tabletView(`
        padding: ${containerPaddingTablet}rem;
        padding-top: 1.5rem;
        padding-bottom: 3rem;
    `)};
`;

const Title = styled.h3`
    color: white;
    ${size(3)}
    line-height: 1.2;
    font-weight: 800;
    ${margin('bottom', 0.5)}
    ${useTitleFont}
`;

const Desc = styled.h4`
    opacity: 0.82;
    color: white;
    ${margin('bottom', 2)}
    white-space: pre-wrap;
    ${tabletView`
        white-space: normal;
    `};
`;

export {
    ProjectContainer,
    ThumbnailFlexContainer,
    ThumbnailContainer,
    Thumbnail,
    InfoContainer,
    Title,
    Desc,
};
