import React from 'react';
import useProjects from '@src/hooks/useProjects';
import Project from './components/Project';

const ProjectsList: React.FC = () => {
    const projects = useProjects();

    const projectsComponent = projects.map(({ themeColor, title, description, slug, cover }) => (
        <Project
            key={title}
            themeColor={themeColor}
            title={title}
            description={description}
            slug={slug}
            cover={cover}
        />
    ));

    return <>{projectsComponent}</>;
};

export default ProjectsList;
