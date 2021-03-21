import React from 'react';
import {Info} from '../components';
import {useRouteMatch} from "react-router-dom";
import post from '../constants/info.js'

export function InfoContainer({Message}) {

    let { url } = useRouteMatch();

    if(Message){
        return (
            <Info>
                <h1>Akrualnie nie ma żadnych wiadomości!</h1>
            </Info>
        );
    }else {
        return (
            <Info>
                {
                    post.map((post) => {
                        if (post.size === "Big") {
                            return (
                                <Info.MainCardWrapper key={post._id}>
                                    <Info.MainCardLink to={`${url}/${post._id}`}>
                                        <Info.MainImageCard image={'/images/main.png'}/>
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
                        }
                    })
                }
                <Info.CardWrapper>
                    {
                        post.map((post) => {
                            if (post.size !== "Big") {
                                return (
                                    <Info.CardLink to={`${url}/${post._id}`}>
                                        <Info.ImageCard image={'/images/main.png'}/>
                                        <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit.</Info.TextWrapper>
                                    </Info.CardLink>
                                );
                            }
                        })
                    }
                </Info.CardWrapper>


            </Info>

        );
    }
}