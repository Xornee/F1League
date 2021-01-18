import React from 'react';
import { Container, Button } from './styles/formSuccess';

export default function FormSuccess({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

FormSuccess.Button = function FormSuccessButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

