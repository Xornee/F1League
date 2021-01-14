import React from 'react';
import { Container, Title } from './styles/footer';

export default function footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

footer.Title = function footerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};