import React from 'react';
import { Container, Logo, LinkA, Menu, LinkWrapper, NavWrapper, SmallNavButton, Dropdown, DropElements } from './styles/nav';

export default function Nav({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Nav.Logo = function NavLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>;
};
Nav.LinkA = function NavLinkA({ children, ...restProps }) {
    return <LinkA {...restProps}>{children}</LinkA>;
};
Nav.Menu = function NavMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};
Nav.LinkWrapper = function NavLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};
Nav.NavWrapper = function NavNavWrapper({ children, ...restProps }) {
    return <NavWrapper {...restProps}>{children}</NavWrapper>;
};
Nav.SmallNavButton = function NavSmallNavButton({ children, ...restProps }) {
    return <SmallNavButton {...restProps}>{children}</SmallNavButton>;
};
Nav.Dropdown = function NavDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};
Nav.DropElements = function NavDropElements({ children, ...restProps }) {
    return <DropElements {...restProps}>{children}</DropElements>;
};