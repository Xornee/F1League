import React from 'react';
import { Container, Button, Text, Link, Wrapper, ButtonWrapper, ButtonIcon } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Button = function FooterButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
Footer.ButtonWrapper = function FooterButtonWrapper({ children, ...restProps }) {
    return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
};
Footer.ButtonIcon = function FooterButtonIcon({ children, ...restProps }) {
    return <ButtonIcon {...restProps}>{children}</ButtonIcon>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};
Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};
