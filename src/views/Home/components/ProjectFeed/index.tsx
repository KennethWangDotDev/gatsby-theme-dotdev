import React from 'react';
import LatestHeader from '@src/components/LatestHeader';
import PostPreview from '@components/PostPreview';
import useProjects from '@src/hooks/useProjects';

const ProjectFeed: React.FC = () => {
    const latestProject = useProjects()[0];
    const { title, description, slug, thumbnail } = latestProject;

    return (
        <LatestHeader category="Featured Project">
            <PostPreview
                imgSrc={thumbnail.childImageSharp.resize.src}
                title={title}
                postUrl={`projects/${slug}`}
                desc={description}
            />
        </LatestHeader>
    );
};

export default ProjectFeed;
