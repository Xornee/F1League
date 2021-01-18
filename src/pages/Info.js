import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {InfoContainer} from "../container/info";

export default function Home() {
    return (
        <>
            <NavContainer />
            <InfoContainer />
            <FooterContainer />
        </>
    );
}