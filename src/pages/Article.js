import React from 'react';
import { NavContainer } from "../container/nav";
import { FooterContainer } from "../container/footer";
import { ArticleContainer } from "../container/Article";
import {HeaderContainer} from "../container/headerContainer";

export default function Article(props) {
    return (
        <>
            <NavContainer />
            <HeaderContainer Title={'Wiadomości'} Text={'Najnowsze wiadomości ze świata naszej Ligi'}/>
            <ArticleContainer {...props}/>
            <FooterContainer />
        </>
    );
}