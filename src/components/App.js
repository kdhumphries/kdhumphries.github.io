import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Skills from './Skill/Skills';
import Footer from './Footer';
import ReactCharts from './acoustic-react-charts/ReactCharts';

const Landing = () => (
    <div>
        <main className="my-5">
            <Skills />
        </main>
    </div>
);

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Kevin D Humphries'
        };
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header title={this.state.title} />
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/ReactCharts" component={ReactCharts} />
                        </Switch>
                        <Footer title={this.state.title} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}