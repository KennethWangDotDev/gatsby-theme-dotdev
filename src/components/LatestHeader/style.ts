import styled from 'styled-components';
import { useTitleFont } from '@styles/fontFamily';

const Container = styled.div``;

const Header = styled.header`
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.9rem;
    ${useTitleFont}
`;

export { Container, Header };
