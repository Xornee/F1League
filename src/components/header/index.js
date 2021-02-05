import React from "react";
import {
    Container,
    MainTitle,
    TitleText,
    TitleWrapper,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Header.MainTitle = function AboutMainTitle({ children, ...restProps }) {
    return <MainTitle {...restProps}>{children}</MainTitle>;
};
Header.TitleText = function AboutTitleText({ children, ...restProps }) {
    return <TitleText {...restProps}>{children}</TitleText>;
};
Header.TitleWrapper = function AboutTitleWrapper({ children, ...restProps }) {
    return <TitleWrapper {...restProps}>{children}</TitleWrapper>;
};