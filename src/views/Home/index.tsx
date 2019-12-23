import React from 'react';
import Main from '../../layouts/Main';
import { HomeContainer, FeedContainer } from './style';
import Name from './components/Name';
import WritingFeed from './components/WritingFeed';
import ProjectFeed from './components/ProjectFeed';

const HomePage: React.FC = () => (
    <Main>
        <HomeContainer>
            <Name />
            <FeedContainer>
                <ProjectFeed />
                <WritingFeed />
            </FeedContainer>
        </HomeContainer>
    </Main>
);

export default HomePage;
