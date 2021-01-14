import React from 'react';
import { Container, Title } from './styles/table';

export default function table({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

table.Title = function tableTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};