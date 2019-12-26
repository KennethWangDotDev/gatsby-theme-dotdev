import styled from 'styled-components';
import { headerFooterSpacing, headerFooterTextStyle } from '@styles/layout';
import { media } from '@styles/typescale';
import { palette } from '@styles/colors';
import { burgerMenu } from './menu.style';

const HeaderContainer = styled.header`
    ${headerFooterSpacing}
    display: flex;
    justify-content: space-between;
`;

const SiteTitle = styled.span`
    ${headerFooterTextStyle(true)}
`;

const NavigationContainer = styled.nav``;

const spaceBetweenLinks = 4;
const NavLinkDesktop = styled.span`
	${headerFooterTextStyle(true)}
    margin-left: ${spaceBetweenLinks / 2}rem;
	margin-right: ${spaceBetweenLinks / 2}rem;

	${media.medium(`
        margin-left: ${spaceBetweenLinks / 4}rem;
        margin-right: ${spaceBetweenLinks / 4}rem;
    `)}
    &:last-child {
		margin-right: 0;
	}
`;

const NavLinkMobile = styled.span`
    ${headerFooterTextStyle(false)};
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: ${palette.grey[100]};
    outline: none;
`;

const Desktop = styled.div`
    ${media.medium(`
        display: none;
    `)};
`;

const Mobile = styled.div`
    ${burgerMenu};
    display: none;
    ${media.medium(`
        display: block;
    `)};
`;

export {
    HeaderContainer,
    SiteTitle,
    NavigationContainer,
    NavLinkDesktop,
    NavLinkMobile,
    Desktop,
    Mobile,
};
