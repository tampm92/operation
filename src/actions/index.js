import {
  SET_FIRST_OPERAND,
  SET_SECOND_OPERAND,
  SET_OPERATOR,
} from '../constants';

export const setFirstOperandAction = (data) => ({
  type: SET_FIRST_OPERAND,
  data,
});

export const setSecondOperandAction = (data) => ({
  type: SET_SECOND_OPERAND,
  data,
});

export const setOperatorAction = (data) => ({
  type: SET_OPERATOR,
  data,
});
