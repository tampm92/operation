import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    '& > div': {
      backgroundColor: 'white',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: '5px',

      '&::before': {
        border: 'none',
      },

      '&:hover:before': {
        border: 'none',
      },

      '&::after': {
        border: 'none',
      },

      '&:hover': {
        backgroundColor: 'white',
      },
    },
    '& .Mui-focused': {
      color: 'rgba(0, 0, 0, 0.54)',
      backgroundColor: 'white',
    },
  },
}));

const Input = ({ className, ...props }) => {
  const style = useStyles();
  const classes = classnames(style.root, className);
  // eslint-disable-next-line
  return <TextField className={classes} {...props} variant="filled" />;
};

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
