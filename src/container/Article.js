import React, { useState, useEffect } from 'react';
import {Article} from '../components';
import post from "../constants/info.json";

export function ArticleContainer(props) {

    const [article, setarticle] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: ""
    });

    return (
        <>
        <Article>
            <h1>Strona w trakcie tworzenia</h1>
            <p>Dziekujemy za cierpliwosc</p>
        </Article>
        </>
    );
}