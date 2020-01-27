import React from 'react';
import PropTypes from 'prop-types';
import SuperpowerRating from '../SuperpowerRating';
import { Link } from 'react-router-dom';
//import { ReactCharts } from '../acoustic-react-charts/ReactCharts';

const SkillCard = (props) => (
    <div className="skill-card">
        <div className="skill-card card">
            <img className="card-img-top" src={props.skill.imageUrl} alt="" />
            <div className="card-body">
                <h4 className="card-title">{props.skill.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted"><Link to="/ReactCharts">{props.skill.subtitle}</Link></h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.skill.description}</p>
            </div>
            <div className="card-footer">
                <div className="clearfix">
                    <div className="float-left mt-1">
                        <SuperpowerRating rating={props.skill.rating} />
                    </div>
                    <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.skill.rating}</div>
                </div>
            </div>
        </div>
    </div>
);

SkillCard.defaultProps = {
    skill: {}
};

SkillCard.propTypes = {
    skill: PropTypes.object
};

export default SkillCard;