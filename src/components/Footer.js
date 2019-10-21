import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ message }) => {
    return(
      <footer className="footer">
        <h2 className="myFooterClass">
          {message}
        </h2>
      </footer>
    );
};
  
Footer.propTypes = {
    message: PropTypes.string.isRequired
};

export default Footer;