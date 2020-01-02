import React from 'react';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import useSiteMetadata from '@src/hooks/useSiteMetadata';
import {
    HeaderContainer,
    NavLinkDesktop,
    SiteTitle,
    NavigationContainer,
    NavLinkMobile,
    Desktop,
    Mobile,
} from './style';

const navLinks = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Projects',
        url: '/projects',
    },
    {
        title: 'Writings',
        url: '/writings',
    },
    {
        title: 'About',
        url: '/about',
    },
];

const Header: React.FC = () => {
    const { siteTitle } = useSiteMetadata();
    const NavLinks = (mobile = false): JSX.Element[] => {
        const NavLink = mobile ? NavLinkMobile : NavLinkDesktop;
        return navLinks.map((navLink) => (
            <NavLink key={navLink.title}>
                <Link to={navLink.url}>{navLink.title}</Link>
            </NavLink>
        ));
    };

    return (
        <HeaderContainer>
            <SiteTitle>
                <Link to="/">{siteTitle}</Link>
            </SiteTitle>
            <NavigationContainer>
                <Desktop>{NavLinks()}</Desktop>
                <Mobile>
                    <Menu right>{NavLinks(true)}</Menu>
                </Mobile>
            </NavigationContainer>
        </HeaderContainer>
    );
};

export default Header;
