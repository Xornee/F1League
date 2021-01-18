import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {FormContainer} from "../container/form";

export default function Home() {
    return (
        <>
            <NavContainer />
            <FormContainer />
            <FooterContainer />
        </>
    );
}