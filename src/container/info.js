import React from 'react';
import { Info } from '../components';
import * as ROUTES from '../constants/routes';

export function InfoContainer({ children }) {
    return (
        <Info>
            <Info.SectionText>Wiadomości</Info.SectionText>
            <Info.MainCardWrapper>
            <Info.MainCardLink>
                <Info.MainImageCard />
                <Info.MainTextWrapper>
                    <Info.MainHeaderText>Example Article Text</Info.MainHeaderText>
                    <Info.MainText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore, est expedita impedit ipsum mollitia quas.</Info.MainText>
                </Info.MainTextWrapper>
            </Info.MainCardLink>
        </Info.MainCardWrapper>

            <Info.CardWrapper>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Est expedita impedit ipsum mollitia quas.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Ipsum mollitia quas architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

            </Info.CardWrapper>
            <Info.MainCardWrapper>
                <Info.MainCardLink>
                    <Info.MainImageCard />
                    <Info.MainTextWrapper>
                        <Info.MainHeaderText>Example Article Text</Info.MainHeaderText>
                        <Info.MainText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            aliquam architecto autem delectus dolore, est expedita impedit ipsum mollitia quas.</Info.MainText>
                    </Info.MainTextWrapper>
                </Info.MainCardLink>
            </Info.MainCardWrapper>

            <Info.CardWrapper>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Consectetur adipisicing elit. Adipisci
                        aliquam architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Est expedita impedit ipsum mollitia quas.</Info.TextWrapper>
                </Info.CardLink>

                <Info.CardLink>
                    <Info.ImageCard />
                    <Info.TextWrapper>Ipsum mollitia quas architecto autem delectus dolore</Info.TextWrapper>
                </Info.CardLink>

            </Info.CardWrapper>
        </Info>
    );
}