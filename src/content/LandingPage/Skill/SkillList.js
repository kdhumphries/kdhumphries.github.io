import React from 'react';
import PropTypes from 'prop-types';
import SkillCard from './SkillCard';

const getSkills = skills => {
  return (
    <div className="card-deck">
      {skills.map(skill => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

const SkillList = props => <div>{getSkills(props.skills)}</div>;

SkillList.defaultProps = {
  skills: [],
};

SkillList.propTypes = {
  skills: PropTypes.array,
};

export default SkillList;
