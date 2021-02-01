import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, About, Table, Info, Archive, Register, Article } from "./pages";

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
            <Route exact path="/F1League/Tabela/:info" component={Table}>

            </Route>
            <Route exact path="/F1League/Panel-Glowny">
                <Register />
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
            <Route exact path="/F1League/Info/:name" component={Article}>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;