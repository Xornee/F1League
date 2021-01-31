import React, { useState, useEffect } from 'react';
import { Info } from '../components';
import {useRouteMatch} from "react-router-dom";
import post from '../constants/info.json'

export function InfoContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = post.data;
        setPosts(posts);
    }, [posts]);

    let { path, url } = useRouteMatch();

    return (
        <Info>
            <Info.SectionText>Wiadomości</Info.SectionText>

            {
                posts.map(post => {
                    if (post.size === "Big") {
                        return (
                            <Info.MainCardWrapper>
                                <Info.MainCardLink to={`${url}/${post.link}`}>
                                    <Info.MainImageCard/>
                                    <Info.MainTextWrapper>
                                        <Info.MainHeaderText>Example Article Text</Info.MainHeaderText>
                                        <Info.MainText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Adipisci
                                            aliquam architecto autem delectus dolore, est expedita impedit ipsum
                                            mollitia quas.</Info.MainText>
                                    </Info.MainTextWrapper>
                                </Info.MainCardLink>
                            </Info.MainCardWrapper>
                        );
                    } else {
                        return (
                                <Info.CardLink to={`${url}/${post.link}`}>
                                    <Info.ImageCard />
                                    <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Info.TextWrapper>
                                </Info.CardLink>
                        );
                    }
                })
            }



        </Info>

    );
}