import React from 'react';
import { Container, Logo, Link, Menu, LinkWrapper, NavWrapper } from './styles/nav';

export default function Nav({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Nav.Logo = function NavLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
};
Nav.Link = function NavLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};
Nav.Menu = function NavMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};
Nav.LinkWrapper = function NavLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};
Nav.NavWrapper = function NavLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};