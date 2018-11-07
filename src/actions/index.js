import {ActionTypes} from '../constants';

export function increment() {
  return {
    type: ActionTypes.INCREMENT
  };
};

export function decrement() {
  return {
    type: ActionTypes.DECREMENT
  };
};

export function reset() {
  return {
    type: ActionTypes.RESET
  };
};

export function setValue(value) {
  return {
    type: ActionTypes.SET_VALUE,
    value
  };
};