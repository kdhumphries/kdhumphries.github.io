import React, { Component } from 'react';
import SkillList from './SkillList';
import SkillService from '../../services/SkillService';

export default class Skills extends Component {

    constructor() {
        super();

        this.state = {
            skills: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ skills: SkillService.getSkills() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <SkillList skills={this.state.skills} />
                    </div>
                </div>
            </div>
        );
    }
}