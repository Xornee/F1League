import React from 'react';
import {
    Container,
    MainTitle,
    SubTitle,
    Text,
    Paragraphs,
    Image,
    Link,
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
Article.Paragraphs  = function ArticleParagraphs ({ children, ...restProps }) {
    return <Paragraphs  {...restProps}>{children}</Paragraphs>;
};
Article.Image  = function ArticleImage ({ children, ...restProps }) {
    return <Image  {...restProps}>{children}</Image>;
};
Article.Link  = function ArticleLink ({ children, ...restProps }) {
    return <Link  {...restProps}>{children}</Link>;
};