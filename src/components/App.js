import React, { Component } from 'react';
import Header from './Header';
import Skills from './Skill/Skills';
import Footer from './Footer';

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
                <Header title={this.state.title} />
                <main className="my-5">
                    <Skills />
                </main>
                <Footer title={this.state.title} />
            </div>
        );
    }
}