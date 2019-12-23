import React from 'react';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import { FooterContainer, Divider, FooterLinkContainer, FooterLink } from './style';

const Footer: React.FC = () => {
    const siteMetadata = useSiteMetadata();
    const { author, footerLinks } = siteMetadata;

    const FooterLinks = footerLinks.map(footerLink => (
        <FooterLink href={footerLink.url} target="_blank">
            {footerLink.title}
        </FooterLink>
    ));

    return (
        <FooterContainer>
            Footer: &#9400; {author}
            <Divider> |</Divider>
            <FooterLinkContainer>{FooterLinks}</FooterLinkContainer>
        </FooterContainer>
    );
};

export default Footer;
