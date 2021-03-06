import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '../commons/Input';
import { setFirstOperandAction } from '../../actions';
import isNumber from '../../utils/isNumber';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  inputRoot: {
    width: '100%',
  },
  buttonRoot: {
    height: '56px',
    fontSize: '18px',
    width: '100%',
  },
}));

const AddNumber = () => {
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const onChange = (value) => {
    const newValue = parseInt(value, 10);
    if (isNumber(newValue)) {
      dispatch(setFirstOperandAction(newValue));
      history.push('/result');
    }
  };

  const style = useStyles();
  const classes = classnames(style.root, 'add-number');
  const buttonClasses = classnames('custom-button', style.buttonRoot);

  return (
    <div className={classes}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Input
            id="filled-basic"
            label="Please enter a number"
            className={style.inputRoot}
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses}
            onClick={() => onChange(number)}
          >
            Add number
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNumber;
