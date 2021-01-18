import React from 'react';
import {Container, Button, FormWrapper, StyledForm, TextArea, Fieldset, StyledInput, Text, BigText, StyledLabel} from './styles/form';

export default function Form({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Form.Button = function FormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
Form.FormWrapper = function FormFormWrapper({ children, ...restProps }) {
    return <FormWrapper {...restProps}>{children}</FormWrapper>;
};
Form.StyledForm = function FormStyledForm({ children, ...restProps }) {
    return <StyledForm {...restProps}>{children}</StyledForm>;
};
Form.TextArea = function FormTextArea({ children, ...restProps }) {
    return <TextArea {...restProps}>{children}</TextArea>;
};
Form.Fieldset = function FormFieldset({ children, ...restProps }) {
    return <Fieldset {...restProps}>{children}</Fieldset>;
};
Form.StyledInput = function FormStyledInput({ children, ...restProps }) {
    return <StyledInput {...restProps}>{children}</StyledInput>;
};
Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Form.BigText = function FormBigText({ children, ...restProps }) {
    return <BigText {...restProps}>{children}</BigText>;
};
Form.StyledLabel = function FormStyledLabel({ children, ...restProps }) {
    return <StyledLabel {...restProps}>{children}</StyledLabel>;
};