import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from "./constants/routes"
import { HomePage, About, Table, Discord, Info, Archive, Register } from "./pages";

function App() {
    return (
    <Router>
        <Switch>
            <Route exact path="/F1League">
                <HomePage />
            </Route>
            <Route exact path="/F1League/O-Nas">
                <About />
            </Route>
            <Route exact path="/F1League/Tabela">
                <Table />
            </Route>
            <Route exact path="/F1League/Discord">
                <Discord />
            </Route>
            <Route exact path="/F1League/Info">
                <Info />
            </Route>
            <Route exact path="/F1League/Archiwum">
                <Archive/>
            </Route>
            <Route exact path="/F1League/Register">
                <Register />
            </Route>
        </Switch>
    </Router>
    );
}

export default App;