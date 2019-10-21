import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
    return(
      <header className="header">
        <h2 className="myHeaderClass">
          {message}
        </h2>
      </header>
    );
};
  
Header.propTypes = {
    message: PropTypes.string.isRequired
};

export default Header;