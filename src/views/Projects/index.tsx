import React from 'react';
import Main from '@layouts/Main';
import SEO from '@src/components/SEO';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import PageHeader from '@components/PageHeader';
import ProjectsList from './components/ProjectsList';
import { ProjectsContainer } from './style';

const ProjectsPage: React.FC = () => {
    const { projectsSubtitle } = useSiteMetadata();
    return (
        <Main>
            <SEO title="Projects" description={projectsSubtitle} pathname="/projects" />
            <ProjectsContainer>
                <PageHeader title="My Projects" subtitle={projectsSubtitle} />
                <ProjectsList />
            </ProjectsContainer>
        </Main>
    );
};

export default ProjectsPage;
