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
            <Route exact path="/F1League/Sezon1">
                <Table src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTODv7igw2yonjxUur-kURwHxOldfVDRtM8H_2FGgN8i9C1Fgx_AyFQqCdR4LrSKqbTDbWRBd2uUv-i/pubhtml?widget=true&amp;headers=false%22%3E"} title={'Sezon1'} />
            </Route>
            <Route exact path="/F1League/Sezon2">
                <Table src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vR6SGAzApoFYWZean-KOq71EHbjwBD591v2RIU0kaxlt9UncGT3FOpLizzmQ65sgSKge7M8GDciV6dx/pubhtml?widget=true&amp;headers=false%22%3E"} title={'Sezon2'} />
            </Route>
            <Route exact path="/F1League/Regulamin">
                <Article />
            </Route>
            <Route exact path="/F1League/Info">
                <Info />
            </Route>
            <Route exact path="/F1League/Archiwum">
                <Archive/>
            </Route>
            <Route exact path="/F1League/Archiwum/:season">
                <Archive season={''}/>
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