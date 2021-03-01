import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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
    '& .MuiSelect-select': {
      borderRadius: '5px',
      '&:focus': {
        backgroundColor: 'white',
      },
    },
  },
}));

const CustomSelect = ({ className, labelId, options, label, ...props }) => {
  const style = useStyles();
  const classes = classnames(className, style.root);
  return (
    <FormControl variant="filled" className={classes}>
      <InputLabel id={labelId}>{label}</InputLabel>
      {/* eslint-disable-next-line */}
      <Select labelId={labelId} {...props}>
        {options.map((item, index) => (
          <MenuItem value={item.value} key={index.toString()}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  labelId: PropTypes.string,
  label: PropTypes.string,
};

CustomSelect.defaultProps = {
  className: '',
  options: [],
  labelId: '',
  label: '',
};

export default CustomSelect;
