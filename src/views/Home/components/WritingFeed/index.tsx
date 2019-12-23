import React from 'react';
import LatestHeader from '@components/LatestHeader';
import PostPreview from '@components/PostPreview';
import useWritings from '@src/hooks/useWritings';

const WritingFeed: React.FC = () => {
    const latestWriting = useWritings()[0];
    const { title, description, slug, thumbnail } = latestWriting;

    return (
        <LatestHeader category="Latest Writing">
            <PostPreview
                imgSrc={thumbnail.childImageSharp.resize.src}
                title={title}
                postUrl={`writings/${slug}`}
                desc={description}
            />
        </LatestHeader>
    );
};

export default WritingFeed;
