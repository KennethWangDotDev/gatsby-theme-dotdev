import React from 'react';
import { Container, Header } from './style';

const LatestHeader: React.FC<Props> = ({ category, children }: Props) => (
    <Container>
        <Header>&gt; {category}</Header>
        {children}
    </Container>
);

export default LatestHeader;

type Props = {
    category: string;
    children: React.ReactNode;
};
