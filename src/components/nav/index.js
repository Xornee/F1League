import React from 'react';
import { Container, Title } from './styles/nav';

export default function nav({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

nav.Title = function navTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};