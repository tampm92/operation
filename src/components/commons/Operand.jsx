import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Operand = ({ value, className }) => {
  const classes = classnames('operand', className);
  return <div className={classes}>{value}</div>;
};

Operand.propTypes = {
  value: PropTypes.instanceOf([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

Operand.defaultProps = {
  className: '',
};

export default Operand;
