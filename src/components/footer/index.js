import React from 'react';
import { Container, Button, Text, Link } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Button = function FooterButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};