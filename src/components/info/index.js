import React from 'react';
import {
    Container,
    SectionText,

    MainHeaderText,
    MainText,
    MainCardWrapper,
    MainTextWrapper,
    MainCardLink,
    MainImageCard,

    CardWrapper,
    ImageCard,
    TextCard,
    CardLink,
    TextWrapper,
} from './styles/info';

export default function Info({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Info.SectionText = function InfoSectionText({ children, ...restProps }) {
    return <SectionText {...restProps}>{children}</SectionText>;
};
Info.MainHeaderText = function InfoMainHeaderText({ children, ...restProps }) {
    return <MainHeaderText {...restProps}>{children}</MainHeaderText>;
};
Info.CardWrapper = function InfoCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};
Info.MainCardWrapper = function InfoMainCardWrapper({ children, ...restProps }) {
    return <MainCardWrapper {...restProps}>{children}</MainCardWrapper>;
};
Info.ImageCard = function InfoImageCard({ children, ...restProps }) {
    return <ImageCard {...restProps}>{children}</ImageCard>;
};
Info.TextCard = function InfoTextCard({ children, ...restProps }) {
    return <TextCard {...restProps}>{children}</TextCard>;
};
Info.MainTextWrapper = function InfoMainTextWrapper({ children, ...restProps }) {
    return <MainTextWrapper {...restProps}>{children}</MainTextWrapper>;
};
Info.CardLink = function InfoCardLink({ children, ...restProps }) {
    return <CardLink {...restProps}>{children}</CardLink>;
};
Info.MainCardLink = function InfoMainCardLink({ children, ...restProps }) {
    return <MainCardLink {...restProps}>{children}</MainCardLink>;
};
Info.TextWrapper = function InfoTextWrapper({ children, ...restProps }) {
    return <TextWrapper {...restProps}>{children}</TextWrapper>;
};
Info.MainImageCard = function InfoMainImageCard({ children, ...restProps }) {
    return <MainImageCard {...restProps}>{children}</MainImageCard>;
};
Info.MainText = function InfoMainTextnp({ children, ...restProps }) {
    return <MainText {...restProps}>{children}</MainText>;
};