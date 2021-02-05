import React from 'react';
import {
    Container,
    CardWrapper,
    TextWrapper,
    MainText,
    Text,
    Image,
} from './styles/aboutUs';

export default function About({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
About.CardWrapper = function AboutCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};
About.TextWrapper = function AboutTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
About.MainText = function AboutMainText({ children, ...restProps }) {
    return <MainText {...restProps}>{children}</MainText>;
};
About.Text = function AboutText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
About.Image = function AboutImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};

