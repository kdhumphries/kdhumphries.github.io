import React from 'react';
import PropTypes from 'prop-types';

const width = 130;

const styles = {
  superpowersInner: {
    width: `${width}px`,
  },
  superpowersEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  superpowersOuter: {
    overflow: 'hidden',
  },
  superpower: {
    padding: '1px',
  },
  superpowerI: {
    padding: '2.4px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5.5);
};

const SuperpowerRating = props => {
  const containerStyle = { width: `${cropWidth(props.rating)}px` };

  return (
    <div>
      <div style={styles.superpowersOuter}>
        <div style={containerStyle}>
          <div style={styles.superpowersEmptyInner}>
            <i
              className="fa fa-superpowers fa-lg"
              style={styles.superpower}></i>
            <i
              className="fa fa-superpowers fa-lg"
              style={styles.superpower}></i>
            <i
              className="fa fa-superpowers fa-lg"
              style={styles.superpower}></i>
            <i
              className="fa fa-superpowers fa-lg"
              style={styles.superpower}></i>
            <i
              className="fa fa-superpowers fa-lg"
              style={styles.superpower}></i>
          </div>
          <div style={styles.superpowersInner}>
            <i className="fa fa-circle fa-lg" style={styles.superpowerI}></i>
            <i className="fa fa-circle fa-lg" style={styles.superpowerI}></i>
            <i className="fa fa-circle fa-lg" style={styles.superpowerI}></i>
            <i className="fa fa-circle fa-lg" style={styles.superpowerI}></i>
            <i className="fa fa-circle fa-lg" style={styles.superpowerI}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

SuperpowerRating.defaultProps = {
  rating: 0,
};

SuperpowerRating.propTypes = {
  rating: PropTypes.number,
};

export default SuperpowerRating;
