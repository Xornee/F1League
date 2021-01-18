import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { TableContainer } from "../container/table";

export default function Home() {
    return (
        <>
            <NavContainer />
            <TableContainer />
            <FooterContainer />
        </>
    );
}