import React from 'react';
import { Footer } from '../components';
import * as ROUTES from '../constants/routes';

export function FooterContainer({ children }) {
    return (
        <Footer>
            <Footer.Button>Button1</Footer.Button>
            <Footer.Button>Button2</Footer.Button>
            <Footer.Button>Button3</Footer.Button>
            <Footer.Text>Created by Szymon Mytych</Footer.Text>
            <Footer.Link>Link</Footer.Link>
        </Footer>
    );
}