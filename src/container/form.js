import React from 'react';
import { Form, FormSuccess } from '../components';
import * as ROUTES from '../constants/routes';

export function FormContainer() {
    return (
        <>
        <Form>
            <Form.BigText>Zarejestruj Sie</Form.BigText>
            <Form.StyledForm>
                <Form.FormWrapper>
                    <Form.StyledLabel width={'50px'} htmlFor={"name"}>Imie</Form.StyledLabel>
                    <Form.StyledInput
                    type={"text"}
                    name={"name"}
                    />
                </Form.FormWrapper>
                <Form.FormWrapper>
                    <Form.StyledLabel width={'50px'} htmlFor={"name"}>Email</Form.StyledLabel>
                    <Form.StyledInput
                    type={"email"}
                    name={"email"}
                />
                </Form.FormWrapper>
                <Form.FormWrapper>
                    <Form.StyledLabel htmlFor={"Message"}>Wiadomosc Specjalna</Form.StyledLabel>
                    <Form.TextArea name={"message"} />
                </Form.FormWrapper>
                <Form.Button type={"submit"}>Zarejestruj Sie !</Form.Button>
           </Form.StyledForm>
        </Form>
        <FormSuccess />
        </>
    );
}