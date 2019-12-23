import styled from 'styled-components';
import { media } from '@styles/typescale';
import { shiftBreakpoint } from '../../style';

const ImageContainer = styled.div`
    position: relative;
    align-items: flex-end;
    display: flex;

    ${shiftBreakpoint(`
        display: block;
        box-shadow: none;
        margin-top: 3rem;
    `)};

    ${media.medium(`
        display: none;
    `)};
`;

const Face = styled.img`
    z-index: 10;
    position: relative;
    width: 100%;
`;

export { ImageContainer, Face };
