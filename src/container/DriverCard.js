import React from 'react';
import {DriverCard} from '../components';
import {useRouteMatch} from "react-router-dom";


export function DriverCardContainer() {
    let { url } = useRouteMatch();
    return (
        <>
            <DriverCard>
                <DriverCard.LinkWrapper to={`${url}/1`}>
                    <DriverCard.InfoWrapper>
                        <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                        <DriverCard.Image src={'./images/main.jpg'}/>
                        <DriverCard.Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                        </DriverCard.Description>
                    </DriverCard.InfoWrapper>
                </DriverCard.LinkWrapper>
                <DriverCard.LinkWrapper to={`${url}/1`}>
                    <DriverCard.InfoWrapper>
                        <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                        <DriverCard.Image src={'./images/main.jpg'}/>
                        <DriverCard.Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                        </DriverCard.Description>
                    </DriverCard.InfoWrapper>
                </DriverCard.LinkWrapper>
                <DriverCard.LinkWrapper to={`${url}/1`}>
                    <DriverCard.InfoWrapper>
                        <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                        <DriverCard.Image src={'./images/main.jpg'}/>
                        <DriverCard.Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                        </DriverCard.Description>
                    </DriverCard.InfoWrapper>
                </DriverCard.LinkWrapper><DriverCard.LinkWrapper to={`${url}/1`}>
                <DriverCard.InfoWrapper>
                    <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                    <DriverCard.Image src={'./images/main.jpg'}/>
                    <DriverCard.Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                    </DriverCard.Description>
                </DriverCard.InfoWrapper>
            </DriverCard.LinkWrapper><DriverCard.LinkWrapper to={`${url}/1`}>
                <DriverCard.InfoWrapper>
                    <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                    <DriverCard.Image src={'./images/main.jpg'}/>
                    <DriverCard.Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                    </DriverCard.Description>
                </DriverCard.InfoWrapper>
            </DriverCard.LinkWrapper><DriverCard.LinkWrapper to={`${url}/1`}>
                <DriverCard.InfoWrapper>
                    <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                    <DriverCard.Image src={'./images/main.jpg'}/>
                    <DriverCard.Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                    </DriverCard.Description>
                </DriverCard.InfoWrapper>
            </DriverCard.LinkWrapper><DriverCard.LinkWrapper to={`${url}/1`}>
                <DriverCard.InfoWrapper>
                    <DriverCard.Nickname>Nickname</DriverCard.Nickname>
                    <DriverCard.Image src={'./images/main.jpg'}/>
                    <DriverCard.Description>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquam at autem commodi culpa dolore doloribus earum fugit laboriosam maiores odit porro quos reiciendis tempora unde veritatis, vitae!
                    </DriverCard.Description>
                </DriverCard.InfoWrapper>
            </DriverCard.LinkWrapper>





            </DriverCard>
        </>
    );
}