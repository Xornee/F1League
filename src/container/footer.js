import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export function FooterContainer({ children }) {
    return (
        <Footer>
            <Footer.Wrapper direction={'space-between'}>
                <Footer.Button color={"#3b5998"} bgColor={"#0e1f56"}>Facebook</Footer.Button>
                <Footer.Button color={"#e52d27"} bgColor={"#b31217"}>YouTube</Footer.Button>
                <Footer.Button color={"#2C2F33"} bgColor={"#7289DA"} image={''}>Discord</Footer.Button>
            </Footer.Wrapper>
            <Footer.Wrapper direction={'center'}>
                <Footer.Text>Created by Szymon Mytych</Footer.Text>
            </Footer.Wrapper>
        </Footer>
    );
}