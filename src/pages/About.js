import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {AboutContainer} from "../container/about";

export default function Home() {
    return (
        <>
            <NavContainer />
            <AboutContainer />
            <FooterContainer />
        </>
    );
}