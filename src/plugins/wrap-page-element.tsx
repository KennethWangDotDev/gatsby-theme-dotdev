/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import SubtleBackground from '@assets/subtle/BgPage.png';

const Background = styled.div`
    background: url(${SubtleBackground});
    background-color: #e1d9cf;
    min-height: 100vh;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const wrapPage = ({ element }) => <Background>{element}</Background>;

export default wrapPage;
