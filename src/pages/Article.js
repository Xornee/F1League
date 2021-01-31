import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArticleContainer } from "../container/Article";

export default function Article(props) {
    return (
        <>
            <NavContainer />
            <ArticleContainer {...props}/>
            <FooterContainer />
        </>
    );
}