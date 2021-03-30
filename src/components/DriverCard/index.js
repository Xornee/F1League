import React from 'react';
import {
    Container,
    InfoWrapper,
    LinkWrapper,
    Nickname,
    Description,
    Image
} from './styles/DriverCard';

export default function DriverCard({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
DriverCard.LinkWrapper = function DriverCardLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};
DriverCard.InfoWrapper = function DriverCardInfoWrapper({ children, ...restProps }) {
    return <InfoWrapper {...restProps}>{children}</InfoWrapper>;
};
DriverCard.Nickname = function DriverCardNickname({ children, ...restProps }) {
    return <Nickname {...restProps}>{children}</Nickname>;
};
DriverCard.Description = function DriverCardDescription({ children, ...restProps }) {
    return <Description {...restProps}>{children}</Description>;
};
DriverCard.Image = function DriverCardImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
