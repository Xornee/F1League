import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, About, Table, Info, Archive, Register, Article } from "./pages";
import ThermsOfUse from "./pages/ThermsOfUse";

function App() {
    return (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/O-Nas">
                <About />
            </Route>
            <Route exact path="/Sezon1">
                <Table src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vTODv7igw2yonjxUur-kURwHxOldfVDRtM8H_2FGgN8i9C1Fgx_AyFQqCdR4LrSKqbTDbWRBd2uUv-i/pubhtml?widget=true&amp;headers=false%22%3E"} title={'Sezon1'} />
            </Route>
            <Route exact path="/Sezon2">
                <Table src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vR6SGAzApoFYWZean-KOq71EHbjwBD591v2RIU0kaxlt9UncGT3FOpLizzmQ65sgSKge7M8GDciV6dx/pubhtml?widget=true&amp;headers=false%22%3E"} title={'Sezon2'} />
            </Route>
            <Route exact path="/Sezon3">
                <Table src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vRj3kMJFlhjFH6aO7l7KDIQ7Idad3Zt6t_RNJ6GiLq3sFY5P-bgEICRO4eQ1BrkhQYUhP-hmE8_B7GG/pubhtml?widget=true&amp;headers=false%22%3E"} title={'Sezon3'} />
            </Route>
            <Route exact path="/Regulamin">
                <ThermsOfUse />
            </Route>
            <Route exact path="/Info">
                <Info />
            </Route>
            <Route exact path="/Archiwum">
                <Archive/>
            </Route>
            <Route exact path="/Archiwum/:season">
                <Archive season={''}/>
            </Route>
            <Route exact path="/Register">
                <Register />
            </Route>
            <Route exact path="/Info/:id" component={Article}>
            </Route>
        </Switch>
    </Router>
    );
}

export default App;