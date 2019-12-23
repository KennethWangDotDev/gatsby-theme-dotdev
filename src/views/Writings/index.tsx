import React from 'react';
import SEO from '@src/components/SEO';
import PageHeader from '@components/PageHeader';
import Main from '@layouts/Main';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import WritingsList from './components/WritingsList';
import { WritingsContainer } from './style';

const WritingsPage: React.FC = () => {
    const { writingsSubtitle } = useSiteMetadata();
    return (
        <Main>
            <SEO title="Writings" description={writingsSubtitle} pathname="/writings" />
            <WritingsContainer>
                <PageHeader title="My Writings" subtitle={writingsSubtitle} />
                <WritingsList />
            </WritingsContainer>
        </Main>
    );
};

export default WritingsPage;
