import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {DriverContainer} from "../container/Driver";

export default function Driver() {
    return (
        <>
            <NavContainer />
            <DriverContainer />
            <FooterContainer />
        </>
    );
}