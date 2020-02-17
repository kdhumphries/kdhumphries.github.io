import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => (
    <footer className="navbar py-3 bg-dark sticky-footer">
        <a href="https://www.linkedin.com/in/kevin-d-humphries">
            <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
        </a>
        <a href="mailTo:thekevindhumphries@gmail.com">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
    </footer>
);

Footer.defaultProps = {
    title: 'Title'
};

Footer.propTypes = {
    title: PropTypes.string
};

export default Footer;
