import React from 'react';
import { Title, Subtitle } from './style';

const PageHeader: React.FC<Props> = ({ title, subtitle }: Props) => (
    <>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </>
);

export default PageHeader;

type Props = {
    title: string;
    subtitle: string;
};
