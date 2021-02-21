import React from 'react';
import {
    Container,
    MainTitle,
    SubTitle,
    Text,
    Paragraphs,
    Image,
    LinkA,
    InfoWrapper,
    InfoA

} from './styles/article';

export default function Article({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Article.MainTitle = function ArticleMainTitle({ children, ...restProps }) {
    return <MainTitle {...restProps}>{children}</MainTitle>;
};
Article.SubTitle = function ArticleSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Article.Text = function ArticleText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Article.InfoWrapper = function ArticleInfoWrapper({ children, ...restProps }) {
    return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};
Article.InfoA = function ArticleInfoA({ children, ...restProps }) {
    return <InfoA {...restProps}>{children}</InfoA>;
};
Article.Paragraphs  = function ArticleParagraphs ({ children, ...restProps }) {
    return <Paragraphs  {...restProps}>{children}</Paragraphs>;
};
Article.Image  = function ArticleImage ({ children, ...restProps }) {
    return <Image  {...restProps}>{children}</Image>;
};
Article.LinkA  = function ArticleLinkA ({ children, ...restProps }) {
    return <LinkA  {...restProps}>{children}</LinkA>;
};