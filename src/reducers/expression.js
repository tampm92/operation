import {
  SET_FIRST_OPERAND,
  SET_SECOND_OPERAND,
  SET_OPERATOR,
} from '../constants';

const initialState = {
  firstOperand: '',
  secondOperand: '',
  operator: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_OPERAND:
      return { ...state, firstOperand: action.data };
    case SET_SECOND_OPERAND:
      return { ...state, secondOperand: action.data };
    case SET_OPERATOR:
      return { ...state, operator: action.data };
    default:
      return state;
  }
};
