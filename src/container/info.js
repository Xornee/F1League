import React from 'react';
import { Info } from '../components';
import {useRouteMatch} from "react-router-dom";
import * as ROUTES from '../constants/routes';

export function InfoContainer({ children }) {
    let { path, url } = useRouteMatch();
    return (
        <Info>
            <Info.SectionText>Wiadomości</Info.SectionText>
            <Info.MainCardWrapper>
            <Info.MainCardLink to={`${url}/CardLink`}>
                <Info.MainImageCard />
                <Info.MainTextWrapper>
                    <Info.MainHeaderText>Example Article Text</Info.MainHeaderText>
                    <Info.MainText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore, est expedita impedit ipsum mollitia quas.</Info.MainText>
                </Info.MainTextWrapper>
            </Info.MainCardLink>
        </Info.MainCardWrapper>

            <Info.CardWrapper>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Est expedita impedit ipsum mollitia quas.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Ipsum mollitia quas architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

            </Info.CardWrapper>
            <Info.MainCardWrapper>
                <Info.MainCardLink to={`${url}/CardLink`}>
                    <Info.MainImageCard />
                    <Info.MainTextWrapper>
                        <Info.MainHeaderText>Example Article Text</Info.MainHeaderText>
                        <Info.MainText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            aliquam architecto autem delectus dolore, est expedita impedit ipsum mollitia quas.</Info.MainText>
                    </Info.MainTextWrapper>
                </Info.MainCardLink>
            </Info.MainCardWrapper>

            <Info.CardWrapper>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Est expedita impedit ipsum mollitia quas.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink to={`${url}/CardLink`}>
                    <Info.ImageCard />
                    <Info.TextWrapper>Ipsum mollitia quas architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

            </Info.CardWrapper>
        </Info>
    );
}