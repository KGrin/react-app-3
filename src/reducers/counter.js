import {ActionTypes} from '../constants';

export default (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    case ActionTypes.RESET:
      return 0;
    case ActionTypes.SET_VALUE:
      return action.value;
    default:
      return state;
  }
};