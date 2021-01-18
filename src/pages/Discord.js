import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import {DiscordContainer} from "../container/discord";

export default function Home() {
    return (
        <>
            <NavContainer />
            <DiscordContainer />
            <FooterContainer />
        </>
    );
}