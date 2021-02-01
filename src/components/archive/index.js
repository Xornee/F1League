import React from 'react';
import { Container,
    Text,
    Title,
    LinkWrapper
} from './styles/Archive';

export default function Archive({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}
Archive.Text = function ArchiveText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Archive.Title = function ArchiveTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Archive.LinkWrapper = function ArchiveLinkWrapper({ children, ...restProps }) {
    return <LinkWrapper {...restProps}>{children}</LinkWrapper>;
};