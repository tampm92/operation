import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '../commons/Input';
import { setFirstOperandAction } from '../../actions';

const useStyles = makeStyles((theme) => ({
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

  const firstOperand = useSelector((state) => state.expression.firstOperand);

  const dispatch = useDispatch();

  const onChange = (value) => {
    const newValue = parseInt(value, 10);
    dispatch(setFirstOperandAction(value));
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses}
            onClick={() => onChange(parseInt(number, 10))}
          >
            Add number
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNumber;
