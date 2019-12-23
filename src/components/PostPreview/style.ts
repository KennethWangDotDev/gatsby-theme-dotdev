import styled, { css } from 'styled-components';
import { size, media } from '@styles/typescale';
import { palette } from '@styles/colors';
import { underline } from '@styles/underline';

const PostPreviewContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;

const imageSize = 6.5;

interface PostImageProps {
    large: boolean;
}
const PostImage = styled.img<PostImageProps>`
    margin-right: 1rem;
    border-radius: 50%;
    width: ${imageSize}rem;
    height: ${imageSize}rem;

    ${media.large(`
        width: ${imageSize * 0.75}rem;
        height: ${imageSize * 0.75}rem;
    `)}
    ${props =>
        props.large &&
        css`
            margin-top: 1rem;
        `}
`;

const PostContent = styled.div`
    flex: 1;
`;

const DateCmp = styled.h3`
    color: #a0a0a0;
    font-size: 0.9rem;
    line-height: 1.25rem;
`;

interface TitleProps {
    large: boolean;
}
const Title = styled.h1<TitleProps>`
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.25;
    ${props =>
        props.large &&
        css`
            ${size(1)}
        `}

    display: inline;
    ${underline}
`;

const Desc = styled.h2`
    font-size: 1rem;
    line-height: 1.45rem;
`;

const Link = styled.a`
    outline: none;
    &:hover h1 {
        color: blue;
        border-bottom-color: ${palette.grey[800]};
    }
`;

export { PostPreviewContainer, PostImage, PostContent, DateCmp, Title, Desc, Link };
