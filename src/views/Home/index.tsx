import React from 'react';
import { HomeContainer, FeedContainer } from './style';
import Name from './components/Name';
import WritingFeed from './components/WritingFeed';
import ProjectFeed from './components/ProjectFeed';

const HomePage: React.FC = () => (
    <HomeContainer>
        <Name />
        <FeedContainer>
            <ProjectFeed />
            <WritingFeed />
        </FeedContainer>
    </HomeContainer>
);

export default HomePage;
