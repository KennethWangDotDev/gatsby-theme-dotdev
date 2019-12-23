import React from 'react';
import { PostPreviewContainer, PostImage, PostContent, DateCmp, Title, Desc, Link } from './style';

const PostPreview: React.FC<Props> = ({
    date,
    imgSrc,
    title,
    desc,
    postUrl,
    large = false,
}: Props) => (
    <Link href={postUrl} target="_blank" rel="noopener noreferrer">
        <PostPreviewContainer>
            <PostImage src={imgSrc} large={large} />
            <PostContent>
                {date && <DateCmp>{date}</DateCmp>}
                <Title large={large}>{title}</Title>
                <Desc>{desc}</Desc>
            </PostContent>
        </PostPreviewContainer>
    </Link>
);

export default PostPreview;

type Props = {
    date?: string;
    imgSrc: string;
    title: string;
    desc: string;
    postUrl: string;
    large?: boolean;
};
