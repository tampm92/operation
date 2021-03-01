import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '../commons/Input';
import SelectInput from '../commons/SelectInput';
import { setSecondOperandAction, setOperatorAction } from '../../actions';

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
    fontFamily: 'Helvetica Neue !important',
  },
}));

const AddNumber = () => {
  const dispatch = useDispatch();
  const [operand, setOperand] = useState('');
  const [operator, setOperator] = useState('');
  const style = useStyles();
  const classes = classnames(style.root, 'add-operation');
  const buttonClasses = classnames('custom-button', style.buttonRoot);
  const operators = [
    {
      label: '+',
      value: '+',
    },
    {
      label: '-',
      value: '-',
    },
    {
      label: '*',
      value: '*',
    },
    {
      label: '/',
      value: '/',
    },
  ];

  const onClick = () => {
    dispatch(setSecondOperandAction(parseInt(operand, 10)));
    dispatch(setOperatorAction(operator));
  };

  return (
    <div className={classes}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={4}>
          <SelectInput
            id="operator"
            label="Operator"
            labelId="operator-label"
            options={operators}
            className={style.inputRoot}
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <Input
            id="operand"
            label="Operand"
            className={style.inputRoot}
            type="number"
            value={operand}
            onChange={(e) => setOperand(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClasses}
            onClick={onClick}
          >
            Add operation
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddNumber;
