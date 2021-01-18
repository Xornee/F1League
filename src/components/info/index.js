import React from 'react';
import { Container, Text, CardWrapper } from './styles/info';

export default function Info({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Info.Text = function tableText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Info.CardWrapper = function tableCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};
Info.CardWrapperHuge = function tableCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};
Info.CardWrapper = function tableCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};
Info.CardWrapper = function tableCardWrapper({ children, ...restProps }) {
    return <CardWrapper {...restProps}>{children}</CardWrapper>;
};