import React from 'react';
import Main from '../../layouts/Main';
import { NotFoundContainer, NotFound, NotFoundDesc } from './style';

const NotFoundPage: React.FC = () => (
    <Main>
        <NotFoundContainer>
            <NotFound>404</NotFound>
            <NotFoundDesc>Page Not Found.</NotFoundDesc>
        </NotFoundContainer>
    </Main>
);

export default NotFoundPage;
