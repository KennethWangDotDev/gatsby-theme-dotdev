import React from 'react';
import { NotFoundContainer, NotFound, NotFoundDesc } from './style';

const NotFoundPage: React.FC = () => (
    <NotFoundContainer>
        <NotFound>404</NotFound>
        <NotFoundDesc>Page Not Found.</NotFoundDesc>
    </NotFoundContainer>
);

export default NotFoundPage;
