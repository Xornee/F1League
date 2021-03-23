import React from 'react';
import { Container, TextBig, Text, Button, TextWrapper, ImageWrapper, Wave } from './styles/heroSection';

export default function HeroSection({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

HeroSection.TextBig = function heroSectionTextBig({ children, ...restProps }) {
    return <TextBig {...restProps}>{children}</TextBig>;
};
HeroSection.TextWrapper = function heroSectionTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
HeroSection.ImageWrapper = function heroSectionImageWrapper({ children, ...restProps }) {
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};
HeroSection.Text = function heroSectionText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
HeroSection.Wave = function heroSectionWave({ children, ...restProps }) {
    return <Wave {...restProps}>{children}</Wave>;
};
HeroSection.Button = function heroSectionButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};