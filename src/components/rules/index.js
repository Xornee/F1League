import React from 'react';
import { Container, MainTitle, RulesTitle, Text } from './styles/rules';

export default function Rule({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Rule.MainTitle = function RuleMainTitle({ children, ...restProps }) {
    return <MainTitle {...restProps}>{children}</MainTitle>;
};
Rule.RulesTitle = function RuleRulesTitle({ children, ...restProps }) {
    return <RulesTitle {...restProps}>{children}</RulesTitle>;
};
Rule.Text = function RuleText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};