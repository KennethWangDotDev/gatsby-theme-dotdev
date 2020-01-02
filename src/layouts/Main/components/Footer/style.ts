import styled from 'styled-components';
import { headerFooterSpacing, headerFooterTextStyle } from '@styles/layout';
import { underline } from '@styles/underline';
import { media } from '@styles/typescale';

const FooterContainer = styled.footer`
    ${headerFooterSpacing}
    ${headerFooterTextStyle(false)}
    line-height: 1.6;
    margin-top: 3rem;
`;

const FooterLinkContainer = styled.div`
    display: inline-block;
    ${media.medium(`
        display: block;
    `)}
`;

const spaceBetween = 1.75;

const Divider = styled.span`
    margin-right: ${spaceBetween / 2}rem;
    ${media.medium(`
        display: none;
    `)}
`;
const FooterLink = styled.a`
    ${underline}
    margin-left: ${spaceBetween / 2}rem;
    margin-right: ${spaceBetween / 2}rem;
    &:first-child {
        margin-left: 0;
    }
`;

export { FooterContainer, Divider, FooterLinkContainer, FooterLink };
