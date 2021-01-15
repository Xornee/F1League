import React from 'react';
import { Container, TextBig, Text, Button, TextWrapper } from './styles/heroSection';

export default function HeroSection({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

HeroSection.TextBig = function heroSectionTextBig({ children, ...restProps }) {
    return <TextBig {...restProps}>{children}</TextBig>;
};
HeroSection.TextWrapper = function heroSectionTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
HeroSection.Text = function heroSectionText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
HeroSection.Button = function heroSectionButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};