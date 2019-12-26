import React from 'react';
import PostPreview from '@components/PostPreview';
import useWritings from '@src/hooks/useWritings';
import { Container } from './style';

const WritingsList: React.FC = () => {
    const writings = useWritings();
    const writingsComponent = writings.map((writing) => (
        <Container key={writing.title}>
            <PostPreview
                large
                imgSrc={writing.thumbnail.childImageSharp.resize.src}
                title={writing.title}
                date={writing.date}
                desc={writing.description}
                postUrl={`writings/${writing.slug}`}
            />
        </Container>
    ));
    return <>{writingsComponent}</>;
};

export default WritingsList;
