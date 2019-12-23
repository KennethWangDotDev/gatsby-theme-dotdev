import styled from 'styled-components';
import { media } from '../../styles/typescale';

const shiftBreakpoint = '55.5em';

const HomeContainer = styled.section`
    padding: 3rem;
    padding-left: 6rem;
    margin-top: 3rem;

    ${media.large(`
        padding: 3rem;
    `)}

    @media (max-width: ${shiftBreakpoint}) {
        padding-top: 0;
        padding-bottom: 0;
    }

    ${media.medium(`
        padding-left: 2rem;
        padding-right: 2rem;
        margin-top: 2rem;
    `)}

    ${media.small(`
        padding-left: 0rem;
        padding-right: 0rem;
        margin-top: 2rem;
    `)};
`;

const FeedContainer = styled.section`
    display: grid;
    max-width: 65rem;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5rem;

    ${media.large(`
        grid-column-gap: 3.5rem;
    `)}

    @media (max-width: ${shiftBreakpoint}) {
        max-width: 45rem;
        grid-template-columns: 1fr;
        grid-row-gap: 3.5rem;
    }
`;

export { HomeContainer, FeedContainer };
