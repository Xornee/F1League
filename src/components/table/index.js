import React from 'react';
import { Container, Title, Iframe } from './styles/table';

export default function Table({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Table.Title = function tableTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Table.Iframe = function tableIframe ({ children, ...restProps }) {
    return <Iframe  {...restProps}>{children}</Iframe >;
};