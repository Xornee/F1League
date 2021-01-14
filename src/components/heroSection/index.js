import React from 'react';
import { Container, Titlew   } from './styles/heroSection';

export default function heroSection({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

heroSection.Title = function heroSectionTitle({ children, ...restProps }) {
    return <Titlew {...restProps}>{children}</Titlew>;
};