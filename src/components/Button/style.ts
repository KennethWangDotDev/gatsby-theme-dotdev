import styled from 'styled-components';
import chroma from 'chroma-js';

interface ButtonProps {
    color: string;
}

/* eslint-disable indent */
const Button = styled.a<ButtonProps>`
    background-color: ${(props) =>
        props.color
            ? chroma(props.color)
                  .brighten(1)
                  .hex()
            : 'white'};
    border: 1px solid
        ${(props) =>
            props.color
                ? chroma(props.color)
                      .brighten(2)
                      .hex()
                : 'white'};
    color: white;
    padding: 1rem 3rem;
`;
/* eslint-enable indent */

export { Button };
