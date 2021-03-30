import React from 'react';
import {
    Container,
    InfoWrapper,
    Nickname,
    Description,
    DescriptionTitle,
    DescriptionText,
    Text,
    Iframe,
    Image
} from './styles/Driver';

export default function Driver({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Driver.InfoWrapper = function DriverCardInfoWrapper({ children, ...restProps }) {
    return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};
Driver.Nickname = function DriverCardNickname({ children, ...restProps }) {
    return <Nickname {...restProps}>{children}</Nickname>;
};
Driver.Description = function DriverCardDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>;
};
Driver.DescriptionTitle = function DriverDescriptionTitle({ children, ...restProps }) {
    return <DescriptionTitle {...restProps}>{children}</DescriptionTitle>;
};
Driver.DescriptionText = function DriverDescriptionText({ children, ...restProps }) {
    return <DescriptionText {...restProps}>{children}</DescriptionText>;
};
Driver.Text = function DriverText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Driver.Image = function DriverCardImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
Driver.Iframe = function DriverIframe({ children, ...restProps }) {
    return <Iframe {...restProps}>{children}</Iframe>;
};