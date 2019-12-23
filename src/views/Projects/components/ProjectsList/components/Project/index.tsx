import React from 'react';
import Button from '@components/Button';
import { ChildImageSharpFluid } from '@src/types/ChildImageSharp';
import {
    ProjectContainer,
    ThumbnailFlexContainer,
    ThumbnailContainer,
    Thumbnail,
    InfoContainer,
    Title,
    Desc,
} from './style';

const Project: React.FC<Props> = ({ themeColor, title, description, slug, cover }: Props) => (
    <ProjectContainer background={themeColor}>
        <ThumbnailFlexContainer>
            <ThumbnailContainer>
                <Thumbnail fluid={cover.childImageSharp.fluid} />
            </ThumbnailContainer>
        </ThumbnailFlexContainer>
        <InfoContainer>
            <div>
                <Title>{title}</Title>
                <Desc>{description}</Desc>
                <Button href={`projects/${slug}`} color={themeColor}>
                    Read More
                </Button>
            </div>
        </InfoContainer>
    </ProjectContainer>
);

export default Project;

type Props = {
    themeColor: string;
    title: string;
    description: string;
    slug: string;
    cover: ChildImageSharpFluid;
};
